/**
 * Our Schema for Plugins
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Plugin Schema
var pluginSchema = new Schema({
  name: { type: String, required: true }
});

// The primary plugin model
var Plugin = mongoose.model('Plugin', pluginSchema);

module.exports = Plugin;
