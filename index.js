const express = require('express'),
  app = express(),
  // mysql = require('mysql'),
  cors = require('cors');

var server = {
  port: 4040,
};
// routers
const flowersRouter = require('./routes/flowers');
// use the modules
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use router
app.use('/flowers', flowersRouter);
// staring the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
