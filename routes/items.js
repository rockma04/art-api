const express = require('express');
const router = express.Router();
const db = require('../db/database');

/*
POST /items
Content-Type: application/json

{
  "style": "Painting",
  "project": "Football Picture",
  "item": "Green Acrylic"
}
 */


router.post('/', (req, res) => {
    const {style, project, item} = req.body;

    if (!project || !item || !style) {
        return res.status(400).json({error: 'Item, style, and project required'});
    }

    try {
        const result = db.prepare(`
            INSERT INTO stockList (style, project, item)
            VALUES (?, ?, ?)
        `).run(style, project, item|| null);

        const itemId = result.lastInsertRowid;

    const newItem = {
        id: itemId,
        style,
        project,
        item
    };

    res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create item'});
    }
});

router.post('/', (req, res) =>{

});

module.exports = router;