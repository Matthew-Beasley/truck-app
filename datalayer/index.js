const {
  createService,
  readServices,
  updateServices,
  deleteServices
} = require('./services');

const {
  createTruck,
  readTrucks,
  updateTruck,
  deleteTruck
} = require('./trucks');

const {
  createSchedule,
  readSchedule,
  updateSchedule,
  deleteSchedule
} = require('./schedule')


module.exports = {
  createService,
  readServices,
  updateServices,
  deleteServices,

  createTruck,
  readTrucks,
  updateTruck,
  deleteTruck,

  createSchedule,
  readSchedule,
  updateSchedule,
  deleteSchedule
}
