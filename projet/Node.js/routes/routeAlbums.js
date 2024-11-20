const express = require('express');
const router = express.Router();
const AlbumsService = require('../service/AlbumsService');

// GET /tracks
router.get('/albums', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
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

module.exports = router;
