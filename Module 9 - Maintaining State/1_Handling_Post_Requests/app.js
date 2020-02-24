var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

//  Using this middleware, we can utilize the styles (static files)
//  under the stuff (usually public) folder.
//  The url remains as assets, but original folder name is stuff
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/contact', function(req, res) {
  res.render('contact', {qs : req.query});
});

app.post('/contact', urlencodedParser, function(req, res) {
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function (req, res) {
  var data = {age: 29, job: 'Ninja', hobbie: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person : req.params.name, data : data});
});

app.listen(3000);
