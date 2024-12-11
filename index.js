const express = require('express');
const app = express();

app.get('/store/:storeName', (req, res, next) => {
    res.send({name: req.params.storeName});
  });

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});