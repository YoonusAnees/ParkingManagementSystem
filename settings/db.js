const mongoose = require("mongoose");

const linkDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = linkDatabase;