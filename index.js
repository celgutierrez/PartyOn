//global variables
require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var isLoggedin = require('./middleware/isLoggedin');

var app = express();

//set and use statments

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
});

//routes

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/profile', function(req, res) {
    res.render('profile');
});

app.get('/mockphone', function(req, res) {
    res.render('iphonemock');
});

app.get('/contacts', function(req, res) {
    res.render('contacts');
});

app.get('/lockscreen', function(req, res) {
    res.render('lockscreen');
});

//controllers
//TO DO: auth controller
app.use('/auth', require('./controllers/auth'));


//listen


app.listen(3000);
