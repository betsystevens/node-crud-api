const express = require('express');
const router = express.Router();
const db = require('../models/dbConnection');

// get get all rows from the flowers table
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
  // router.get('/new', function(req, res) {
  console.log('hello from new flower');
  // console.log(req.query.flower);
  let sql = `INSERT INTO flowers(flower, variety, container) VALUES(?)`;
  // let values = [req.body.flower, req.body.variety, req.body.container];
  let values = [req.query.flower, req.query.variety, req.query.container];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'New flower added successfully',
    });
  });
});

module.exports = router;
