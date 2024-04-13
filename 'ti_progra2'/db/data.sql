CREATE SCHEMA myapp;


/* usuarios */
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



/* productos */
CREATE TABLE productos (
/* 	nombreColumna 		tipoDato 		Restricciones */
	id					INT				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario			INT 			NOT NULL,
    nombreImgProducto	VARCHAR(300) 	NOT NULL,
    nombreProducto		VARCHAR(250) 	NOT NULL,
    descProducto		VARCHAR(500) 	NOT NULL,
    createdAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP,
    updatedAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt			TIMESTAMP		NULL
);



/* comentarios */

CREATE TABLE comentarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
id					INT				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idPost				INT				NOT NULL,
idUsuario			INT				NOT NULL,
textoComent			VARCHAR(500)	NOT NULL,
createdAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP,
updatedAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt			TIMESTAMP		NULL
);
