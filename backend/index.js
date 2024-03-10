const express = require("express");
const connectDB = require("./utils/db");
const cors = require("cors");
const dotenv = require("dotenv");

const errorMiddleware = require("./middlewares/errors");
const user = require("./routes/userRoutes");

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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

// registering the routes
app.use(`${process.env.SERVER_APP_BASE_URL}/user`, user);

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
