const express = require('express');
const { createTrucks, readTrucks, updateTruck, deleteTruck } = require('../datalayer/index');
const trucksRouter = express.Router();

trucksRouter.post('/', async (req, res, next) => {
  try {
    const rows = await createTrucks(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

trucksRouter.get('/', async (req, res, next) => {
  try {
    const rows = await readTrucks();
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

trucksRouter.put('/', async (req, res, next) => {
  try {
    const rows = await updateTruck(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

trucksRouter.delete('/', async (req, res, next) => {
  try {
    const rows = await deleteTruck(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

module.exports = { trucksRouter };
