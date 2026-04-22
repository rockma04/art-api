CREATE TABLE pages (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    title    TEXT    NOT NULL,
    subtitle TEXT    NOT NULL,
    image    TEXT    NOT NULL,
    link     TEXT    NOT NULL,
    flex     INTEGER NOT NULL
);

CREATE TABLE tabs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    text TEXT NOT NULL
);