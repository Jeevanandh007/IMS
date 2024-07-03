const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user.model');

// to check user exist
function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, { message: 'No user with that email' });
          }

          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        }
          catch(err){
            return done(err);
          }
        }
};


//to update
passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, authenticateUser));

passport.serializeUser



passpoert.deserializeUser


module.exports =initialize;