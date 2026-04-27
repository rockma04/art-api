const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const photography = db.prepare(`
            SELECT id, description, image, completed
            FROM photography
            ORDER BY id
        `).all();
        res.json(photography);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch photography'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;