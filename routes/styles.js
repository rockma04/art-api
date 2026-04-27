const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const styles = db.prepare(`
            SELECT id, style, description, image_1, image_2, image_3
            FROM styles
            ORDER BY id
        `).all();
        res.json(styles);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch styles'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;