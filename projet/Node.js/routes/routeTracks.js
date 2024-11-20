const express = require('express');
const router = express.Router();
const TrackService = require('../service/TracksService');

// GET /tracks
router.get('/tracks', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
        const result = await TrackService.tracksGET(limit, offset);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Autres routes...
router.get('/tracks/:id', async (req, res) => {
    try {
        const result = await TrackService.tracksIdGET(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;
