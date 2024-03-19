const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  //Write a code here for endpoint /product/:productId and also print parameter in json form
     res.send({productId: req.params.productId});
});

module.exports = app;
