const updateSecret = 'steaktartare';

var database = require('../database/answers.json');
var serverVersion = database.server_version;

var getInfoServer = function () {
  return ({ version: database.server_version, choices: database.choices });
};

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
  var answer = (database.answer[String(version)] == choice);
  if (version == serverVersion) {
    done({ answer: answer });
  } else {
    done({ answer: answer, update: {
        version: serverVersion,
        choices: database.choices,
      }, });
  }
};

module.exports.getInfoServer = getInfoServer;
module.exports.getResult = getResult;
module.exports.updateDb = updateDb;
