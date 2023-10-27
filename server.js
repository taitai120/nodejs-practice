const app = require("./src/app");

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log(`server is running with port ${PORT}`);
});

// process.on("SIGINT", () => {
//   server.close(() => {
//     console.log(`Close Server`);
//   });
// });
