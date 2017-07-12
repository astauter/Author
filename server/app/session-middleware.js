var session = require('express-session');
var router = require('express').Router();

router.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'tongiscool', // or whatever you like
  // these options are recommended and reduce session concurrency issues
  resave: false,
  saveUninitialized: false,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));

module.exports = router;
