/**
 * Our Schema for Events
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Event Schema
var eventSchema = new Schema({
    userId: { type: Number, required: true },
    pluginId: { type: Number, required: true },
    data: { type: String, required: true }
});

// The primary plugin model
var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
