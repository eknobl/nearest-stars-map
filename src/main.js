
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { stars } from './data/stars.js';
import { sphericalToCartesian, getStarColor } from './utils/astronomy.js';

// --- Scene Setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(10, 10, 10); // Start offset to see the cluster

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// --- Controls ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 1;
controls.maxDistance = 100;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

// --- Lighting ---
// Ambient light for general visibility
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// Point light at the Sun (0,0,0) to illuminate nearby objects (if we had non-emissive ones)
const sunLight = new THREE.PointLight(0xffffff, 1.5, 100);
scene.add(sunLight);

// --- Star Field (Background) ---
const starGeo = new THREE.BufferGeometry();
const starCount = 5000;
const posArray = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
  // Random positions far away
  posArray[i] = (Math.random() - 0.5) * 500;
}
starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const starMat = new THREE.PointsMaterial({
  size: 0.1,
  color: 0xffffff,
  transparent: true,
  opacity: 0.8,
});
const starMesh = new THREE.Points(starGeo, starMat);
scene.add(starMesh);


// --- Nearest Stars Construction ---
const raycastTargets = [];
const starObjects = []; // To store metadata with mesh

// Helper to create label
function createLabel(text) {
  const div = document.createElement('div');
  div.className = 'label';
  div.textContent = text;
  div.style.display = 'none'; // Hidden by default
  document.body.appendChild(div);
  return div;
}

// 1. Visual Scale Factor
// Distances are in Light Years (e.g. Proxima is ~4.24). 
// Stars are huge but tiny compared to LY. We must fake the scale of stars to be visible.
const STAR_SCALE = 0.1;

stars.forEach(star => {
  // Calculate Position
  const coords = sphericalToCartesian(star.ra, star.dec, star.distance_ly);

  // Geometry & Material
  // Sun is huge compared to others, but we might want to clamp sizes for usability
  let visualRadius = star.radius * STAR_SCALE;

  // Make very small stars at least visible
  if (visualRadius < 0.05) visualRadius = 0.05;
  // Cap Sun size so it doesn't dominate too much if we zoom out? 
  // Actually Sun radius 1 * 0.1 = 0.1. Typically fine.

  const geometry = new THREE.SphereGeometry(visualRadius, 32, 32);

  const colorHex = star.color || getStarColor(star.spectral_class);
  const material = new THREE.MeshStandardMaterial({
    color: colorHex,
    emissive: colorHex,
    emissiveIntensity: 2 // Make them glow
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(coords.x, coords.y, coords.z);

  // Data attached to mesh for raycasting
  mesh.userData = star;

  scene.add(mesh);
  raycastTargets.push(mesh);

  // Create label element
  const labelDiv = createLabel(star.name);
  starObjects.push({ mesh, labelDiv, data: star });

  // Add reference line to Sun (0,0,0) for context?
  // Maybe only on hover to avoid clutter.
});


// --- Interaction (Hover) ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hoveredStar = null;

// UI Info Panel
const infoDiv = document.createElement('div');
infoDiv.id = 'info';
infoDiv.innerHTML = `<h1>Nearest Stars</h1><p>Hover over a star</p>`;
document.body.appendChild(infoDiv);

function updateInfo(starData) {
  if (!starData) {
    infoDiv.innerHTML = `<h1>Nearest Stars</h1><p>Hover over a star</p>`;
    return;
  }
  infoDiv.innerHTML = `
        <h1>${starData.name}</h1>
        <p>Distance: ${starData.distance_ly} ly</p>
        <p>Spectral: ${starData.spectral_class}</p>
        <p>Coordinates: ${starData.ra.toFixed(2)}°, ${starData.dec.toFixed(2)}°</p>
    `;
  infoDiv.classList.add('visible');
}

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});


// --- Animation Loop ---
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  // Raycasting
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(raycastTargets);

  if (intersects.length > 0) {
    if (hoveredStar !== intersects[0].object) {
      hoveredStar = intersects[0].object;
      document.body.style.cursor = 'pointer';
      updateInfo(hoveredStar.userData);
    }
  } else {
    if (hoveredStar) {
      hoveredStar = null;
      document.body.style.cursor = 'default';
      // Optional: clear info or leave last selected? 
      // Let's leave it for now or clear if we want "hover only" mode.
      // updateInfo(null); 
    }
  }

  // Update Labels positions
  // We only show label for hovered star or all? 
  // Showing all creates clutter. Let's show label for the hover, or maybe closest few?
  // For now, let's just show label for the hovered star + Sun.

  starObjects.forEach(obj => {
    if (obj.data.name === 'Sun' || obj.mesh === hoveredStar) {
      // Project 3D position to 2D
      const tempV = new THREE.Vector3();
      obj.mesh.getWorldPosition(tempV);
      tempV.project(camera);

      // Convert to CSS coordinates
      const x = (tempV.x * .5 + .5) * window.innerWidth;
      const y = (tempV.y * -.5 + .5) * window.innerHeight;

      obj.labelDiv.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`;
      obj.labelDiv.style.display = 'block';

      // Crude depth check: hide if behind camera
      // tempV.z > 1 means behind 'near' plane in NDC? no, outside [-1,1]
      // Actually check if z is within valid range?
      // With simple controls, usually fine.
      if (Math.abs(tempV.z) > 1) {
        obj.labelDiv.style.display = 'none';
      }

    } else {
      obj.labelDiv.style.display = 'none';
    }
  });

  renderer.render(scene, camera);
}

// --- Resize Handler ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
