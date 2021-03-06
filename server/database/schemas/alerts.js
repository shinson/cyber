/**
 * Our Schema for Alerts
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Alert Schema
var alertSchema = new Schema({
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// The primary user model
var Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;
