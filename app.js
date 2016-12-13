var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var users = require('./routes/user/users');
var usersAdd = require('./routes/user/usersAdd');
var usersEdit = require('./routes/user/usersEdit');
var usersDelete = require('./routes/user/usersDelete');
var usersRegister = require('./routes/user/usersRegister');
var usersLogin = require('./routes/user/usersLogin');
var usersLogout = require('./routes/user/usersLogout');

var groups = require('./routes/group/groups');
var groupsAdd = require('./routes/group/groupsAdd');
var groupsEdit = require('./routes/group/groupsEdit');
var groupsDelete = require('./routes/group/groupsDelete');
var groupsClear = require('./routes/group/groupsClear');

var homeData = require('./routes/home/homeData');

var logList = require('./routes/log/logList');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/users', users);
app.use('/users/add', usersAdd);
app.use('/users/edit', usersEdit);
app.use('/users/delete', usersDelete);
app.use('/users/register', usersRegister);
app.use('/users/login', usersLogin);
app.use('/users/logout', usersLogout);

app.use('/groups', groups);
app.use('/groups/add', groupsAdd);
app.use('/groups/edit', groupsEdit);
app.use('/groups/delete', groupsDelete);
app.use('/groups/clear', groupsClear);

app.use('/home/getData', homeData);
app.use('/logs', logList);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
