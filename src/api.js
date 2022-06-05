const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/spaces", (req, res) => {
    res.send(`This are the available spaces in ${req.query.local}`);
});

app.get("/spaces/:name", (req, res) => {
    res.send(`This are the available spaces in ${req.params.name}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
