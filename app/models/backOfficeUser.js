var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BackOfficeUserSchema = new Schema({
    user: String,
    pass: String

});

module.exports = mongoose.model('BackOfficeUser', BackOfficeUserSchema);