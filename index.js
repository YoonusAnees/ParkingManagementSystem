const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const linkDatabase = require("./settings/db");
const slots = require("./routes/slots")
const app = express();

dotenv.config();

const port = 5000 || process.env.PORT;

app.use("/PMS/v1/slotes" , slots)
app.use(express.json()); // this make stack accept the json files




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