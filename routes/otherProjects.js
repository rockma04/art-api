const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    try{
        const otherProjects = db.prepare(`
            SELECT id, description, image, completed
            FROM otherProjects
            ORDER BY id
        `).all();
        res.json(otherProjects);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch other projects'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;