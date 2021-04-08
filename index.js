
var express = require("express")
var bodyParser = require("body-parser")

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./routes')
routes(app)

var server = app.listen(3000, function () {
  console.log("Listening on localhost:%s", server.address().port);
})