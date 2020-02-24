CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS schedule;
DROP TABLE IF EXISTS trucks;
DROP TABLE IF EXISTS services;

CREATE TABLE trucks (
truck_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
truck_number VARCHAR(15) NOT NULL,
mileage INTEGER NOT NULL );

CREATE TABLE services (
service_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
service_type VARCHAR(100) NOT NULL,
mileage INTEGER NOT NULL
);

CREATE TABLE schedule (
record UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
truck_id UUID REFERENCES trucks(truck_id),
service_id UUID REFERENCES services(service_id)
);