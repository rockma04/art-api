const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const paintings = db.prepare(`
            SELECT id, description, image, completed
            FROM paintings
            ORDER BY id
        `).all();
        res.json(paintings);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch paintings'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;