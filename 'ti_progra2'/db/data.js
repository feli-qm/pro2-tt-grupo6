const data={
    usuario : {
        email: "juanamancurti@gmail.com", //COINCIDIR CON EL FORMULARIO DE REGISTRO
        usuario: "juamancurti",
        contraseña: "secreto123",
        fechaNacimiento: "1990-08-25",
        numeroDocumento: 98765432,
        fotoPerfil: "/img/perfiles/beautyqueen.jpg"
    },
        productos: [
            {
                nombre: "Corrector líquido",
                descripcion: "Corrector líquido de alta cobertura para ocultar imperfecciones y ojeras.",
                precio: 17.99,
                imagen: "/img/productos/corrector.jpg",
                comentarios: [
                    {
                        nombreUsuario: "Valen123",
                        textoComentario: "Este corrector líquido es mi salvavidas. Cubre perfectamente mis ojeras sin verse pesado.",
                        imagenPerfil: "./public/products/img-cafetera-moulinex.png" //HAY QUE CAMBIAR LA RUTA DE IMGS
                    },
                    {
                        nombreUsuario: "Feli99",
                        textoComentario: "¿Alguien sabe si este corrector líquido funciona bien en pieles grasas?",
                        imagenPerfil: "/img/perfiles/coveruplover.jpg"
                    }
                ]
            },
            {
                nombre: "Máscara de pestañas voluminizadora",
                descripcion: "Máscara de pestañas voluminizadora para unas pestañas más largas y densas.",
                precio: 21.99,
                imagen: "/img/productos/mascara.jpg",
                comentarios: [
                    {
                        nombreUsuario: "Vicky31",
                        textoComentario: "¡Esta máscara de pestañas es increíble! Mis pestañas lucen más largas y voluminosas al instante.",
                        imagenPerfil: "/img/perfiles/lashlover.jpg"
                    },
                    {
                        nombreUsuario: "JuanPerez",
                        textoComentario: "¿Alguien ha tenido problemas de grumos con esta máscara de pestañas?",
                        imagenPerfil: "/img/perfiles/volumeguru.jpg"
                    }
                ]
            },
            {
                nombre: "Brillo labial",
                descripcion: "Brillo labial hidratante con un acabado brillante y sin sensación pegajosa.",
                precio: 12.99,
                imagen: "/img/productos/brillo_labial.jpg",
                comentarios: [
                    {
                        nombreUsuario: "RochiJ",
                        textoComentario: "¡Este brillo labial es perfecto para dar un toque de brillo a cualquier look de maquillaje!",
                        imagenPerfil: "/img/perfiles/lipglosslover.jpg"
                    },
                    {
                        nombreUsuario: "TomasR",
                        textoComentario: "¿Alguien más ha notado que este brillo labial tiende a desaparecer rápidamente?",
                        imagenPerfil: "/img/perfiles/shineonqueen.jpg"
                    }
                ]
            },
            {
                nombre: "Iluminador en polvo",
                descripcion: "Iluminador en polvo para resaltar los puntos altos del rostro y obtener un brillo radiante.",
                precio: 29.99,
                imagen: "/img/productos/iluminador.jpg",
                comentarios: [
                    {
                        nombreUsuario: "Trini4566",
                        textoComentario: "¡Este iluminador es increíble! Me encanta cómo resalta mi piel y le da un brillo natural.",
                        imagenPerfil: "/img/perfiles/glowgetter.jpg"
                    },
                    {
                        nombreUsuario: "Roco22",
                        textoComentario: "¿Alguien más ha tenido problemas de brillos excesivos con este iluminador?",
                        imagenPerfil: "/img/perfiles/highlightqueen.jpg"
                    }
                ]
            },
            {
                nombre: "Esmalte de uñas",
                descripcion: "Esmalte de uñas de larga duración con una amplia gama de colores brillantes y pigmentados.",
                precio: 9.99,
                imagen: "/img/productos/esmalte.jpg",
                comentarios: [
                    {
                        nombreUsuario: "Laucha00",
                        textoComentario: "¡Este esmalte de uñas es fantástico! Los colores son vibrantes y la fórmula dura mucho tiempo sin descascararse.",
                        imagenPerfil: "/img/perfiles/nailpolishaddict.jpg"
                    },
                    {
                        nombreUsuario: "TomiZ",
                        textoComentario: "¿Alguien ha probado la durabilidad de estos esmaltes en uñas débiles?",
                        imagenPerfil: "/img/perfiles/colorfulnails.jpg"
                    }
                ]
            },
            {nombre: "Paleta de sombras de ojos",
            descripcion: "Paleta de sombras de ojos con una gama de tonos vibrantes y mates.",
            precio: 39.99,
            imagen: "/img/productos/sombras.jpg",
            comentarios: [
                {
                    nombreUsuario: "JoaquinL",
                    textoComentario: "¡Esta paleta es increíble! Los colores son muy pigmentados y se mezclan fácilmente.",
                    imagenPerfil: "/img/perfiles/makeupaddict23.jpg"
                },
                {
                    nombreUsuario: "PerezLuca",
                    textoComentario: "¿Alguien ha probado la durabilidad de estas sombras? Me encantaría saber si aguantan todo el día.",
                    imagenPerfil: "/img/perfiles/glamgirl87.jpg"
                }
            ]
        },
        {
            nombre: "Base de maquillaje",
            descripcion: "Base de maquillaje de larga duración con cobertura media a completa.",
            precio: 29.99,
            imagen: "/img/productos/base_maquillaje.jpg",
            comentarios: [
                {
                    nombreUsuario: "RosarioG",
                    textoComentario: "Esta base de maquillaje es mi favorita. ¡Deja mi piel impecable durante horas!",
                    imagenPerfil: "/img/perfiles/beautylover567.jpg"
                },
                {
                    nombreUsuario: "SilviaGG",
                    textoComentario: "¿Alguien sabe si esta base de maquillaje es apta para pieles sensibles?",
                    imagenPerfil: "/img/perfiles/cosmeticfanatic.jpg"
                }
            ]
        },
        {
            nombre: "Rubor en polvo",
            descripcion: "Rubor en polvo altamente pigmentado para un aspecto natural y duradero.",
            precio: 19.99,
            imagen: "/img/productos/rubor.jpg",
            comentarios: [
                {
                    nombreUsuario: "Rena55",
                    textoComentario: "¡Este rubor es perfecto para dar un toque de color natural a mis mejillas!",
                    imagenPerfil: "/img/perfiles/rosycheeks.jpg"
                },
                {
                    nombreUsuario: "JuanJJ",
                    textoComentario: "¿Alguien ha probado este rubor en pieles de tono más oscuro? Me pregunto si se verá tan bien en mí.",
                    imagenPerfil: "/img/perfiles/blushlover.jpg"
                }
            ]
        },
        {
            nombre: "Labial mate",
            descripcion: "Labial mate de larga duración con una fórmula hidratante que no reseca los labios.",
            precio: 24.99,
            imagen: "/img/productos/labial_mate.jpg",
            comentarios: [
                {
                    nombreUsuario: "LolaR",
                    textoComentario: "¡Este labial mate es mi nuevo favorito! El color es hermoso y dura todo el día sin resecar mis labios.",
                    imagenPerfil: "/img/perfiles/lipstickaddict.jpg"
                },
                {
                    nombreUsuario: "AbrilF5",
                    textoComentario: "¿Alguien más ha tenido problemas con la durabilidad de este labial mate? No parece durar tanto como dicen.",
                    imagenPerfil: "/img/perfiles/poutyqueen.jpg"
                }
            ]
        },
        {
            nombre: "Delineador de ojos líquido",
            descripcion: "Delineador de ojos líquido de larga duración para un delineado preciso y sin manchas.",
            precio: 14.99,
            imagen: "/img/productos/delineador.jpg",
            comentarios: [
                {
                    nombreUsuario: "GuadaGT",
                    textoComentario: "¡Este delineador líquido es genial para crear un delineado de ojos alado perfecto!",
                    imagenPerfil: "/img/perfiles/wingedliner.jpg"
                },
                {
                    nombreUsuario: "HelenaT",
                    textoComentario: "¿Alguien tiene algún consejo para aplicar este delineador sin que se corra?",
                    imagenPerfil: "/img/perfiles/cateyequeen.jpg"
                }
            ]
        }
            // Agrega más productos de maquillaje aquí...
        ]
    };
    module.exports= data;