const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

console.log(`connecting to ${url}`);

mongoose
  .connect(url)
  .then(console.log('connected to MongoDB...'))
  .catch((error) => {
    console.log(`error connecting to MongoDB: ${error.message}`);
  });

const anecdoteSchema = new mongoose.Schema({
  content: String,
  votes: Number
});

// id field is in fact, an object. Converts the object into a string, then removed the id and v fields
anecdoteSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Anecdote', anecdoteSchema);
