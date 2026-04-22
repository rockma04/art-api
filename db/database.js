const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'artdatabase.db');
const db = new Database (dbPath);
db.pragma('foreign_keys = ON');

db.exec(`
    CREATE TABLE IF NOT EXISTS pages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL, 
        image TEXT NOT NULL, 
        link TEXT NOT NULL, 
        flex INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS tabs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL, 
        image TEXT NOT NULL, 
        text TEXT NOT NULL
    );
`);

module.exports = db;