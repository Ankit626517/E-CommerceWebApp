const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb Connected");
  } catch (error) {
    console.log("COnection failed", error);
  }
};
module.exports = connectDB;
