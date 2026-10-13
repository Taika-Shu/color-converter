/**
 * Converts a hexadecimal color string to an RGB object.
 * Supports formats like "#FF5733", "FF5733", "#F53", and "F53".
 * @param {string} hex - The hexadecimal color string.
 * @returns {{r: number, g: number, b: number}} An object with r, g, b values (0-255).
 * @throws {Error} If the input is not a valid hex color.
 */
function hexToRgb(hex) {
    if (typeof hex !== 'string') {
        throw new Error('Input must be a string.');
    }

    let clean = hex.replace('#', '').trim();

    // Expand shorthand form (e.g. "F53") to full form ("FF5533")
    if (clean.length === 3) {
        clean = clean.split('').map((c) => c + c).join('');
    }

    if (clean.length !== 6) {
        throw new Error('Invalid hex color length.');
    }

    if (!/^[0-9A-Fa-f]{6}$/.test(clean)) {
        throw new Error('Invalid hex color characters.');
    }

    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);

    return { r, g, b };
}

module.exports = { hexToRgb };