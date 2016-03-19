const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Set environment
app.set('port', process.env.port || port);

// Create server
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
