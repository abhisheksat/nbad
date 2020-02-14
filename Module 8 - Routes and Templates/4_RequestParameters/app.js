var express = require('express');

var app = express();

app.set('view engine', 'ejs');

//  Using this middleware, we can utilize the styles (static files)
//  under the stuff (usually public) folder.
//  The url remains as assets, but original folder name is stuff
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res) {
  res.render('index');
});

//  sendFile : Using sendFile to send HTML file as response
app.get('/contact', function(req, res) {
  res.render('contact', {qs : req.query});
});

app.get('/profile/:name', function (req, res) {
  var data = {age: 29, job: 'Ninja', hobbie: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person : req.params.name, data : data});
});

app.listen(3000);
