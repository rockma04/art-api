const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const galleries = db.prepare(`
            SELECT id, style, description, link
            FROM galleries
            ORDER BY id
        `).all();
        res.json(galleries);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch galleries'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;