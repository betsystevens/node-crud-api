const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 4040;
// routers
const flowersRouter = require('./routes/flowers');
// use the modules
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
//use router
app.use('/flowers', flowersRouter);
// staring the server
app.listen(port, () => console.log(`Server started, listening port: ${port}`));
