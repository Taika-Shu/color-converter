const express = require('express');
const { hexToRgb } = require('./src/color');

const app = express();
const PORT = 3000;

/**
 * GET /convert
 * Query parameter: hex (e.g. "#FF5733" or "FF5733")
 * Returns JSON: { r, g, b } or an error message.
 */
app.get('/convert', (req, res) => {
    const hex = req.query.hex;

    if (!hex) {
        return res.status(400).json({ error: 'Missing "hex" query parameter.' });
    }

    try {
        const rgb = hexToRgb(hex);
        return res.json(rgb);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// Start the server only when this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;
