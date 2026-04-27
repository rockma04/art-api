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

    CREATE TABLE IF NOT EXISTS galleries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        style TEXT NOT NULL,
        description TEXT NOT NULL,
        link TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS styles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        style TEXT NOT NULL, 
        description TEXT NOT NULL,
        image_1 TEXT NOT NULL,
        image_2 TEXT NOT NULL,
        image_3 TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS photography (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        completed TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS paintings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        completed TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS prints (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        completed TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS collage (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        completed TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS coloredPencil (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        completed TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS otherProjects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        completed TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS stockList (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        style TEXT NOT NULL,
        project TEXT NOT NULL,
        item TEXT NOT NULL
    );
`);

module.exports = db;