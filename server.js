var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('jakezerrer.com listening at http://%s:%s', host, port);
});
