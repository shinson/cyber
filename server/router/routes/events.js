var express = require('express');
var router  = express.Router();

var db     = require('../../database');
var Events = db.events;

router.get('/', function (req, res) {
  Events.find(function (err, events) {
    if (err) {
      return next(err);
    }

    res.send(events);
  });
});

router.post('/', function(req, res) {
  var events = new Events(req.body);

  events.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'Event Added' });
  });
});

module.exports = router;