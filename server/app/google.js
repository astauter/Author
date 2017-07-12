// Google authentication and login
var router = require('express').Router();
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
  new GoogleStrategy({
    clientID: '1034654166022-254jpgn7ep8tnevefqae7m0tgdb0dufh.apps.googleusercontent.com',
    clientSecret: '5GYqhxBE2uIoVdDQIBUUlprc',
    callbackURL: 'http://localhost:8080/auth/google/callback'
  },
  // Google will send back the token and profile
  function (token, refreshToken, profile, done) {
    // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
    console.log('---', 'in verification callback', profile, '---');
    done();
  })
);

router.get('/auth/google', passport.authenticate('google', { scope: 'email' }));

// handle the callback after Google has authenticated the user
router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/', // or wherever
    failureRedirect: '/stories' // or wherever
  })
);

module.exports = router;
