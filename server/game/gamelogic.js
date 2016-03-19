const updateSecret = 'steaktartare';

var database = require('../database/answers.json');
var serverVersion = database.server_version;

var updateDb = function (secret, done) {
  if (secret === updateSecret) {
    delete require.cache[require.resolve('../database/answers.json')];
    database = require('../database/answers.json');
    if (database.server_version != serverVersion)
      serverVersion = database.server_version;
    done(true);
  } else {
    done(false);
  }
};

var getResult = function (choice, version, done) {
  if (database.answer[String(version)] == choice)
    done(true);
  else
    done(false);
};

module.exports.getResult = getResult;
module.exports.updateDb = updateDb;
