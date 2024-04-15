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

/* INSERTS (5 usuarios) */
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




CREATE TABLE productos (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario			INT				UNSIGNED,
	foto 				VARCHAR(250) 	NOT NULL,
    nombreProducto 		VARCHAR(250) 	NOT NULL,
    descProducto 		VARCHAR(250) 	NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
    updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 			TIMESTAMP 		NULL,
    
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
    );
    
/* 10 productos */
INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, "corrector.jpg", "Corrector líquido", "Corrector líquido de alta cobertura para ocultar imperfecciones y ojeras.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, "mascara.jpg", "Máscara de pestañas voluminizadora", "Máscara de pestañas voluminizadora para unas pestañas más largas y densas.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, "mascara.jpg", "Máscara de pestañas voluminizadora", "Máscara de pestañas voluminizadora para unas pestañas más largas y densas.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, "brillo_labial.jpg", "Brillo labial", "Brillo labial hidratante con un acabado brillante y sin sensación pegajosa.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, "iluminador.jpg", "Iluminador en polvo", "Iluminador en polvo para resaltar los puntos altos del rostro y obtener un brillo radiante.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, "esmalte.jpg", "Esmalte de uñas", "Esmalte de uñas de larga duración con una amplia gama de colores brillantes y pigmentados.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, "sombras.jpg", "Paleta de sombras de ojos", "Paleta de sombras de ojos con una gama de tonos vibrantes y mates.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, "base_maquillaje.jpg", "Base de maquillaje", "Base de maquillaje de larga duración con cobertura media a completa.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, "rubor.jpg", "Rubor en polvo", "Rubor en polvo altamente pigmentado para un aspecto natural y duradero.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, "labial_mate.jpg", "Labial mate", "Labial mate de larga duración con una fórmula hidratante que no reseca los labios.", DEFAULT, DEFAULT, NULL);

CREATE TABLE comentarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idPost				INT				UNSIGNED,
    idUsuario			INT				UNSIGNED,
	comentario 			VARCHAR(250) 	NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
    updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt 			TIMESTAMP 		NULL,
    
    );