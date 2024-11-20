const express = require('express');
const router = express.Router();
const ArtistsService = require('../service/ArtistsService');

// GET /tracks
router.get('/artists', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
        const result = await ArtistsService.artistsGET(limit, offset);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Autres routes...
router.get('/artists/:id', async (req, res) => {
    try {
        const result = await ArtistsService.artistsIdGET(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;
