const express = require('express');
const TestingTime = require('./middelware/TestingTime');

const app = express();

app.use(TestingTime);

app.use(express.static('public'));

const PORT = 5000;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log('server is runnig');
});
