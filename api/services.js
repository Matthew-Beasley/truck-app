const express = require('express');
const { createService, readServices, updateServices, deleteServices } = require('../dataLayer/index');
const servicesRouter = express.Router();

servicesRouter.post('/', async (req, res, next) => {
  try {
    const rows = await createService(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

servicesRouter.get('/', async (req, res, next) => {
  try {
    const rows = await readServices();
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

servicesRouter.put('/', async (req, res, next) => {
  try {
    const rows = await updateServices(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error)
  }
});

servicesRouter.delete('/', async (req, res, next) => {
  try {
    const rows = await deleteServices(req.body);
    res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
});

module.exports = { servicesRouter };
