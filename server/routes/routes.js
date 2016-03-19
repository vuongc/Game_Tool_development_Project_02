const router = require('express').Router();

const game = require('../game/gamelogic');

router.get('/choices', function (req, res) {
  res.json(database);
});

router.post('/play', function (req, res) {
  game.getResult(req.body.choice, req.body.version, function (result, version) {
    res.json({ answer: result });
  });
});

module.exports = router;
