
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
    deletedAt			TIMESTAMP		NULL,
    
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

/* 10 productos */
insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 1, 'corrector.jpg', 'Corrector líquido', 'Corrector líquido de alta cobertura para ocultar imperfecciones y ojeras.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 2, 'mascara.jpg', 'Máscara de pestañas voluminizadora', 'Máscara de pestañas voluminizadora para unas pestañas más largas y densas.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 3, 'brillo_labial.jpg', 'Brillo labial', 'Brillo labial hidratante con un acabado brillante y sin sensación pegajosa.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 4, 'iluminador.jpg', 'Iluminador en polvo', 'Iluminador en polvo para resaltar los puntos altos del rostro y obtener un brillo radiante.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 5, 'esmalte.jpg', 'Esmalte de uñas', 'Esmalte de uñas de larga duración con una amplia gama de colores brillantes y pigmentados.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 6, 'sombras.jpg', 'Paleta de sombras de ojos', 'Paleta de sombras de ojos con una gama de tonos vibrantes y mates.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 7, 'base_maquillaje.jpg', 'Base de maquillaje', 'Base de maquillaje de larga duración con cobertura media a completa.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 8, 'rubor.jpg', 'Rubor en polvo', 'Rubor en polvo altamente pigmentado para un aspecto natural y duradero.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 9, 'labial_mate.jpg', 'Labial mate', 'Labial mate de larga duración con una fórmula hidratante que no reseca los labios.');

insert into productos (id, idUsuario, nombreImgProducto, nombreProducto, descProducto)
values (default, 10, 'delineador.jpg', 'Delineador de ojos líquido', 'Delineador de ojos líquido de larga duración para un delineado preciso y sin manchas.');


/* comentarios */

CREATE TABLE comentarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
id					INT				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idPost				INT				NOT NULL,
idUsuario			INT				NOT NULL,
textoComent			VARCHAR(500)	NOT NULL,
createdAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP,
updatedAt			TIMESTAMP		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt			TIMESTAMP		NULL,

FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idPost) REFERENCES productos(id)
);

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 1, 1, 'Este corrector líquido es mi salvavidas. Cubre perfectamente mis ojeras sin verse pesado.');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 1, 2, '¿Alguien sabe si este corrector líquido funciona bien en pieles grasas?');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 1, 3, '¡Definitivamente mi corrector favorito! Cubre todas mis imperfecciones y dura todo el día.');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 2, 1, '¡Esta máscara de pestañas es increíble! Mis pestañas lucen más largas y voluminosas al instante.');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 2, 2, '¿Alguien ha tenido problemas de grumos con esta máscara de pestañas?');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 2, 3, 'Me encanta cómo esta máscara define mis pestañas sin apelmazarlas. ¡Es impresionante!');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 3, 1, '¡Este brillo labial es perfecto para dar un toque de brillo a cualquier look de maquillaje!');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 3, 2, '¿Alguien más ha notado que este brillo labial tiende a desaparecer rápidamente?');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 3, 3, '¡Amo este brillo! No es pegajoso y deja mis labios suaves y brillantes durante horas.');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 4, 1, '¡Este iluminador es increíble! Me encanta cómo resalta mi piel y le da un brillo natural.');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 4, 2, '¿Alguien más ha tenido problemas de brillos excesivos con este iluminador?');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 4, 3, 'El brillo que da este iluminador es espectacular. ¡Es mi nuevo imprescindible!');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 5, 1, '¡Este esmalte de uñas es fantástico! Los colores son vibrantes y la fórmula dura mucho tiempo sin descascararse.');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 5, 2, '¿Alguien ha probado la durabilidad de estos esmaltes en uñas débiles?');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 5, 3, '¡Me encanta la variedad de colores! Son perfectos para cualquier ocasión.');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 6, 1, '¡Esta paleta es increíble! Los colores son muy pigmentados y se mezclan fácilmente.');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 6, 2, '¿Alguien ha probado la durabilidad de estas sombras? Me encantaría saber si aguantan todo el día');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 6, 3, '¡Esta paleta es un sueño para cualquier amante del maquillaje! Los tonos son perfectos y la pigmentación es excelente');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 7, 1, 'Esta base de maquillaje es mi favorita. ¡Deja mi piel impecable durante horas!');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 7, 2, '¿Alguien sabe si esta base de maquillaje es apta para pieles sensibles?');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 7, 3, '¡No puedo vivir sin esta base! La cobertura es perfecta y se mantiene intacta todo el día');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 8, 1, '¡Este rubor es perfecto para dar un toque de color natural a mis mejillas!');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 8, 2, '¿Alguien ha probado este rubor en pieles de tono más oscuro? Me pregunto si se verá tan bien en mí.');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 8, 3, 'El tono de este rubor es simplemente hermoso. ¡Lo uso todos los días!');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 9, 1, '¡Este labial mate es mi nuevo favorito! El color es hermoso y dura todo el día sin resecar mis labios.');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 9, 2, '¿Alguien más ha tenido problemas con la durabilidad de este labial mate? No parece durar tanto como dicen.');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 9, 3, 'Este labial mate es increíblemente pigmentado y no reseca los labios. ¡Lo amo!');

insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 10, 1, '¡Este delineador líquido es genial para crear un delineado de ojos alado perfecto!');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 10, 2, '¿Alguien tiene algún consejo para aplicar este delineador sin que se corra?');
insert into comentarios (id, idPost, idUsuario, textoComent)
values (default, 10, 3, '¡Este delineador es mi salvación para un cat-eye perfecto! La punta es precisa y el color es intenso.');