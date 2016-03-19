const router = require('express').Router();

const game = require('../game/gamelogic');

router.get('/choices', function (req, res) {
  res.json(game.getInfoServer());
});

router.post('/play', function (req, res) {
  game.getResult(req.body.choice, req.body.version, function (result) {
    res.json(result);
  });
});

router.post('/updatedb', function (req, res) {
  game.updateDb(req.body.secret, function (result) {
    res.json({ dbUpdated: result });
  });
});

module.exports = router;
