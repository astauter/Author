'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/auth/me', (req, res) => {
  res.json(req.session.user);
})

module.exports = router;
