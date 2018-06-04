// express init
const express = require('express');

const app = express();

// dbconf init
const dbConfig = require('./config/dbConfig');

const mongoUrl = dbConfig.mongoURL;

// mongoose init
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(mongoUrl);

// bodyparser init
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Ideally, use parser with specific routes. We'll look at this later.
// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })

// // POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   // create user in req.body
// })
// remember to use multer for multipart form data

app.use(jsonParser);

app.use(urlencodedParser);

//init router
const testRouter = require('./routes/testroutes');

const appConfig = require('./config/appConfig');

const path = require('path');
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/api/test', testRouter);

const port = appConfig.port;

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`app running at ${port}`);
});
