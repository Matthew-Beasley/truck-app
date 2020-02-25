const { client } = require('./client');


const createSchedule = async ({ truckNumber, serviceType }) => {
  const sql = `
  INSERT INTO schedule (truck_id, service_id)
  VALUES (
    (SELECT truck_id FROM trucks WHERE truck_number = $1),
    (SELECT service_id FROM services WHERE service_type = $2)
  )
  RETURNING *`;
  const data = await client.query(sql, [truckNumber, serviceType]);
  return data.rows[0];
}


const readSchedule = async () => {
  const sql = 'SELECT * FROM schedule';
  const data = await client.query(sql);
  return data.rows;
}


const updateSchedule = async ({ scheduleId, truckId }) => {
  const sql = `
  UPDATE schedule
  SET schedule_id = $1
  WHERE truck_id = $2
  RETURNING *`;
  const data = await client.query(sql, [scheduleId, truckId]);
  return data.rows[0];
}


const deleteSchedule = async ({ scheduleId }) => {
  const sql = `
  DELETE FROM schedule
  WHERE schedule_id = $1
  RETURNING *`;
  const data = await client.query(sql, [scheduleId]);
  return data.rows[0];
}

module.exports = {
  createSchedule,
  readSchedule,
  updateSchedule,
  deleteSchedule
};
