const mongoose = require("mongoose");
require("dotenv").config();

const db_link = process.env.DATABASE_URL;

const connectDB = () => {
  mongoose
    .connect(db_link, { dbName: "KaushalNetwork" })
    .then((data) => {
      console.log("Connected to the database successfully");
      console.log(
        `Database: http://${data.connection.host}:${data.connection.port}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
