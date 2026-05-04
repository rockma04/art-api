const express = require('express');
const router = express.Router();
const db = require('../db/database');


router.post('/', (req, res) => {
    const {name, start, end} = req.body;

    if (!name || !start || !end) {
        return res.status(400).json({error: 'Name, start, and end required'});
    }

    try {
        const result = db.prepare(`
            INSERT INTO calendar (name, start, end)
            VALUES (?, ?, ?)
        `).run(name, start, end|| null);

        const eventId = result.lastInsertRowid;

        const newEvent = {
            id: eventId,
            name,
            start,
            end
        };

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create event'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;