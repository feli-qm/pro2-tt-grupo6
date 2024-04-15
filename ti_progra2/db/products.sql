CREATE SCHEMA myapp;
USE myapp;

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
/* no hay foreign key*/


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

/* 10 productos */
insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'corrector.jpg', 'Corrector líquido', 'Corrector líquido de alta cobertura para ocultar imperfecciones y ojeras.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'mascara.jpg', 'Máscara de pestañas voluminizadora', 'Máscara de pestañas voluminizadora para unas pestañas más largas y densas.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'brillo_labial.jpg', 'Brillo labial', 'Brillo labial hidratante con un acabado brillante y sin sensación pegajosa.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'iluminador.jpg', 'Iluminador en polvo', 'Iluminador en polvo para resaltar los puntos altos del rostro y obtener un brillo radiante.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'esmalte.jpg', 'Esmalte de uñas', 'Esmalte de uñas de larga duración con una amplia gama de colores brillantes y pigmentados.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'sombras.jpg', 'Paleta de sombras de ojos', 'Paleta de sombras de ojos con una gama de tonos vibrantes y mates.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'base_maquillaje.jpg', 'Base de maquillaje', 'Base de maquillaje de larga duración con cobertura media a completa.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'rubor.jpg', 'Rubor en polvo', 'Rubor en polvo altamente pigmentado para un aspecto natural y duradero.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'labial_mate.jpg', 'Labial mate', 'Labial mate de larga duración con una fórmula hidratante que no reseca los labios.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, idUsuario, 'delineador.jpg', 'Delineador de ojos líquido', 'Delineador de ojos líquido de larga duración para un delineado preciso y sin manchas.');


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

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 1, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 1, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 1, 2, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 2, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 2, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 2, 3, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 3, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 3, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 3, 3, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 4, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 4, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 4, 3, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 5, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 5, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 5, 3, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 6, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 6, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 6, 3, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 7, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 7, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 7, 3, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 8, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 8, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 8, 3, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 9, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 9, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 9, 3, 'Comentario 3');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 10, 1, 'Comentario 1');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 10, 2, 'Comentario 2');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 10, 3, 'Comentario 3');