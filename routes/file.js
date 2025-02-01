const express = require('express');
const path = require('path');
const router = express.Router();

// Endpoint to get a file by name
router.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '..', 'storage', filename);
    res.sendFile(filePath, err => {
        if (err) {
            res.status(err.status).end();
        }
    });
});

module.exports = router;
