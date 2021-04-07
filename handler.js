const serverless = require("serverless-http");
var cors = require('cors');

const express = require("express");

const app = express();


app.use(cors());
var apiRouter = require('./routes/api');


app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});


app.use('/api', apiRouter);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

var server = app.listen(5000, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})

module.exports.handler = serverless(app);
