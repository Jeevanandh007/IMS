if (process.env.NODE_ENV !== 'development') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const passport = require('passport');
  const flash = require('express-flash');
  const session = require('express-session');

  const PORT = process.env.PORT || 3000;
  const app = express();

 //middleware
  app.use(cors());
  app.use(express.json());
  app.use("/record", records);

//database

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  }).on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

//api



// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});