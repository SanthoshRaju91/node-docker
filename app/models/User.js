var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('User', UserSchema);
