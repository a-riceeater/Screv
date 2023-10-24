const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");

const app = express();

app.use(express.json());
app.use(favicon(path.join(__dirname, "public", "favicon_square.ico")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", require(path.join(__dirname, "server", "routers", "auth.js")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html", "index.html"))
})

app.listen(3000, (req, res) => {
    console.log("Running at port 3000");
})