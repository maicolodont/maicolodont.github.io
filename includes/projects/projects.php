<?php
$musicPlayer = new Project(
    "music-player",
    $title = "Reproductor de música local",
    $description = "Reproductor de música local con hermosa UI.",
    $operatingSystems = [
        'Android',
        'iOS'
    ],
    $technologiesUsed = [
        'Dart',
        'Flutter',
    ],
    $mainFeatures = [
        "Busca todos los audios en el dispositivo",
        "Obtiene los metadados del audio (Imagen, título etc)",
        'Si estás reproduciendo audio y pulsas atrás, se crea un mini reproductor',
    ],
    $imagesUrls = [
        '/assets/Projects/music-player/1.jpg',
        '/assets/Projects/music-player/2.jpg',
    ]    
);

$whatsApp = new Project(
    "clone-whatsapp",
    $title = "Clón de WhatsApp",
    $description = "Este proyecto es un clon de WhatsApp, desarrollado con Flutter y Firebase, que ofrece una experiencia de mensajería instantánea similar a la popular aplicación de mensajería. El objetivo principal de este proyecto fue replicar las funcionalidades clave de WhatsApp, como el chat en tiempo real, el envío de multimedia y la autenticación de usuariOS, proporcionando una base sólida para futuras mejoras y personalizaciones.",
    $operatingSystems = [
        'Android',
        'iOS'
    ],
    $technologiesUsed = [
        'Dart',
        'Flutter',
        'Firebase',
        'Firebase Cloud Messaging'
    ],
    $mainFeatures = [
        "Efecto de sonido al recibir mensaje y estás en el mismo chat",
        "Notificación de nuevo mensaje en el mismo  char si tienes scroll arriba",
        'Efecto de vibración al pulsar enviar notas de voz',
        'Efecto de tiempo al grabar nota de voz entre otras cosas más'
    ],
    $imagesUrls = [
        '/assets/Projects/clone-whatsapp/1.jpg',
        '/assets/Projects/clone-whatsapp/2.jpg',
        '/assets/Projects/clone-whatsapp/3.jpg',
        '/assets/Projects/clone-whatsapp/4.jpg',
        '/assets/Projects/clone-whatsapp/5.jpg',
        '/assets/Projects/clone-whatsapp/6.jpg',
    ]
);

$threads = new Project(
    "threads",
    $title = "Clón de Threads UI",
    $description = "Este proyecto es un clon de la interfaz de usuario (UI) de Threads, diseñado para replicar la apariencia y la experiencia de usuario de la popular aplicación.",
    $operatingSystems = [
        'Android',
        'iOS'
    ],
    $technologiesUsed = [
        'Dart',
        'Flutter'
    ],
    $mainFeatures = [
        "Pantalla de inicio",
        "Pantalla de perfil",
        'Pantalla de crear hilos'
    ],
    $imagesUrls = [
        '/assets/Projects/threads/1.jpg',
        '/assets/Projects/threads/2.jpg',
        '/assets/Projects/threads/3.jpg',
        '/assets/Projects/threads/4.jpg',
    ]
);

$shopZ = new Project(
    "shop-z",
    $title = "App de tienda",
    $description = "Este proyecto es una tienda de pedidos (Proyecto privado aún).",
    $operatingSystems = [
        'Android',
        'iOS'
    ],
    $technologiesUsed = [
        'Dart',
        'Flutter',
        'Firebase',
        'Mapbox'
    ],
    $mainFeatures = [
        "Crear clientes",
        "Ver pedidos",
        'Billetera virtual',
        'Multiples unidades de medida en los productos'
    ],
    $imagesUrls = [
        '/assets/Projects/shop-z/1.jpg',
        '/assets/Projects/shop-z/2.jpg',
        '/assets/Projects/shop-z/3.jpg',
        '/assets/Projects/shop-z/4.jpg',
    ]
);

$calculator = new Project(
    "calculator",
    $title = "App de calculadora con hermosa UI",
    $description = "Este proyecto es una aplicación de calculadora desarrollada en Flutter, diseñada para proporcionar una experiencia de usuario intuitiva y eficiente para realizar cálculos matemáticos básicos. La calculadora incluye una interfaz atractiva y fácil de usar, adecuada para dispositivos móviles tanto Android como iOS.",
    $operatingSystems = [
        'Android',
        'iOS'
    ],
    $technologiesUsed = [
        'Dart',
        'Flutter',
    ],
    $mainFeatures = [
        "Realizar cálculos matemáticos básicos",
    ],
    $imagesUrls = [
        '/assets/Projects/calculator/1.jpg',
    ]
);

$ticTacToe = new Project(
    "tic-tac-toe",
    $title = "Juego Tic Tac Toe",
    $description = "He creado este juego de Tic Tac Toe en Flutter. Este proyecto fue un pequeño reto que hice en mi tiempo libre.",
    $operatingSystems = [
        'Android',
        'iOS',
        'Windows',
        'Web',
        'Linux',
        'MacOS'
    ],
    $technologiesUsed = [
        'Dart',
        'Flutter',
    ],
    $mainFeatures = [
        "Juego para 2 jugadores local",
        "Trazado de línea con CustomPaint",
        "Agregar tiempo por turno",
        "Algoritmo de match de 9 celdas",
        "Efectos de audio",
    ],
    $imagesUrls = [
        '/assets/Projects/tic-tac-toe/1.png',
        '/assets/Projects/tic-tac-toe/2.png',
        '/assets/Projects/tic-tac-toe/3.png',
    ]
);