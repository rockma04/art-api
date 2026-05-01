const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const homeCarousel = db.prepare(`
            SELECT id, image
            FROM homeCarousel
            ORDER BY id
        `).all();
        res.json(homeCarousel);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch homepage Carousel'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;