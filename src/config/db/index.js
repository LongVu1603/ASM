const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://njk3votink:01677895408@cluster0.rxab0.mongodb.net/test',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log('Connect successfully!!!');
  } catch (err) {
    console.log('Connect failure!!!');
  }
}

module.exports = { connect };
