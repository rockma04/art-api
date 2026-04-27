const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const stockList = db.prepare(`
            SELECT id, style, project, item
            FROM stockList
            ORDER BY id
        `).all();
        res.json(stockList);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch stock list'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;