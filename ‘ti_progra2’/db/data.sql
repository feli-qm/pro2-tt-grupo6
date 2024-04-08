CREATE SCHEMA myapp;

USE myapp;

CREATE TABLE usuarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
	id					INT				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre				VARCHAR(250) 	NOT NULL,
    email				VARCHAR(300) 	NOT NULL,
    contrasenia			VARCHAR(300) 	NOT NULL,
    fecha				DATE			NOT NULL,			
	dni					INT(12)			NOT NULL,
    fotoPerfil			VARCHAR(300) 	NOT NULL,
    createdAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP,
    updatedAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt			TIMESTAMP		NULL
);
