DROP DATABASE IF EXISTS I_like_to_party_db;

CREATE DATABASE I_like_to_party_db;

USE I_like_to_party_db;

CREATE TABLE events (
id int NOT NULL AUTO_INCREMENT,
event_name varchar(255) NOT NULL,
event_location varchar(255) NOT NULL,
event_time int NOT NULL,
event_creator varchar(255) NOT NULL,
PRIMARY KEY(id)
);

