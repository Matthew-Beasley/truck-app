const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
const { apiRouter } = require('./api/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'assets'))); // this might work to keep index.html in the assets directory
app.use('/api', apiRouter);

app.listen(PORT, () => console.log('Listening on port ', PORT));