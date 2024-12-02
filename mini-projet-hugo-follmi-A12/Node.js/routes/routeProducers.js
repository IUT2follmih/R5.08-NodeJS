const express = require('express');
const router = express.Router();
const ProducersService = require('../service/ProducersService');

// GET /tracks
router.get('/producers', async (req, res) => {
    try {
        const {limit = 5, offset = 0} = req.query;
        const result = await ProducersService.producersGET(limit, offset);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Autres routes...
router.get('/producers/:id', async (req, res) => {
    try {
        const result = await ProducersService.producersIdGET(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.get('/producers/:id/tracks', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
        const result = await ProducersService.producersIdTracksGET(req.params.id, limit, offset);
        res.json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.post('/producers', async (req, res) => {
    try {
        const result = await ProducersService.producersPOST(req.body);
        res.status(201).json({
            code: 201,
            message: `Producer successfully created with ID: ${result.id}`,
            producer: result
        });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.put('/producers/:id', async (req, res) => {
    try {
        const result = await ProducersService.producersIdPUT(req.body, req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

router.delete('/producers/:id', async (req, res) => {
    try {
        await ProducersService.producersIdDELETE(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;
