const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const calendar = db.prepare(`
            SELECT id, name, start, end
            FROM calendar
            ORDER BY id
        `).all();
        res.json(calendar);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch calendar'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;