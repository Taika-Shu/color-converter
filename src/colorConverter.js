function hexToRGB(hex) {
    const cleanHex = hex.replace("#", "");

    if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
        throw new Error("Invalid hexadecimal color");
    }

    return {
        r: parseInt(cleanHex.substring(0, 2), 16),
        g: parseInt(cleanHex.substring(2, 4), 16),
        b: parseInt(cleanHex.substring(4, 6), 16)
    };
}

module.exports = {
    hexToRGB
};