// This file is our 'Controller file' 
// and is responsible for handling all 
// of our routes and rendering our views.

// Test about what lines 6-8 are doing. Getting code libraries to use in this file
const express = require('express');
const path = require('path');
require('colors');

const indexPage = require('./routes/index');
const aboutPage = require('./routes/about');
const shopPage = require('./routes/shop');
const helpPage = require('./routes/help');
const checkoutPage = require('./routes/checkout');


const app = express();

// For body parser, leyfir req.body
app.use(express.urlencoded({ extended: false}));

// Test about what line 13 is doing, Setting up a static file server
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Set up ejs for templating => test

// Test about what line 21 is doing. Setting up a route
// Routers
app.use('/', indexPage);
app.use('/about', aboutPage);
app.use('/shop', shopPage);
app.use('/help', helpPage);
app.use('/checkout', checkoutPage);



// Error : Page not found
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.....'.green);
});


app.use(express.static(path.join(__dirname, 'public')));