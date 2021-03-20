const express = require('express'),
  router = express.Router(),
  db = require('../models/dbConnection');
// get flowers lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM flowers`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'Flower lists retrieved successfully',
    });
  });
});

// create new flower
router.post('/new', function(req, res) {
  let sql = `INSERT INTO flowers(flower, variety, container) VALUES(?)`;
  let values = [req.body.flower, req.body.variety, req.body.container];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'New flower added successfully',
    });
  });
});

module.exports = router;
