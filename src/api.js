const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to CoworkClub");
});

app.get("/spaces", (req, res) => {
    res.send({ message: ("Spaces in %s", req.local) });
});

app.get("/spaces/")

app.listen(3000, () => {
    console.log("Listening in")
})