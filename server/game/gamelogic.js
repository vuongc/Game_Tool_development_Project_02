// Get the database
const database = require('../database/answers.json');

var getResult = function (choice, version, done) {
  if (database.answer[String(version)] == choice)
    done(true);
  else
    done(false);
};

module.exports.getResult = getResult;
