var express = require('express');
var router = express.Router();
const fianlJson = require('../data/conditions.json')


/* GET home page. */

router.get("/conditions", (req, res, next) => {
    return res.status(200).json({
      message: "Hello from path!",
      data:fianlJson
    });
  });

module.exports = router;