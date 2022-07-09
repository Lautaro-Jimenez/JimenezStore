let carrito = []; //descomentar despues para revisar carrito
class Juego {
    constructor(titulo, imagen, descripcion, genero, desarrollador, editor, franquicia, lanzamiento, link) {
        //no olvidar agregar el id
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.genero = genero;
        this.desarrollador = desarrollador;
        this.editor = editor;
        this.franquicia = franquicia;
        this.lanzamiento = lanzamiento;
        this.link = link;
    }
}

const imgCarrusel = [
    { img: "/assets/img/rdr2.jpg" },
    { img: "/assets/img/rust.jpg" },
    { img: "/assets/img/tarkov.jpg" },
];

// aclaración: la descripción de cada juego es larga
const juegos = [
    new Juego(
        "God of War",
        "./assets/img/godofwar.jpg",
        "<span>Ingresa al reino nórdico</span><br>Habiendo consumado su venganza contra los dioses el Olimpo años atrás, Kratos ahora vive como un hombre en el reino de los dioses y los monstruos nórdicos. En este hostil e inhóspito mundo, debe pelear por sobrevivir... y enseñarle a su hijo a hacer lo mismo. <br><span>Aprovecha una segunda oportunidad</span><br>Kratos vuelve a ser padre. Como mentor y protector de Atreus, un hijo decidido a ganarse su respeto, se ve obligado a controlar la ira que lo ha caracterizado durante tanto tiempo ahora que se encuentra en un mundo muy peligroso con su hijo. <br><span>Viaja a un mundo oscuro y elemental de criaturas aterradoras</span><br>Del mármol y las columnas ornamentadas del Olimpo a los implacables bosques, montañas y cavernas característicos del mundo nórdico previkingo, es un entorno totalmente nuevo con su propio panteón de criaturas, monstruos y dioses. <br><span>    Enfréntate a sangrientos combates físicos </span><br> Con una cámara sobre el hombro que acerca al jugador a la acción como nunca antes, las peleas en God of War™ evocan el panteón de criaturas nórdicas que Kratos tendrá que enfrentar, criaturas imponentes, crueles y extenuantes. Una nueva arma principal e habilidades inéditas conservan el espíritu característico de God of War mientras presentan una visión de conflicto que abren nuevos caminos para el género.",
        "Acción, Aventura, Rol",
        "Santa Monica Studio",
        "PlayStation PC LLC",
        "PlayStation Studios",
        "14 ENE 2022",
        "https://store.steampowered.com/app/1593500/God_of_War/"
    ),

    new Juego(
        "Red Dead Redemption 2",
        "./assets/img/rdr2.jpg",
        "Estados Unidos, 1899. <br>   Arthur Morgan y la banda de Van der Linde son forajidos buscados. Mientras los agentes federales y los mejores cazarrecompensas de la nación les pisan los talones, la banda deberá abrirse camino por el abrupto territorio del corazón de Estados Unidos a base de robos y peleas para sobrevivir. Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer.  <br>  Con contenido adicional para el Modo Historia y un completo Modo Foto, Red Dead Redemption 2 también incluye acceso gratuito al mundo multijugador compartido de Red Dead Online, en el que los jugadores asumen diversos roles para ganarse la vida a su manera en la frontera mientras persiguen a fugitivos buscados como cazarrecompensas, crean un negocio como comerciantes, descubren exóticos tesoros como coleccionistas, dirigen una destilería ilegal como fabricantes de aguardiente y más.  <br>  Gracias a los nuevos avances gráficos y técnicos que permiten una mayor inmersión en el juego, Red Dead Redemption 2 para PC aprovecha al máximo la potencia de los equipos para conseguir que todos y cada uno de los aspectos de este gigantesco mundo lleno de detalles cobren vida. Incluye mayores distancias de dibujado; iluminación global y oclusión ambiental de mayor calidad, para mejorar la luz tanto de día como de noche; reflejos perfeccionados y sombras más profundas y de mayor resolución a todas las distancias; texturas de árboles teseladas y texturas de hierba y pelaje mejoradas para aumentar el realismo de las plantas y animales.    Red Dead Redemption 2 para PC también ofrece compatibilidad con HDR, la posibilidad de utilizar pantallas de alta gama (con resoluciones 4K y superiores), configuraciones con varios monitores, con pantalla panorámica, mayores tasas de fotogramas, etc.",
        "Accion, Aventura",
        "Rockstar Games",
        "Rockstar Games",
        "Red Dead Redemption",
        "5 DIC 2019",
        "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
    ),

    new Juego(
        "Mortal Kombat 11",
        "./assets/img/mk11.jpg",
        "MK está de vuelta mejor que nunca con la siguiente evolución de la emblemática franquicia. Con las nuevas variaciones de personaje tendrás un control sin precedentes para personalizar a tus luchadores y hacerlos únicos. El nuevo motor gráfico resalta cada uno de los momentos más sangrientos para ponerte tan cerca de la pelea que casi podrás sentirla. Con un reparto de luchadores nuevos y klásicos, el modo historia cinemático continúa la épica saga iniciada hace más de 25 años.",
        "Accion",
        "NetherRealm Studios, QLOC, Shiver",
        "Warner Bros. Games, Warner Bros. Interactive Entertainment",
        "Mortal Kombat",
        "23 ABR 2019",
        "https://store.steampowered.com/app/976310/Mortal_Kombat11/"
    ),

    new Juego(
        "Escape From Tarkov",
        "./assets/img/tarkov.jpg",
        "<span>Get Ready For Escape</span><br>Escape from Tarkov es un juego de rol/simulador de acción en primera persona de corte hardcore y realista con funciones de MMO y un recorrido guiado por la historia. <br>Con cada día que pasa, la situación en la región de Norvinsk se vuelve cada vez más complicada. La guerra incesante en Tarkov ha provocado un pánico masivo; la población local ha huido de la ciudad, pero los que se quedaron buscan mejorar su fortuna a expensas de los demás. Habiendo aceptado la nueva realidad, los salvajes habitantes de Tarkov - Scavs se congregaron en pandillas bien armadas y comenzaron la redivisión de la ciudad. Hoy en día, Tarkov está separada por fronteras invisibles, controladas por diferentes grupos. Los pistoleros codiciosos ganarían cualquier cosa para salirse con la suya, incluido el asesinato de civiles y la confrontación directa con las dos compañías militares privadas.<br>Los jugadores tendrán vivirán en la piel de uno de los mercenarios que sobrevivieron a la etapa inicial del conflicto de Tarkov. Después de elegir uno de los lados, USEC o BEAR, el personaje del jugador comienza a salir de la ciudad. Tarkov está sellado por las Naciones Unidas y el ejército ruso, se cortan las cadenas de suministro, se pierde la comunicación con el comando operativo y, en estas condiciones, cada uno tiene que tomar sus propias decisiones sobre qué hacer y cómo salir de la metrópolis asolada por el caos.",
        "Acción, Rol, Supervivencia, MMO, Simulador",
        "BattleState Games",
        "BattleState Games",
        "Escape From Tarkov",
        "27 JUL 2017",
        "https://www.escapefromtarkov.com/"
    ),

    new Juego(
        "FIFA 22",
        "./assets/img/fifa22.jpg",
        "Juega al deporte rey con más de 17,000 jugadores, más de 700 equipos en más de 90 estadios y más de 30 ligas de todo el mundo.",
        "Simulador, Deportes",
        "EA Canada & EA Romania",
        "Electronic Arts",
        "EA Sports",
        "1 OCT 2021",
        "https://store.steampowered.com/app/1506830/FIFA_22/"
    ),

    new Juego(
        "Elden Ring",
        "./assets/img/eldenring.jpg",
        "MK está de vuelta mejor que nunca con la siguiente evolución de la emblemática franquicia. Con las nuevas variaciones de personaje tendrás un control sin precedentes para personalizar a tus luchadores y hacerlos únicos. El nuevo motor gráfico resalta cada uno de los momentos más sangrientos para ponerte tan cerca de la pelea que casi podrás sentirla. Con un reparto de luchadores nuevos y klásicos, el modo historia cinemático continúa la épica saga iniciada hace más de 25 años.",
        "Accion, Rol",
        "FromSoftware Inc.",
        "FromSoftware Inc. Bandai Namco Entertainment",
        "Souls",
        "24 FEB 2022",
        "https://store.steampowered.com/app/1245620/ELDEN_RING/"
    ),

    new Juego(
        "STAR WARS: Jedi Fallen Order",
        "./assets/img/swjedi.jpg",
        "Te espera una aventura por toda la galaxia en Star Wars Jedi: La Orden caída, un título de acción y aventura en tercera persona de Respawn Entertainment. Se trata de un juego de un solo jugador con una historia en la que te metes en la piel de un Padawan Jedi que logró escapar de milagro de la purga de la Orden 66 luego de los acontecimientos del Episodio 3: La venganza de los Sith. Tu misión es reconstruir la Orden Jedi y, para ello, tienes que recuperarte de tu tortuoso pasado para completar tu entrenamiento, desarrollar nuevas habilidades poderosas de la Fuerza y dominar el arte de la lucha con el legendario sable de luz. Y debes hacerlo manteniéndote siempre un paso adelante del Imperio y sus mortíferos Inquisidores.",
        "Acción, Aventura",
        "Respawn Entertainment",
        "Electronic Arts",
        "Star Wars",
        "15 NOV 2019",
        "https://store.steampowered.com/app/1172380/STAR_WARS_Jedi_La_Orden_cada/"
    ),

    new Juego(
        "The Sims 4",
        "./assets/img/sims4.jpg",
        "Los Sims 4 es el juego de simulación social que te ofrece el poder de crear y controlar a gente. Disfruta de la creatividad, el humor, la evasión y la libertad que proporciona jugar a la vida en Los Sims 4. ¡Prueba la demo de Crear un Sim para crear tu propio Sim!",
        "Simulador, Casual",
        "Maxis",
        "Electronic Arts",
        "The Sims™",
        "2 SEP 2014",
        "https://store.steampowered.com/app/1222670/The_Sims_4/"
    ),

    new Juego(
        "Rust",
        "./assets/img/rust.jpg",
        "The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.",
        "Acción, Aventura, Indie, Multijugador masivo, Rol",
        "Facepunch Studios",
        "Facepunch Studios",
        "Rust",
        "8 FEB 2018",
        "https://store.steampowered.com/app/252490/Rust/"
    ),

    new Juego(
        "Darkest Dungeon 2",
        "./assets/img/darkestdungeon2.jpg",
        "Darkest Dungeon II es la aventura roguelike de un grupo de condenados. Forma un equipo, pertrecha tu carruaje y aventúrate hacia los páramos asolados en un último intento por impedir el apocalipsis. Pero cuidado: el peligro podría acechar también desde dentro…",
        "Aventura, Indie, Rol, Estrategia",
        "Red Hook Studios",
        "Red Hook Studios",
        "Darkest Dungeon",
        "FEB 2023",
        "https://store.steampowered.com/app/1940340/Darkest_Dungeon_II/"
    ),

    new Juego(
        "Football Manager 2022",
        "./assets/img/fm22.jpg",
        "Football isn’t just about being the best and winning. It’s about overcoming the odds, realising your dreams, and earning your success. Fighting your way to the top and shocking the world or clawing your way back from the brink – these moments taste sweetest.",
        "Simulador, Deportes",
        "Sports Interactive",
        "SEGA",
        "Football Manager",
        "8 NOV 2021",
        "https://store.steampowered.com/app/1569040/Football_Manager_2022/"
    ),

    new Juego(
        "Forza Horizon 5",
        "./assets/img/horizon.jpg",
        "¡Te espera tu aventura definitiva en Horizon! Conduce cientos de autos fenomenales de todo el mundo en emocionantes expediciones a lo largo y ancho de los impactantes paisajes de México, en un juego ambientado en un mundo abierto que está en constante evolución.",
        "Aventura, Carreras, Simulador, Deportes",
        "Playground Games",
        "Xbox Game Studios",
        "Forza Horizon",
        "9 NOV 2021",
        "https://store.steampowered.com/app/1551360/Forza_Horizon_5/"
    ),
];

