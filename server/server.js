const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Set environment
app.set('port', process.env.port || port);

// Use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', require('./routes/routes'));

// Create server
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
