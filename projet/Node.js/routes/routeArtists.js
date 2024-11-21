const express = require('express');
const router = express.Router();
const ArtistsService = require('../service/ArtistsService');

// GET /tracks
router.get('/artists', async (req, res) => {
    try {
        const {limit = 10, offset = 0} = req.query;
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

router.get('/artists/:id/tracks', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
        const result = await ArtistsService.artistsIdTracksGET(req.params.id, limit, offset);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.get('/artists/:id/albums', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
        const result = await ArtistsService.artistsIdAlbumsGET(req.params.id, limit, offset);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.post('/artists', async (req, res) => {
    try {
        await ArtistsService.artistsPOST(req.body);
        res.status(201).end();
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.put('/artists/:id', async (req, res) => {
    try {
        await ArtistsService.artistsIdPUT(req.body, req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.delete('/artists/:id', async (req, res) => {
    try {
        await ArtistsService.artistsIdDELETE(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;
