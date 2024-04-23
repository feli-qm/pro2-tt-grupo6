const products = {
    usuario: {
        email: "juanamancurti@gmail.com",
        usuario: "juamancurti",
        contrasenia: "secreto123",
        fechaNacimiento: "1990-08-25",
        numeroDocumento: 46213457,
        fotoPerfil: "/images/users/mujer2.jpg"     
    },
    productos: [
        {
            nombre: "Corrector líquido",
            descripcion: "Corrector líquido de alta cobertura para ocultar imperfecciones y ojeras.",
            imagen: "/images/products/corrector.png",
            comentarios: [
                {
                    nombreUsuario: "Valen123",
                    textoComentario: "Este corrector líquido es mi salvavidas. Cubre perfectamente mis ojeras sin verse pesado.",
                    imagenPerfil: "/images/users/mujer.png" 
                },
                {
                    nombreUsuario: "Feli99",
                    textoComentario: "¿Alguien sabe si este corrector líquido funciona bien en pieles grasas?",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Máscara de pestañas",
            descripcion: "Máscara de pestañas para unas pestañas más largas y densas.",
            imagen: "/images/products/rimmel.jpg",
            comentarios: [
                {
                    nombreUsuario: "Vicky31",
                    textoComentario: "¡Esta máscara de pestañas es increíble! Mis pestañas lucen más largas y voluminosas al instante.",
                    imagenPerfil: "/images/users/muje.png"
                },
                {
                    nombreUsuario: "JuanPerez",
                    textoComentario: "¿Alguien ha tenido problemas de grumos con esta máscara de pestañas?",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Brillo labial",
            descripcion: "Brillo labial hidratante con un acabado brillante y sin sensación pegajosa.",
            imagen: "/images/products/gloss.png",
            comentarios: [
                {
                    nombreUsuario: "RochiJ",
                    textoComentario: "¡Este brillo labial es perfecto para dar un toque de brillo a cualquier look de maquillaje!",
                    imagenPerfil: "/images/users/mujer.png"
                },
                {
                    nombreUsuario: "TomasR",
                    textoComentario: "¿Alguien más ha notado que este brillo labial tiende a desaparecer rápidamente?",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Iluminador en polvo",
            descripcion: "Iluminador en polvo para resaltar los puntos altos del rostro y obtener un brillo radiante.",
            imagen: "/images/products/iluminador.jpg",
            comentarios: [
                {
                    nombreUsuario: "Trini4566",
                    textoComentario: "¡Este iluminador es increíble! Me encanta cómo resalta mi piel y le da un brillo natural.",
                    imagenPerfil: "/images/users/mujer.png"
                },
                {
                    nombreUsuario: "Roco22",
                    textoComentario: "¿Alguien más ha tenido problemas de brillos excesivos con este iluminador?",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Esmalte de uñas",
            descripcion: "Esmalte de uñas de larga duración con una amplia gama de colores brillantes y pigmentados.",
            imagen: "/images/products/esmalte.jpg",
            comentarios: [
                {
                    nombreUsuario: "Laucha00",
                    textoComentario: "¡Este esmalte de uñas es fantástico! Los colores son vibrantes y la fórmula dura mucho tiempo sin descascararse.",
                    imagenPerfil: "/images/users/mujer.png"
                },
                {
                    nombreUsuario: "TomiZ",
                    textoComentario: "¿Alguien ha probado la durabilidad de estos esmaltes en uñas débiles?",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Paleta de sombras",
            descripcion: "Paleta de sombras con una gama de tonos vibrantes y mates.",
            imagen: "/images/products/sombras.jpg",
            comentarios: [
                {
                    nombreUsuario: "JoaquinL",
                    textoComentario: "¡Esta paleta es increíble! Los colores son muy pigmentados y se mezclan fácilmente.",
                    imagenPerfil: "/images/users/mujer.png"
                },
                {
                    nombreUsuario: "PerezLuca",
                    textoComentario: "¿Alguien ha probado la durabilidad de estas sombras? Me encantaría saber si aguantan todo el día.",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Base de maquillaje",
            descripcion: "Base de maquillaje de larga duración con cobertura media a completa.",
            imagen: "/images/products/base.jpg",
            comentarios: [
                {
                    nombreUsuario: "RosarioG",
                    textoComentario: "Esta base de maquillaje es mi favorita. ¡Deja mi piel impecable durante horas!",
                    imagenPerfil: "/images/users/mujer.png"
                },
                {
                    nombreUsuario: "SilviaGG",
                    textoComentario: "¿Alguien sabe si esta base de maquillaje es apta para pieles sensibles?",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Rubor en polvo",
            descripcion: "Rubor en polvo altamente pigmentado para un aspecto natural y duradero.",
            imagen: "/images/products/rubor.png",
            comentarios: [
                {
                    nombreUsuario: "Rena55",
                    textoComentario: "¡Este rubor es perfecto para dar un toque de color natural a mis mejillas!",
                    imagenPerfil: "/images/users/mujer.png"
                },
                {
                    nombreUsuario: "JuanJJ",
                    textoComentario: "¿Alguien ha probado este rubor en pieles de tono más oscuro? Me pregunto si se verá tan bien en mí.",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Labial mate",
            descripcion: "Labial mate de larga duración con una fórmula hidratante que no reseca los labios.",
            imagen: "/images/products/labialMate.jpg",
            comentarios: [
                {
                    nombreUsuario: "LolaR",
                    textoComentario: "¡Este labial mate es mi nuevo favorito! El color es hermoso y dura todo el día sin resecar mis labios.",
                    imagenPerfil: "/images/users/mujer.png"
                },
                {
                    nombreUsuario: "AbrilF5",
                    textoComentario: "¿Alguien más ha tenido problemas con la durabilidad de este labial mate? No parece durar tanto como dicen.",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        },
        {
            nombre: "Delineador de ojos líquido",
            descripcion: "Delineador de ojos líquido de larga duración para un delineado preciso y sin manchas.",
            imagen: "/images/products/delineador.jpg",
            comentarios: [
                {
                    nombreUsuario: "GuadaGT",
                    textoComentario: "¡Este delineador líquido es genial para crear un delineado de ojos alado perfecto!",
                    imagenPerfil: "/images/users/mujer.png"
                },
                {
                    nombreUsuario: "HelenaT",
                    textoComentario: "¿Alguien tiene algún consejo para aplicar este delineador sin que se corra?",
                    imagenPerfil: "/images/users/mujer3.png"
                }
            ]
        }
        // Agrega más productos de maquillaje aquí...
    ]
};
module.exports = products;