const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const collage = db.prepare(`
            SELECT id, description, image, completed
            FROM collage
            ORDER BY id
        `).all();
        res.json(collage);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch collage projects'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;