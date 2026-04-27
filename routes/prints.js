const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const prints = db.prepare(`
            SELECT id, description, image, completed
            FROM prints
            ORDER BY id
        `).all();
        res.json(prints);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch prints'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;