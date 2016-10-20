var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var jsonServer = require('json-server');
var bodyParser = require('body-parser');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});

var app = express();
var port = 4000;
app.use(bodyParser.json());


var items = ["One", "Two", "Three"];

app.get("/items", function(req, res) {
    res.status(200).json(items);
});

app.post("/items", function(req, res) {
    items.push(req.body.title);
    res.status(200).json(req.body.title);
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});