// This application uses express as its web server
var express = require('express');
// cfenv provides access to your Cloud Foundry environment
var compression = require('compression');
// create a new express server
var app = express();
//compress all requests
app.use(compression({
    threshold: 0
}));

var cfenv = require('cfenv');
var path = require('path');
var request = require('request');
var d3 = require('d3');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var routes = require('./routes/index');

// app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
// // set the view engine to ejs
app.set('view engine', 'ejs');

// // serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public',  {setHeaders: function(res, path) {
        // res.setHeader("Cache-Control", "public, max-age=518400");
        // res.setHeader("Expires", new Date(Date.now() + 518400000).toUTCString());
        res.setHeader("Expires", new Date(Date.now()).toUTCString());
  }}
));
app.set('views', path.join(__dirname, 'views'));
// app.use('/', routes);


app.use('/', routes);

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// change err to {} in production version IOT keep stacktrace from leaking to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('pages/error', {
        message: err.message,
        error: err
    });
});

app.get('*', function(req, res) {
    res.render("pages/error", 404);
});

module.exports = app;
