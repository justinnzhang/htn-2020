require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(`MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
