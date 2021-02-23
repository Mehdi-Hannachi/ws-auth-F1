const mongoose = require("mongoose");
const config = require("config");

const mongoURI = config.get("mongo-URI");

const connectDB = async () => {
  try {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Data base connected successfully");
  } catch (error) {
    console.log("Data base error", error);
  }
};

module.exports = connectDB;
