/**
 * Our Schema for Users
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the User Schema
var userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  ccs: { type: String, required: true, unique: true }
});

// The primary user model
var User = mongoose.model('User', userSchema);

module.exports = User;
