
import React from 'react';
import express from 'express';
const app = express();

import bodyParser from 'body-parser';
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// app.use(express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/public'));

var routes = require('./routes')(app);

var port = server.listen(process.env.PORT || 3000);

app.listen(port, function() {
  console.log('Node app is running on port', port);
});
