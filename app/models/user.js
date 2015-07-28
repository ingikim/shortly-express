var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(attr) {
    console.log('Creating user with password', attr.password);
  },
  checkPassword: function(password, callback) {
    bcrypt.compare(password, this.get('password'), function(err, res) {
      callback(res);
    });
  }
}, {
  signup: function(username, password, callback) {
    bcrypt.hash(password, null, null, function(err, hash) {
      callback(new User({username: username, password: hash}));
    });
  }
});

module.exports = User;