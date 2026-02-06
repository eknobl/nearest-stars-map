
/**
 * Converts spherical coordinates (RA, Dec, Distance) to Cartesian (x, y, z).
 * 
 * @param {number} ra - Right Ascension in degrees (0-360)
 * @param {number} dec - Declination in degrees (-90 to +90)
 * @param {number} dist - Distance in Light Years
 * @returns {object} {x, y, z} coordinates
 */
export function sphericalToCartesian(ra, dec, dist) {
    // Convert degrees to radians
    const raRad = (ra * Math.PI) / 180;
    const decRad = (dec * Math.PI) / 180;

    // Standard conversion
    // x = d * cos(dec) * cos(ra)
    // y = d * cos(dec) * sin(ra)
    // z = d * sin(dec)

    // Mapping to Three.js coordinate system (Y-up is common, but Z-up is often mapped to Y for space)
    // Let's keep standard math first:
    // X points to vernal equinox (RA=0, Dec=0)
    // Z points to North Celestial Pole (Dec=90)
    // Y is 90 deg RA along celestial equator

    // In Three.js:
    // Usually Y is up. So we map Z(astronomy) -> Y(threejs)
    // X(astronomy) -> X(threejs)
    // Y(astronomy) -> -Z(threejs) (Right handed system flip)

    const x = dist * Math.cos(decRad) * Math.cos(raRad);
    const y = dist * Math.cos(decRad) * Math.sin(raRad);
    const z = dist * Math.sin(decRad);

    return {
        x: x,
        y: z, // Up in Three.js
        z: -y // Depth in Three.js
    };
}

/**
 * Calculates a color from spectral class (very simplified).
 * @param {string} spectralClass 
 * @returns {number} Hex color
 */
export function getStarColor(spectralClass) {
    // Already hardcoded in data, but good utility for future
    if (spectralClass.startsWith('O')) return 0x99ccff;
    if (spectralClass.startsWith('B')) return 0xeeeeff;
    if (spectralClass.startsWith('A')) return 0xffffff;
    if (spectralClass.startsWith('F')) return 0xffffdd;
    if (spectralClass.startsWith('G')) return 0xffddaa; // Sun-like
    if (spectralClass.startsWith('K')) return 0xffbb99;
    if (spectralClass.startsWith('M')) return 0xff5555; // Red Dwarf
    return 0xffffff;
}
