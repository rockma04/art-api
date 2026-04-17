const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const pages = db.prepare(`
            SELECT id, title, subtitle, image, link, flex
            FROM pages
            ORDER BY id
        `).all();
        res.json(pages);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch pages'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;