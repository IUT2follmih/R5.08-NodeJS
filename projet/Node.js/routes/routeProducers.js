const express = require('express');
const router = express.Router();
const ProducersService = require('../service/ProducersService');

// GET /tracks
router.get('/producers', async (req, res) => {
    try {
        const {limit = 20, offset = 0} = req.query;
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

module.exports = router;
