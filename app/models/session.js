var db = require('../config');
var utils = require('../../lib/utility');

var Session = db.Model.extend({
  tableName: 'sessions',
  hasTimestamps: false,
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      model.set('token', utils.randomToken());
    });
  }
});

module.exports = Session;