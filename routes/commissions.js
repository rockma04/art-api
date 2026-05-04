const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const commissions = db.prepare(`
            SELECT id, description
            FROM commissions
            ORDER BY id
        `).all();
        res.json(commissions);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch commissions'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;