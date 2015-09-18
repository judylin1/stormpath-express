var express = require('express');
var stormpath = require('express-stormpath');
require('dotenv').load();
var app = express();

app.use(stormpath.init(app, {
  apiKeyId: process.env.STORMPATH_ID,
  apiKeySecret: process.env.STORMPATH_SECRET,
  application: process.env.STORMPATH_HREF,
  secretKey: process.env.SECRET,
}));

app.get('/dashboard', stormpath.loginRequired, function(req, res) {
  res.send('Welcome back: ' + res.locals.user.email);
});

app.listen(3000);
