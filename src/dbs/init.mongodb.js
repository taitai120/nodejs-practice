"use strict";

const mongoose = require("mongoose");
const config = require("../configs/config.mongodb");

const connectString = `mongodb+srv://${config.db.username}:${config.db.password}@cluster0.btplbje.mongodb.net/`;

class DataBase {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (true) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then(() => {
        console.log(`Connected DB ${process.env.NODE_ENV}`);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }

  static getInstance() {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }

    return DataBase.instance;
  }
}

const instanceMongodb = DataBase.getInstance();

module.exports = instanceMongodb;