function verJuegos(juegos) {
    const contenedorDeJuegos = document.getElementById("contenedor_de_juegos");
    contenedorDeJuegos.innerHTML = "";
    juegos.forEach((juego) => {
        //creo el div con la clase juego
        const divJuego = document.createElement("div");
        divJuego.classList.add("juego"); //hasta acá solamente hice el <div class="juego"></div>

        //ahora empiezo a meterle contenido al div creado anteriormente
        divJuego.innerHTML = `
            <img src= "${juego.imagen}" alt= "${juego.titulo}">
            <h3>${juego.titulo}</h3>
            <p>Género: ${juego.genero}</p>
            <p>Desarrollador: ${juego.desarrollador}</p>
            <p>Editor: ${juego.editor}</p>
            <p>Franquicia: ${juego.franquicia}</p>
            <p>Lanzamiento: ${juego.lanzamiento}</p>
            <a href="${juego.link}">Página oficial</a>
            <i class="fa-solid fa-circle-plus"></i>
        `;

        const botonVerJuego = document.createElement("button");
        botonVerJuego.classList.add("boton_ver_detalles");
        botonVerJuego.innerText = "Ver detalles del juego";
        botonVerJuego.addEventListener("click", () => {
            verMasDelJuego(juego);
            botonVolver();
        });
        divJuego.appendChild(botonVerJuego);

        contenedorDeJuegos.appendChild(divJuego);
    });
}

