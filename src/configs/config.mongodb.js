"use strict";

// level 0
// const config = {
//   app: {
//     port: 3000,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "db",
//     username: "taitai120",
//     password: "taitai",
//   },
// };

// level 1
const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3052,
  },
  db: {
    host: process.env.DEV_APP_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_APP_NAME || "shopDEV",
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
  },
};

const prod = {
  app: {
    port: process.env.PRO_APP_PORT || 3052,
  },
  db: {
    host: process.env.PRO_APP_HOST || "localhost",
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.PRO_APP_NAME || "shopPRO",
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
  },
};

const config = {
  dev,
  prod,
};
const env = process.env.NODE_ENV || "dev";

module.exports = config[env];
