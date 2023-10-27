const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { countConnect, checkOverload } = require("./helpers/check.connect");
countConnect();
checkOverload();

// init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "success",
    message: "hello",
    data: "the man".repeat(500),
  });
});

// handling error

module.exports = app;
