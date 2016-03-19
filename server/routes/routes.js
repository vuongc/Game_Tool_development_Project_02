const router = require('express').Router();

// Get the database
const database = require('../database/answers.json');

router.get('/choices', function (req, res) {
  res.json(database);
});

module.exports = router;
