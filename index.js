const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const linkDatabase = require("./settings/db");
const app = express();

dotenv.config();

const port = 5000 || process.env.PORT;
app.use(express.json()); // this make stack accept the json 




const startServer = async () => {
  try {
    await linkDatabase();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();