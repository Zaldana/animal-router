const PORT = process.env.PORT || 3000;

const express = require("express");
const logger =require("morgan");
const path = require("path");
const teamRouter = require("./routes/teamRouter");
const app = express();

app.set("views", path.join(__dirname, "views"));

