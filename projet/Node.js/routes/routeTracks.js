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

router.get('/tracks/:id/musical-info', async (req, res) => {
    try {
        const result = await TrackService.tracksIdMusical_infoGET(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.get('/tracks/:id/stats', async (req, res) => {
    try {
        const result = await TrackService.tracksIdStatsGET(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.get('/tracks/style/:style', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
        const result = await TrackService.tracksByStyleGET(req.params.style, limit, offset);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;
