const express = require("express");
const connectDB = require("./utils/db");
const dotenv = require("dotenv");

// handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("Server stopped for exception: " + err.message);
  console.log(err);
  process.exit(1);
});

dotenv.configDotenv();

const app = express();
const port = process.env.PORT || 5000;

// connect to the database
connectDB();

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ msg: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`Server running on port 'http://localhost:${port}'`);
});

// handling uncaught rejections
process.on("uncaughtRejection", (err) => {
  console.log("Server stopped on rejection:", err.message);
  console.log(err);
  process.exit(1);
});
