const { client } = require('./client');

// refactor these

const createService = async ({ serviceType, mileage }) => {
  const sql = `
  INSERT INTO services ( service_type, mileage )
  VALUES ($1, $2)
  RETURNING *`;
  const data = await client.query(sql, [serviceType, mileage]);
  return data.rows[0];
}


const readServices = async () => {
  const sql = 'SELECT * FROM services';
  const data = await client.query(sql);
  return data.rows;
}


const updateServices = async ({ serviceId, mileage }) => {
  const sql = `
  UPDATE services
  SET mileage = $1
  WHERE service_id = $2
  RETURNING *`;
  const data = await client.query(sql, [mileage, serviceId]);
  return data.rows[0];
}


const deleteServices = async ({ serviceId }) => {
  const sql = `
  DELETE FROM services
  WHERE service_id = $1
  RETURNING *`;
  const data = await client.query(sql, [serviceId]);
  return data.rows[0];
}


module.exports = {
  createService,
  readServices,
  updateServices,
  deleteServices
}
