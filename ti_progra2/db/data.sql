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
VALUES (DEFAULT, 1, "corrector.png", "Corrector líquido", "Corrector líquido de alta cobertura para ocultar imperfecciones y ojeras.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, "delineador.jpg", "Delineador de ojos", "Delineador de ojos líquido de larga duración para un delineado preciso y sin manchas..", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, "rimmel.jpg", "Máscara de pestañas voluminizadora", "Máscara de pestañas voluminizadora para unas pestañas más largas y densas.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, "gloss.png", "Brillo labial", "Brillo labial hidratante con un acabado brillante y sin sensación pegajosa.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, "iluminador.jpg", "Iluminador en polvo", "Iluminador en polvo para resaltar los puntos altos del rostro y obtener un brillo radiante.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, "esmalte.jpg", "Esmalte de uñas", "Esmalte de uñas de larga duración con una amplia gama de colores brillantes y pigmentados.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, "sombras.jpg", "Paleta de sombras de ojos", "Paleta de sombras de ojos con una gama de tonos vibrantes y mates.", DEFAULT, DEFAULT, NULL);

INSERT INTO productos (id, idUsuario, foto, nombreProducto, descProducto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, "base.jpg", "Base de maquillaje", "Base de maquillaje de larga duración con cobertura media a completa.", DEFAULT, DEFAULT, NULL);

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
   
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
    FOREIGN KEY (idPost) REFERENCES productos(id)
    );

/* 3 comentarios por cada producto */
INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, 1, "Este corrector líquido es mi salvavidas. Cubre perfectamente mis ojeras sin verse pesado.", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, 2, "¿Alguien sabe si este corrector líquido funciona bien en pieles grasas?", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 1, 3, "¡Definitivamente mi corrector favorito! Cubre todas mis imperfecciones y dura todo el día.", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, 1, "¡Esta máscara de pestañas es increíble! Mis pestañas lucen más largas y voluminosas al instante.", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, 2, "¿Alguien ha tenido problemas de grumos con esta máscara de pestañas?", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 2, 3, "Me encanta cómo esta máscara define mis pestañas sin apelmazarlas. ¡Es impresionante!", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, 1, "¡Este brillo labial es perfecto para dar un toque de brillo a cualquier look de maquillaje!", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, 2, "¿Alguien más ha notado que este brillo labial tiende a desaparecer rápidamente?", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 3, 3, "¡Amo este brillo! No es pegajoso y deja mis labios suaves y brillantes durante horas.", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, 1, "¡Este iluminador es increíble! Me encanta cómo resalta mi piel y le da un brillo natural.", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, 2, "¿Alguien más ha tenido problemas de brillos excesivos con este iluminador?", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 4, 3, "El brillo que da este iluminador es espectacular. ¡Es mi nuevo imprescindible!", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, 1, "¡Este esmalte de uñas es fantástico! Los colores son vibrantes y la fórmula dura mucho tiempo sin descascararse.", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, 2, "¿Alguien ha probado la durabilidad de estos esmaltes en uñas débiles?", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 5, 3, "¡Me encanta la variedad de colores! Son perfectos para cualquier ocasión.", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 6, 1, "¡Esta paleta es increíble! Los colores son muy pigmentados y se mezclan fácilmente.", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 6, 2, "¿Alguien ha probado la durabilidad de estas sombras? Me encantaría saber si aguantan todo el día", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 6, 3, "¡Esta paleta es un sueño para cualquier amante del maquillaje! Los tonos son perfectos y la pigmentación es excelente", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 7, 1, "Esta base de maquillaje es mi favorita. ¡Deja mi piel impecable durante horas!", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 7, 2, "¿Alguien sabe si esta base de maquillaje es apta para pieles sensibles?", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 7, 3, "¡No puedo vivir sin esta base! La cobertura es perfecta y se mantiene intacta todo el día", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 8, 1, "¡Este rubor es perfecto para dar un toque de color natural a mis mejillas!", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 8, 2, "¿Alguien ha probado este rubor en pieles de tono más oscuro? Me pregunto si se verá tan bien en mí.", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 8, 3, "El tono de este rubor es simplemente hermoso. ¡Lo uso todos los días!", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 9, 1, "¡Este labial mate es mi nuevo favorito! El color es hermoso y dura todo el día sin resecar mis labios.", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 9, 2, "¿Alguien más ha tenido problemas con la durabilidad de este labial mate? No parece durar tanto como dicen.", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 9, 3, "Este labial mate es increíblemente pigmentado y no reseca los labios. ¡Lo amo!", DEFAULT, DEFAULT, NULL);


INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 10, 1, "¡Este delineador líquido es genial para crear un delineado de ojos alado perfecto!", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 10, 2, "¿Alguien tiene algún consejo para aplicar este delineador sin que se corra?", DEFAULT, DEFAULT, NULL);

INSERT INTO comentarios (id, idPost, idUsuario, comentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, 10, 3, "¡Este delineador es mi salvación para un cat-eye perfecto! La punta es precisa y el color es intenso.", DEFAULT, DEFAULT, NULL);