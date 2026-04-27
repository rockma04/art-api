const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const coloredPencil = db.prepare(`
            SELECT id, description, image, completed
            FROM coloredPencil
            ORDER BY id
        `).all();
        res.json(coloredPencil);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch colored pencil projects'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;