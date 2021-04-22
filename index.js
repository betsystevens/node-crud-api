const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 4040;

// routers
const flowersRouter = require('./routes/flowers');

app.use(cors());
app.use(express.urlencoded({ extended: true }));

//use router
app.use('/flowers', flowersRouter);

// custom 404 page
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.statue(500);
  res.send('500 - Server Error');
});
// staring the server
app.listen(port, () =>
  console.log(
    `Server started, listening port: ${port}; ` + `press Ctrl-C to terminate.`
  )
);
