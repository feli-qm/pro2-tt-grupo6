CREATE SCHEMA mi_db;

USE mi_db;

CREATE TABLE usuarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email				VARCHAR(250)	NOT NULL,			
    nombre 				VARCHAR(250) 	NOT NULL,
    contrasenia 		VARCHAR(250) 	NOT NULL,
    fechaNacimiento 	DATE 			NOT NULL,
    numeroDocumento 	INT 			NOT NULL,
    foto 				VARCHAR(250) 	NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 			TIMESTAMP 		NULL
    );

/INSERTS/
INSERT INTO usuarios (id, email, nombre, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt, updatedAt, deletedAt) 
VALUES (DEFAULT, "valen123@gmail.com", "Valen123", "contrasenia123", "1998-05-15", "46214488", "foto_valen123.jpg", DEFAULT, DEFAULT, NULL);

INSERT INTO usuarios (id, email, nombre, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt, updatedAt, deletedAt) 
VALUES (DEFAULT, "feli99@gmail.com", "Feli99", "contrasenia456", "1995-09-23", "51122334", "foto_feli99.jpg", DEFAULT, DEFAULT, NULL);

INSERT INTO usuarios (id, email, nombre, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt, updatedAt, deletedAt) 
VALUES (DEFAULT, "makeupfanatic@gmail.com", "MakeupFanatic", "contrasenia789", "1990-12-10", "36781928", "foto_makeupfanatic.jpg", DEFAULT, DEFAULT, NULL);

INSERT INTO usuarios (id, email, nombre, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt, updatedAt, deletedAt) 
VALUES (DEFAULT, "vicky31@gmail.com", "Vicky31", "contrasenia012", "1987-03-08", "23568974", "foto_vicky31.jpg", DEFAULT, DEFAULT, NULL);

INSERT INTO usuarios (id, email, nombre, contrasenia, fechaNacimiento, numeroDocumento, foto, createdAt, updatedAt, deletedAt) 
VALUES (DEFAULT, "juanperez@gmail.com", "JuanPerez", "contrasenia345", "1983-11-30", "19874365", "foto_juanperez.jpg", DEFAULT, DEFAULT, NULL);