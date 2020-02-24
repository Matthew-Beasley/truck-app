const express = require('express');
const { createSchedule, readSchedule, updateSchedule, deleteSchedule } = require('../datalayer/index');
const scheduleRouter = express.Router();

scheduleRouter.post('/', async (req, res, next) => {
  try {
    const rows = await createSchedule(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

scheduleRouter.get('/', async (req, res, next) => {
  try {
    const rows = await readSchedule();
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

scheduleRouter.put('/', async (req, res, next) => {
  try {
    const rows = await updateSchedule(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

scheduleRouter.delete('/', async (req, res, next) => {
  try {
    const rows = await deleteSchedule(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

module.exports = { scheduleRouter };
