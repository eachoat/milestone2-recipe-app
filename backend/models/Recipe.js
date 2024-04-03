const mongoose = require('mongoose');

// Updated to accept a callback function as an argument
const connectDB = async (callback) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    if (callback) callback(null); // Call callback with no error on success
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
    if (callback) callback(err); // Call callback with error
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
