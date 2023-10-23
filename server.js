const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");

const app = express();

app.use(express.json());
app.use(favicon(path.join(__dirname, "public", "favicon_square.ico")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(3000, (req, res) => {
    console.log("Running at port 80");
})