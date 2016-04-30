var express = require('express');
var router  = express.Router();

var db     = require('../../database');
var Alerts = db.alerts;

router.get('/', function (req, res) {
  Alerts.find(function (err, alerts) {
    if (err) {
      return next(err);
    }

    res.send(alerts);
  });
});

router.post('/', function (req, res) {

  // The posted information from the front-end
  var body = req.body;

  // setup the new user
  var alert = new Alerts({
    message: body.message
  });

  //save the user to the database
  alert.save(function (err) {

    if (err) {
      console.log(err);
      res.status(500).json({
        'message': 'Alert messed up.'
      });
    } else {
      // Log success and send the filtered user back
      console.log('Successfully saved alert! ');

      res.status(201);
    }

  });
});

module.exports = router;
