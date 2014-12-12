var express = require('express'),
    http = require('http'),
    faye = require('faye');

var app = express();
var server = http.createServer(app);
var bayeux = new faye.NodeAdapter({mount: '/faye', timout: 5});

app.use(express.static('public'));

var port = process.env.PORT || 8000;

bayeux.attach(server);
server.listen(port, function() {
  console.log("Server listening on port: " + port);
});