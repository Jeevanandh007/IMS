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
app.use(cors({origin: 'http://localhost:3000',
Credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: keys.sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2, // 2 hours
  }
}));
app.use(passport.initialize());
app.use(passport.session());

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
const productRouter =require('./routes/product')
const userRouter =require('./routes/user')

app.use('/api/products', checkAuthentication, productRouter);
app.use('/api/users', userRouter);

//auth middleware
function checkAuthentication(req, res, next)
{
  if (req.isAuthenticated())
    return next();
  
}

//deploy
if(process.env.NODE_ENV === 'production') {
  app.use(express.statica('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(pathe.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});