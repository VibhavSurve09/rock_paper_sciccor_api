const express = require('express');

const app = express();

app.use('/', require('./src/routes/game'));
require('dotenv').config();

const port = process.env.PORT || 5000;

app.get('/**', function (req, res) {
  res.redirect('/game/start');
});
app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(`Server is listening on ${port}..`);
});
