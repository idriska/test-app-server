const express = require("express");
const app = express();
const http = require("http").createServer(app);
const data = require("./datas");

module.exports = http;

app.get("/", (req, res) => {
  res.send("Test App Server");
});

app.get("/api/products", (req, res) => {
  res.send(data);
});
