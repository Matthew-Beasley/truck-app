const express = require('express');

const { servicesRouter } = require('./services');
const { trucksRouter } = require('./trucks');
const { scheduleRouter } = require('./schedule');
const apiRouter = express.Router();

apiRouter.use('/services', servicesRouter);
apiRouter.use('/trucks', trucksRouter);
apiRouter.use('/schedule', scheduleRouter);

module.exports = {
  apiRouter
};

