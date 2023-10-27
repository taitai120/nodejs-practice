"use strict";

const mongoose = require("mongoose");

const connectString = `mongodb+srv://taitai120:taitai@cluster0.btplbje.mongodb.net/`;

mongoose.connect(connectString).then(() => {
  console.log(`Connected FB`);
});

if (1 === 0) {
  mongoose.set("debug", true);
  mongoose.set("debug", {
    color: true,
  });
}

module.exports = mongoose;
