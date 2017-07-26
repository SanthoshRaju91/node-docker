var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/User');


mongoose.connect('mongodb://mongo', function(err) {
  if(err)  {
    console.error(err)
  } else {
    console.log('MongoDB running');
  };
});

var app = express();
app.use(bodyParser.json());

app.post('/api/add', function(req, res) {
    var user = new User({ name: req.body.name});

    user.save(function(err) {
      if(err) {
        console.log(err);
      } else {
        res.json({
          success: true,
          message: 'User added'
        });
      }
    });
});


app.get('/api/get', function(req, res) {
    User.find({}, function(err, users) {
      if(err) {
        console.error(err);
      } else {
        res.json({
          success: true,
          users: users
        })
      }
    })
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.listen(3000, function(err) {
  if(err) console.error(err);
  console.log('Listening on port 3000');
});
