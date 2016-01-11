
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
console.log(process.env.PORT);
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
