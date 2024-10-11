export class Project {
    constructor({ id, title, description, operatingSystems = null, technologiesUsed, mainFeatures, imagesUrls }) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.operatingSystems = operatingSystems;
      this.technologiesUsed = technologiesUsed;
      this.mainFeatures = mainFeatures;
      this.imagesUrls = imagesUrls;
    }
  
    static getAll() {
      return Object.freeze([
        ticTacToe,
        musicPlayer,
        whatsApp,
        threads,
        shopZ,
        calculator
      ]);
    }
  
    static getProject(projectId) {
      const projects = Project.getAll();
      return projects.find(project => project.id === projectId) || null;
    }
  }

  const musicPlayer = new Project({
    id: "music-player",
    title: "Reproductor de música local",
    description: "Reproductor de música local con hermosa UI.",
    operatingSystems: [
      'Android',
      'iOS'
    ],
    technologiesUsed: [
      'Dart',
      'Flutter',
    ],
    mainFeatures: [
      "Busca todos los audios en el dispositivo",
      "Obtiene los metadatos del audio (Imagen, título etc)",
      "Si estás reproduciendo audio y pulsas atrás, se crea un mini reproductor",
    ],
    imagesUrls: [
      '/assets/Projects/music-player/1.jpg',
      '/assets/Projects/music-player/2.jpg',
    ]
  });
  
  const whatsApp = new Project({
    id: "clone-whatsapp",
    title: "Clón de WhatsApp",
    description: "Clon de WhatsApp desarrollado con Flutter y Firebase, con funcionalidades clave como el chat en tiempo real y envío de multimedia.",
    operatingSystems: [
      'Android',
      'iOS'
    ],
    technologiesUsed: [
      'Dart',
      'Flutter',
      'Firebase',
      'Firebase Cloud Messaging'
    ],
    mainFeatures: [
      "Efecto de sonido al recibir mensaje",
      "Notificación de nuevo mensaje en chat con scroll arriba",
      "Vibración al enviar notas de voz",
      "Efectos de tiempo para notas de voz"
    ],
    imagesUrls: [
      '/assets/Projects/clone-whatsapp/1.jpg',
      '/assets/Projects/clone-whatsapp/2.jpg',
      '/assets/Projects/clone-whatsapp/3.jpg',
      '/assets/Projects/clone-whatsapp/4.jpg',
      '/assets/Projects/clone-whatsapp/5.jpg',
      '/assets/Projects/clone-whatsapp/6.jpg',
    ]
  });
  
  const threads = new Project({
    id: "threads",
    title: "Clón de Threads UI",
    description: "Clon de la interfaz de usuario de Threads.",
    operatingSystems: [
      'Android',
      'iOS'
    ],
    technologiesUsed: [
      'Dart',
      'Flutter'
    ],
    mainFeatures: [
      "Pantalla de inicio",
      "Pantalla de perfil",
      "Pantalla de crear hilos"
    ],
    imagesUrls: [
      '/assets/Projects/threads/1.jpg',
      '/assets/Projects/threads/2.jpg',
      '/assets/Projects/threads/3.jpg',
      '/assets/Projects/threads/4.jpg',
    ]
  });
  
  const shopZ = new Project({
    id: "shop-z",
    title: "App de tienda",
    description: "Tienda de pedidos (Proyecto privado).",
    operatingSystems: [
      'Android',
      'iOS'
    ],
    technologiesUsed: [
      'Dart',
      'Flutter',
      'Firebase',
      'Mapbox'
    ],
    mainFeatures: [
      "Crear clientes",
      "Ver pedidos",
      "Billetera virtual",
      "Múltiples unidades de medida en los productos"
    ],
    imagesUrls: [
      '/assets/Projects/shop-z/1.jpg',
      '/assets/Projects/shop-z/2.jpg',
      '/assets/Projects/shop-z/3.jpg',
      '/assets/Projects/shop-z/4.jpg',
    ]
  });
  
  const calculator = new Project({
    id: "calculator",
    title: "App de calculadora con hermosa UI",
    description: "Calculadora con una experiencia de usuario intuitiva para cálculos matemáticos básicos.",
    operatingSystems: [
      'Android',
      'iOS'
    ],
    technologiesUsed: [
      'Dart',
      'Flutter',
    ],
    mainFeatures: [
      "Realizar cálculos matemáticos básicos"
    ],
    imagesUrls: [
      '/assets/Projects/calculator/1.jpg',
    ]
  });
  
  const ticTacToe = new Project({
    id: "tic-tac-toe",
    title: "Juego Tic Tac Toe",
    description: "Juego Tic Tac Toe creado en Flutter como un pequeño reto personal.",
    operatingSystems: [
      'Android',
      'iOS',
      'Windows',
      'Web',
      'Linux',
      'MacOS'
    ],
    technologiesUsed: [
      'Dart',
      'Flutter',
    ],
    mainFeatures: [
      "Juego para 2 jugadores local",
      "Trazado de línea con CustomPaint",
      "Agregar tiempo por turno",
      "Algoritmo de match de 9 celdas",
      "Efectos de audio"
    ],
    imagesUrls: [
      '/assets/Projects/tic-tac-toe/1.png',
      '/assets/Projects/tic-tac-toe/2.png',
      '/assets/Projects/tic-tac-toe/3.png',
    ]
  });
  