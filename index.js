const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

require('./db/database');

const cors = require("cors");
app.use(cors());

const pagesRouter = require("./routes/pages");
app.use('/pages', pagesRouter);

const tabsRouter = require("./routes/tabs");
app.use('/tabs', tabsRouter);

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

app.listen(PORT, () => {
    console.log("API is running");
    console.log(`Test the health check at http://localhost:${PORT}/health`);
})