var express = require('express');

var app = express.createServer();
app.use(express.static(__dirname + '/public' ))
app.use(express.bodyParser());
app.use(app.router);

app.listen(8081);
