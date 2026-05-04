const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const awards = db.prepare(`
            SELECT id, description
            FROM awards
            ORDER BY id
        `).all();
        res.json(awards);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch awards'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;