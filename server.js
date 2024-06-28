if (process.env.NODE_ENV !== 'development') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const passport = require('passport');
  const flash = require('express-flash');
  const session = require('express-session');
  const keys = require('./config/keys');

  const PORT = process.env.PORT || 5000;
  const app = express();

 //middleware

//database
mongoose.connect(keys.mongoURL, {

  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => 
    console.log('MongoDB datbase connected'))
  .catch( error => 
    console.log(error)
  );

//api



// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});