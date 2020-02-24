const { client } = require('./client');

const createTruck = async (truckNumber, mileage) => {
  const sql = `
  INSERT INTO trucks (truck_number, mileage)
  VALUES ($1, $2)
  RETURNING *`;
  const data = await client.query(sql, [truckNumber, mileage]);
  return data.rows[0];
}


const readTrucks = async () => {
  const sql = 'SELECT * FROM trucks';
  const data = await client.query(sql);
  return data.rows;
}


//should probably use truck_number instead of truck_id
const updateTrucks = async (mileage, truckId) => {
  const sql = `
  UPDATE trucks
  SET mileage = $1
  WHERE truck_id = $2`;
  const data = await client.query(sql, [mileage, truckId]);
  return data.rows[0];
}


const deleteTruck = async (truckId) => {
  const sql = `
  DELETE FROM trucks
  WHERE truck_id = $1`;
  const data = await client.query(sql, [truckId]);
  return data.rows[0];
}

module.exports = {
  createTruck,
  readTrucks,
  updateTrucks,
  deleteTruck
}
