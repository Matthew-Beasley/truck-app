const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
const { apiRouter } = require('./api/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api', apiRouter);

app.get('/', (req, res, next) => {
  try {
    res.sendFile('./index.html');
  } catch (error) {
    next(error);
  }
})

app.listen(PORT, () => console.log('Listening on port ', PORT));