function verMasDelJuego(juego) {
    const contenedorDeJuegos = document.getElementById("contenedor_de_juegos");
    contenedorDeJuegos.innerHTML = "";

    contenedorDeJuegos.innerHTML = `
        <img src= "${juego.imagen}" alt= "${juego.titulo}">
        <h3>${juego.titulo}</h3>
        <p>${juego.descripcion}</p>
        <p>Género: ${juego.genero}</p>
        <p>Desarrollador: ${juego.desarrollador}</p>
        <p>Editor: ${juego.editor}</p>
        <p>Franquicia: ${juego.franquicia}</p>
        <p>Lanzamiento: ${juego.lanzamiento}</p>
        <a href="${juego.link}">Más información</a>
    `;
}

function botonVolver() {
    const botonVolverAtras = document.createElement("button");
    botonVolverAtras.classList.add("boton_volver_atras");
    botonVolverAtras.innerText = "Regresar";
    botonVolverAtras.addEventListener("click", () => {
        verJuegos(juegos);
    });
    document.getElementById("contenedor_de_juegos").prepend(botonVolverAtras);
}

verJuegos(juegos);

let nombreUsuario;

document
    .getElementById("formulario-usuario")
    .addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(evento) {
    evento.preventDefault();
    nombreUsuario = document.getElementById("usuario").value;

    let listaDeJuegos = document.getElementById("listaDeJuegos");
    const juegos = JSON.parse(localStorage.getItem(nombreUsuario));

    if (juegos == null) {
        listaDeJuegos.innerHTML = "<h1>No hay juegos cargados</h1>";
    } else {
        mostrarJuegos(juegos);
    }
    mostrarPanel();
}

