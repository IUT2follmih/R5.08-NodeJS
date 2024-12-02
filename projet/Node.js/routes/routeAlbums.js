const express = require('express');
const router = express.Router();
const AlbumsService = require('../service/AlbumsService');

// GET /tracks
router.get('/albums', async (req, res) => {
    try {
        const {limit = 15, offset = 0} = req.query;
        const result = await AlbumsService.albumsGET(limit, offset);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Autres routes...
router.get('/albums/:id', async (req, res) => {
    try {
        const result = await AlbumsService.albumsIdGET(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.get('/albums/:id/tracks', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
        const result = await AlbumsService.albumsIdTracksGET(req.params.id, limit, offset);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.post('/albums', async (req, res) => {
    try {
        const result = await AlbumsService.albumsPOST(req.body);
        res.status(201).json({
            code: 201,
            message: `Album successfully created with ID: ${result.id}`,
            album: result
        });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.put('/albums/:id', async (req, res) => {
    try {
        const result = await AlbumsService.albumsIdPUT(req.body, req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.delete('/albums/:id', async (req, res) => {
    try {
        await AlbumsService.albumsIdDELETE(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;
