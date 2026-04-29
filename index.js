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

const collageRouter = require("./routes/collage");
app.use('/collage', collageRouter);

const coloredPencilRouter = require("./routes/coloredPencil");
app.use('/coloredPencil', coloredPencilRouter);

const itemsRouter = require("./routes/items");
app.use('/items', itemsRouter);

const otherProjectsRouter = require("./routes/otherProjects");
app.use('/otherProjects', otherProjectsRouter);

const paintingsRouter = require("./routes/paintings");
app.use('/paintings', paintingsRouter);

const photographyRouter = require("./routes/photography");
app.use('/photography', photographyRouter);

const printsRouter = require("./routes/prints");
app.use('/prints', printsRouter);

const stockListRouter = require("./routes/stockList");
app.use('/stockList', stockListRouter);

const galleriesRouter = require("./routes/galleries");
app.use('/galleriesList', galleriesRouter);

const stylesRouter = require("./routes/styles");
app.use('/styles', stylesRouter);


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