var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var accountsRouter = require('./routes/accounts')
var booksRouter = require('./routes/books')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/search', searchRouter)
app.use('/accounts', accountsRouter)
app.use('/books', booksRouter)
app.use('/users', usersRouter);

module.exports = app;
