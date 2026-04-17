const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const tabs = db.prepare(`
            SELECT id, title, image, text
            FROM tabs
            ORDER BY id
        `).all();
        res.json(tabs);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch tabs'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;

