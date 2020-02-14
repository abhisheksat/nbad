var express = require('express');

var app = express();

//  Defining a handler for /
//  The express extends the request and response object for use
//  Express is smart enough to identify the type of content being
//  sent as response
app.get('/', function(req, res) {
  res.send('This is the Homepage');
});

//  Defining a handler for URL pattern, /contact
app.get('/contact', function(req, res) {
  res.send('This is the Contact page');
});

//  Adding Route Paramters
app.get('/profile/:name', function (req, res) {
  res.send('You requested to see a profile with the name of : ' + req.params.name);
});

app.listen(3000);