function mostrarJuegos(juegos) {
    let listaDeJuegos = document.getElementById("listaDeJuegos");
    listaDeJuegos.innerHTML = "";
    juegos.forEach((juego) => {
        let li = document.createElement("li");
        li.innerHTML = `
        <hr> ${juego.titulo} - ${juego.genero}`;
        const botonBorrar = document.createElement("button");
        botonBorrar.innerText = "Borrar";
        botonBorrar.addEventListener("click", () => {
            eliminarJuego(juego);
        });
        li.appendChild(botonBorrar);
        listaDeJuegos.appendChild(li);
    });
}

function mostrarPanel() {
    const filtros = document.getElementById("filtros");

    filtros.innerHTML = `<h3>Bienvenido ${nombreUsuario}</h3>
    <form id="formulario-juego">
        <input type="text" id="titulo" placeholder="Titulo">
        <input type="text" id="genero" placeholder="Genero">
        <button type="submit">Agregar juego</button>
    </form>`;

    document
        .getElementById("formulario-juego")
        .addEventListener("submit", agregarJuego);
}

function agregarJuego(evento) {
    evento.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;

    const juego = new Juego(titulo,genero);

    const juegosEnLocalStorage = JSON.parse(
        localStorage.getItem(nombreUsuario)
    );

    if (juegosEnLocalStorage == null) {
        localStorage.setItem(nombreUsuario, JSON.stringify([juego]));
        mostrarJuegos([juego]);
    } else {
        juegosEnLocalStorage.push(juego);
        localStorage.setItem(
            nombreUsuario,
            JSON.stringify(juegosEnLocalStorage)
        );
        mostrarJuegos(juegosEnLocalStorage);
    }
    evento.target.reset();
}

function eliminarJuego(juego) {
    console.log(juego);
    const juegosEnLocalStorage = JSON.parse(
        localStorage.getItem(nombreUsuario)
    );
    const nuevoArray = juegosEnLocalStorage.filter(
        (item) => item.titulo != juego.titulo
    );
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
    mostrarJuegos(nuevoArray);
}
