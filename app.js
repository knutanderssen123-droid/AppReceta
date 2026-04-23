// ==================== BASE DE DATOS DE RECETAS ====================
const RECIPES_DB = [
    {
        id: 1,
        name: "Tortilla de patatas",
        emoji: "🥘",
        ingredients: ["patata", "huevos", "cebolla", "aceite", "sal"],
        categories: ["economica", "ninos", "vegetariana"],
        time: "30 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Pelar y cortar las patatas en rodajas finas",
            "Picar la cebolla en juliana",
            "Freír patatas y cebolla a fuego medio hasta que estén tiernas",
            "Batir los huevos con sal en un bol grande",
            "Mezclar las patatas y cebolla con los huevos",
            "Cuajar en la sartén por ambos lados",
            "Dejar reposar 5 minutos antes de servir"
        ],
        tip: "El secreto está en no cuajar demasiado los huevos, que quede jugosa por dentro"
    },
    {
        id: 2,
        name: "Pasta carbonara",
        emoji: "🍝",
        ingredients: ["pasta", "huevos", "queso", "jamón", "pimienta", "sal"],
        categories: ["rapida", "ninos"],
        time: "20 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Cocer la pasta en agua con sal según instrucciones",
            "Cortar el jamón o bacon en taquitos y dorar en sartén",
            "Batir los huevos con queso rallado y pimienta",
            "Escurrir la pasta reservando un poco de agua",
            "Fuera del fuego, mezclar pasta con huevo y queso",
            "Añadir el jamón y remover bien",
            "Servir inmediatamente con más queso por encima"
        ],
        tip: "Nunca añadas el huevo con el fuego encendido o se cuajará"
    },
    {
        id: 3,
        name: "Ensalada César",
        emoji: "🥗",
        ingredients: ["pollo", "lechuga", "queso", "pan", "limón", "ajo"],
        categories: ["saludable", "rapida"],
        time: "15 min",
        servings: 2,
        difficulty: "Fácil",
        steps: [
            "Cortar el pollo en tiras y sazonar con sal y pimienta",
            "Cocinar el pollo a la plancha hasta dorarlo",
            "Cortar el pan en cubos y tostar en sartén con ajo",
            "Lavar y trocear la lechuga",
            "Preparar la salsa: mezclar ajo, limón, aceite y queso",
            "Montar la ensalada con todos los ingredientes",
            "Servir con queso rallado y los crutones por encima"
        ],
        tip: "El pollo queda más jugoso si lo marinas 30 min antes con limón"
    },
    {
        id: 4,
        name: "Arroz con pollo",
        emoji: "🍗",
        ingredients: ["arroz", "pollo", "cebolla", "pimiento", "tomate", "ajo", "aceite", "sal"],
        categories: ["economica", "ninos"],
        time: "45 min",
        servings: 4,
        difficulty: "Media",
        steps: [
            "Cortar el pollo en trozos y sazonar con sal",
            "Dorar el pollo en una cazuela con aceite",
            "Retirar el pollo y sofreír cebolla, ajo y pimiento",
            "Añadir el tomate rallado y cocinar 5 minutos",
            "Incorporar el arroz y remover 1 minuto",
            "Añadir el caldo (doble de agua que de arroz)",
            "Devolver el pollo y cocinar 20 minutos a fuego bajo",
            "Dejar reposar tapado 5 minutos antes de servir"
        ],
        tip: "No remuevas el arroz una vez añadido el caldo"
    },
    {
        id: 5,
        name: "Crepes de chocolate",
        emoji: "🍫",
        ingredients: ["harina", "huevos", "leche", "mantequilla", "chocolate"],
        categories: ["golosa", "ninos"],
        time: "20 min",
        servings: 6,
        difficulty: "Fácil",
        steps: [
            "Mezclar harina, huevos, leche y una pizca de sal",
            "Derretir un poco de mantequilla y añadir a la mezcla",
            "Dejar reposar la masa 15 minutos",
            "Calentar una sartén antiadherente con mantequilla",
            "Verter un cucharón de masa y extender girando la sartén",
            "Cocinar por ambos lados hasta dorar",
            "Derretir el chocolate y rellenar las crepes",
            "Servir enrolladas o dobladas con chocolate por encima"
        ],
        tip: "La masa queda mejor si la dejas reposar en la nevera 1 hora"
    },
    {
        id: 6,
        name: "Gazpacho andaluz",
        emoji: "🍅",
        ingredients: ["tomate", "pimiento", "pepino", "ajo", "pan", "aceite", "vinagre", "sal"],
        categories: ["saludable", "rapida", "vegetariana", "economica"],
        time: "15 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Lavar y trocear tomates, pimiento y pepino",
            "Remojar el pan duro en agua",
            "Poner todas las verduras en la batidora con el ajo",
            "Añadir el pan escurrido, aceite, vinagre y sal",
            "Triturar todo hasta conseguir una textura fina",
            "Probar y rectificar de sal y vinagre",
            "Enfriar en la nevera al menos 1 hora antes de servir"
        ],
        tip: "Mejor con tomates muy maduros y de temporada"
    },
    {
        id: 7,
        name: "Nuggets caseros",
        emoji: "🍗",
        ingredients: ["pollo", "huevos", "pan", "harina", "sal"],
        categories: ["ninos", "rapida", "economica"],
        time: "25 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Cortar la pechuga de pollo en trozos medianos",
            "Preparar tres platos: harina, huevo batido, pan rallado",
            "Pasar cada trozo por harina, luego huevo, luego pan rallado",
            "Presionar bien el pan rallado para que se adhiera",
            "Freír en aceite caliente hasta dorar (3-4 min por lado)",
            "Escurrir sobre papel absorbente",
            "Servir con ketchup o salsa favorita"
        ],
        tip: "Al horno a 200°C son más saludables y quedan crujientes igual"
    },
    {
        id: 8,
        name: "Hummus",
        emoji: "🧆",
        ingredients: ["garbanzo", "ajo", "limón", "aceite", "sal"],
        categories: ["saludable", "vegetariana", "rapida", "fiesta"],
        time: "10 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Escurrir y enjuagar los garbanzos cocidos",
            "Poner en la batidora con ajo, zumo de limón y sal",
            "Añadir un buen chorro de aceite de oliva",
            "Triturar hasta conseguir una crema suave",
            "Si queda espeso, añadir un poco de agua fría",
            "Servir en un plato con aceite por encima y pimentón"
        ],
        tip: "Queda más cremoso si quitas la piel de los garbanzos"
    },
    {
        id: 9,
        name: "Banana pancakes",
        emoji: "🥞",
        ingredients: ["plátano", "huevos", "harina", "leche", "mantequilla"],
        categories: ["ninos", "rapida", "golosa"],
        time: "15 min",
        servings: 2,
        difficulty: "Fácil",
        steps: [
            "Machacar el plátano con un tenedor",
            "Añadir huevos, harina, leche y mezclar bien",
            "Calentar sartén con un poco de mantequilla",
            "Verter pequeñas porciones de masa",
            "Cocinar 2 minutos por cada lado a fuego medio-bajo",
            "Servir con miel, frutas o sirope de arce"
        ],
        tip: "El plátano cuanto más maduro, más dulce queda sin añadir azúcar"
    },
    {
        id: 10,
        name: "Pizza casera rápida",
        emoji: "🍕",
        ingredients: ["harina", "tomate", "queso", "jamón", "aceite", "sal"],
        categories: ["ninos", "fiesta", "rapida"],
        time: "30 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Mezclar harina con agua tibia, sal, aceite y levadura",
            "Amasar hasta obtener una masa suave y dejar reposar 15 min",
            "Estirar la masa sobre bandeja de horno engrasada",
            "Cubrir con salsa de tomate",
            "Añadir queso rallado abundante",
            "Poner el jamón y cualquier ingrediente extra",
            "Hornear a 220°C durante 12-15 minutos",
            "Cortar y servir bien caliente"
        ],
        tip: "Para masa más crujiente, precalienta la bandeja en el horno"
    },
    {
        id: 11,
        name: "Crema de zanahoria",
        emoji: "🥕",
        ingredients: ["zanahoria", "patata", "cebolla", "ajo", "aceite", "sal"],
        categories: ["saludable", "economica", "vegetariana", "ninos"],
        time: "30 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Pelar y trocear zanahorias, patatas y cebolla",
            "Sofreír cebolla y ajo en aceite hasta transparentar",
            "Añadir zanahoria y patata, cubrir con agua",
            "Cocer a fuego medio 20 minutos hasta que estén tiernas",
            "Triturar con batidora hasta obtener crema fina",
            "Ajustar sal y añadir un chorrito de aceite"
        ],
        tip: "Un toque de jengibre le da un sabor increíble"
    },
    {
        id: 12,
        name: "Quesadillas",
        emoji: "🌮",
        ingredients: ["tortilla", "queso", "pollo", "pimiento", "cebolla"],
        categories: ["rapida", "ninos", "fiesta"],
        time: "15 min",
        servings: 2,
        difficulty: "Fácil",
        steps: [
            "Cortar pollo cocido, pimiento y cebolla en tiras finas",
            "Calentar una sartén grande a fuego medio",
            "Colocar una tortilla y cubrir la mitad con queso",
            "Añadir el pollo y las verduras sobre el queso",
            "Doblar la tortilla por la mitad y presionar",
            "Cocinar 2-3 minutos por cada lado hasta dorar",
            "Cortar en triángulos y servir con guacamole"
        ],
        tip: "Mezcla varios tipos de queso para más sabor"
    },
    {
        id: 13,
        name: "Brownie de chocolate",
        emoji: "🍫",
        ingredients: ["chocolate", "mantequilla", "huevos", "harina", "azúcar"],
        categories: ["golosa", "fiesta", "ninos"],
        time: "35 min",
        servings: 8,
        difficulty: "Fácil",
        steps: [
            "Precalentar el horno a 180°C",
            "Derretir chocolate con mantequilla al baño maría",
            "Batir huevos con azúcar hasta espumar",
            "Mezclar el chocolate derretido con los huevos",
            "Incorporar la harina tamizada con movimientos suaves",
            "Verter en molde engrasado y forrado",
            "Hornear 20-25 minutos (que quede húmedo por dentro)",
            "Dejar enfriar antes de cortar en cuadrados"
        ],
        tip: "No hornees de más, el secreto del brownie es que quede jugoso"
    },
    {
        id: 14,
        name: "Revuelto de verduras",
        emoji: "🥬",
        ingredients: ["huevos", "pimiento", "cebolla", "calabacín", "tomate", "aceite", "sal"],
        categories: ["saludable", "rapida", "vegetariana", "economica"],
        time: "15 min",
        servings: 2,
        difficulty: "Fácil",
        steps: [
            "Cortar todas las verduras en dados pequeños",
            "Sofreír cebolla y pimiento en aceite caliente",
            "Añadir calabacín y tomate, cocinar 5 minutos",
            "Batir los huevos con sal y pimienta",
            "Verter sobre las verduras y remover suavemente",
            "Cocinar hasta que el huevo cuaje pero quede jugoso"
        ],
        tip: "Añade un poco de queso rallado al final para extra sabor"
    },
    {
        id: 15,
        name: "Batido energético",
        emoji: "🥤",
        ingredients: ["plátano", "leche", "avena", "miel"],
        categories: ["saludable", "rapida", "ninos"],
        time: "5 min",
        servings: 1,
        difficulty: "Fácil",
        steps: [
            "Pelar el plátano y trocearlo",
            "Poner en la batidora con leche fría",
            "Añadir las cucharadas de avena",
            "Agregar miel al gusto",
            "Triturar durante 1 minuto hasta que quede cremoso",
            "Servir inmediatamente bien frío"
        ],
        tip: "Congela el plátano la noche anterior para un batido tipo helado"
    },
    {
        id: 16,
        name: "Sopa de fideos",
        emoji: "🍜",
        ingredients: ["fideos", "pollo", "zanahoria", "patata", "cebolla", "ajo", "sal"],
        categories: ["saludable", "economica", "ninos"],
        time: "40 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Poner el pollo en una olla grande con agua fría",
            "Llevar a ebullición y espumar",
            "Añadir zanahoria, patata, cebolla y ajo enteros",
            "Cocinar a fuego medio durante 30 minutos",
            "Retirar el pollo y desmenuzar",
            "Colar el caldo y devolver a la olla",
            "Añadir los fideos y cocinar 5 minutos",
            "Servir con el pollo desmenuzado y perejil"
        ],
        tip: "El caldo casero es mucho mejor que el de pastilla"
    },
    {
        id: 17,
        name: "Tostadas de aguacate",
        emoji: "🥑",
        ingredients: ["pan", "aguacate", "tomate", "limón", "sal", "huevos"],
        categories: ["saludable", "rapida", "vegetariana"],
        time: "10 min",
        servings: 2,
        difficulty: "Fácil",
        steps: [
            "Tostar las rebanadas de pan",
            "Machacar el aguacate con un tenedor",
            "Añadir zumo de limón y sal al aguacate",
            "Untar generosamente sobre las tostadas",
            "Cortar tomate en rodajas y colocar encima",
            "Opcional: añadir un huevo pochado o frito"
        ],
        tip: "Un poquito de chile en escamas lo hace espectacular"
    },
    {
        id: 18,
        name: "Pollo al limón",
        emoji: "🍋",
        ingredients: ["pollo", "limón", "ajo", "aceite", "patata", "sal"],
        categories: ["saludable", "economica"],
        time: "1 hora",
        servings: 4,
        difficulty: "Media",
        steps: [
            "Precalentar horno a 200°C",
            "Sazonar el pollo con sal, pimienta y ajo picado",
            "Exprimir limón por encima y colocar las cáscaras alrededor",
            "Pelar y cortar patatas en gajos gruesos",
            "Colocar todo en bandeja de horno con aceite",
            "Hornear 45 minutos removiendo las patatas a mitad",
            "Comprobar que el pollo está dorado y jugoso"
        ],
        tip: "Riega el pollo con sus jugos cada 15 minutos para que quede brillante"
    },
    {
        id: 19,
        name: "Nachos con guacamole",
        emoji: "🌮",
        ingredients: ["nachos", "aguacate", "tomate", "cebolla", "limón", "queso", "sal"],
        categories: ["fiesta", "rapida", "golosa"],
        time: "15 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Preparar el guacamole: machacar aguacate con tenedor",
            "Añadir tomate picado fino, cebolla, limón y sal",
            "Colocar nachos en una bandeja de horno",
            "Cubrir con queso rallado abundante",
            "Gratinar 5 minutos a 200°C hasta fundir el queso",
            "Servir caliente con el guacamole al lado"
        ],
        tip: "Añade jalapeños si os gusta el picante"
    },
    {
        id: 20,
        name: "Galletas de avena",
        emoji: "🍪",
        ingredients: ["avena", "plátano", "chocolate", "mantequilla", "miel"],
        categories: ["golosa", "saludable", "ninos"],
        time: "25 min",
        servings: 12,
        difficulty: "Fácil",
        steps: [
            "Precalentar horno a 180°C",
            "Machacar el plátano y mezclar con mantequilla derretida",
            "Añadir avena, miel y trocitos de chocolate",
            "Mezclar todo hasta tener una masa homogénea",
            "Formar bolitas y aplastar sobre bandeja con papel",
            "Hornear 12-15 minutos hasta que estén doradas",
            "Dejar enfriar (se endurecen al enfriarse)"
        ],
        tip: "Sin azúcar añadido, el plátano y la miel dan toda la dulzura"
    },
    {
        id: 21,
        name: "Wrap de atún",
        emoji: "🌯",
        ingredients: ["tortilla", "atún", "lechuga", "tomate", "maíz", "mayonesa"],
        categories: ["rapida", "economica", "saludable"],
        time: "10 min",
        servings: 2,
        difficulty: "Fácil",
        steps: [
            "Escurrir bien el atún y mezclarlo con mayonesa",
            "Lavar y trocear la lechuga finamente",
            "Cortar el tomate en dados pequeños",
            "Colocar la tortilla y extender la mezcla de atún",
            "Añadir lechuga, tomate y maíz",
            "Enrollar bien apretado doblando los bordes",
            "Cortar por la mitad en diagonal para servir"
        ],
        tip: "Calienta la tortilla 10 segundos en microondas para que sea más flexible"
    },
    {
        id: 22,
        name: "Patatas bravas",
        emoji: "🥔",
        ingredients: ["patata", "tomate", "ajo", "pimentón", "aceite", "sal", "harina"],
        categories: ["fiesta", "economica", "vegetariana"],
        time: "35 min",
        servings: 4,
        difficulty: "Media",
        steps: [
            "Pelar y cortar las patatas en dados grandes",
            "Freír en aceite abundante hasta dorar bien",
            "Para la salsa: sofreír ajo picado en aceite",
            "Añadir pimentón (cuidado que no se queme) y tomate",
            "Cocinar la salsa 10 minutos y triturar",
            "Escurrir las patatas y colocar en fuente",
            "Cubrir con la salsa brava caliente"
        ],
        tip: "El secreto es freír las patatas dos veces: primero a 140°C y luego a 180°C"
    },
    {
        id: 23,
        name: "Smoothie bowl",
        emoji: "🥣",
        ingredients: ["plátano", "fresas", "leche", "avena", "miel"],
        categories: ["saludable", "rapida", "ninos", "vegetariana"],
        time: "10 min",
        servings: 1,
        difficulty: "Fácil",
        steps: [
            "Congelar plátano y fresas la noche anterior",
            "Triturar la fruta congelada con un poquito de leche",
            "La textura debe ser espesa como un helado",
            "Verter en un bol",
            "Decorar con avena, trozos de fruta fresca y miel",
            "Comer inmediatamente con cuchara"
        ],
        tip: "Cuanta menos leche uses, más espeso y tipo helado quedará"
    },
    {
        id: 24,
        name: "Macarrones con queso",
        emoji: "🧀",
        ingredients: ["pasta", "queso", "leche", "mantequilla", "harina", "sal"],
        categories: ["ninos", "golosa", "economica"],
        time: "25 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Cocer los macarrones en agua con sal y escurrir",
            "Derretir mantequilla en una sartén a fuego medio",
            "Añadir harina y remover 1 minuto (hacer un roux)",
            "Ir añadiendo leche poco a poco sin parar de remover",
            "Cuando espese, añadir queso rallado abundante",
            "Mezclar con los macarrones cocidos",
            "Servir con más queso rallado por encima"
        ],
        tip: "Mezcla queso cheddar con emmental para el mejor sabor"
    },
    {
        id: 25,
        name: "Bizcocho de yogur",
        emoji: "🍰",
        ingredients: ["yogur", "huevos", "harina", "azúcar", "aceite", "limón"],
        categories: ["golosa", "ninos", "fiesta"],
        time: "45 min",
        servings: 8,
        difficulty: "Fácil",
        steps: [
            "Precalentar horno a 180°C",
            "Usar el vasito de yogur como medida para todo",
            "Mezclar yogur, 2 vasos de azúcar y 3 huevos",
            "Añadir 3 vasos de harina y 1 vaso de aceite",
            "Agregar ralladura de limón y una pizca de sal",
            "Verter en molde engrasado y enharinado",
            "Hornear 35-40 minutos hasta que salga limpio el palillo",
            "Dejar enfriar en el molde 10 minutos antes de desmoldar"
        ],
        tip: "El truco del vasito del yogur como medida nunca falla"
    },
    {
        id: 26,
        name: "Croquetas de jamón",
        emoji: "🥘",
        ingredients: ["jamón", "leche", "harina", "mantequilla", "huevos", "pan", "cebolla"],
        categories: ["fiesta", "golosa", "ninos"],
        time: "1 hora",
        servings: 20,
        difficulty: "Difícil",
        steps: [
            "Picar la cebolla muy fina y el jamón en taquitos",
            "Derretir mantequilla y sofreír la cebolla",
            "Añadir el jamón y cocinar 2 minutos",
            "Añadir harina y remover bien (roux)",
            "Ir añadiendo leche caliente poco a poco sin parar de remover",
            "Cocinar la bechamel 10 minutos a fuego bajo",
            "Extender en bandeja, cubrir con film y enfriar mínimo 4 horas",
            "Formar las croquetas, pasar por huevo y pan rallado",
            "Freír en aceite muy caliente hasta dorar"
        ],
        tip: "La masa fría es mucho más fácil de manejar - ¡paciencia!"
    },
    {
        id: 27,
        name: "Ensalada de pasta",
        emoji: "🥗",
        ingredients: ["pasta", "atún", "tomate", "maíz", "aceite", "sal"],
        categories: ["rapida", "saludable", "economica"],
        time: "20 min",
        servings: 4,
        difficulty: "Fácil",
        steps: [
            "Cocer la pasta, escurrir y enfriar con agua fría",
            "Cortar tomates en dados pequeños",
            "Escurrir atún y maíz",
            "Mezclar todo en un bol grande",
            "Aliñar con aceite de oliva, sal y vinagre",
            "Refrigerar al menos 30 minutos antes de servir"
        ],
        tip: "Puedes añadir aceitunas, pepino o cualquier verdura que tengas"
    },
    {
        id: 28,
        name: "Sandwich club",
        emoji: "🥪",
        ingredients: ["pan", "pollo", "lechuga", "tomate", "queso", "huevos", "mayonesa"],
        categories: ["rapida", "ninos"],
        time: "15 min",
        servings: 2,
        difficulty: "Fácil",
        steps: [
            "Tostar 3 rebanadas de pan por sandwich",
            "Cocinar el pollo a la plancha y cortar en lonchas",
            "Hacer un huevo frito o tortilla francesa",
            "Untar mayonesa en las tostadas",
            "Montar: pan, lechuga, pollo, pan, tomate, queso, huevo, pan",
            "Clavar palillos en las esquinas para sujetar",
            "Cortar en triángulos y servir"
        ],
        tip: "El pan de molde integral le da un toque más sabroso"
    },
    {
        id: 29,
        name: "Flan casero",
        emoji: "🍮",
        ingredients: ["huevos", "leche", "azúcar", "vainilla"],
        categories: ["golosa", "ninos"],
        time: "1 hora",
        servings: 6,
        difficulty: "Media",
        steps: [
            "Hacer caramelo: calentar azúcar con unas gotas de agua",
            "Cuando esté dorado, verter en la flanera y repartir",
            "Calentar leche con vainilla (sin hervir)",
            "Batir huevos con azúcar sin que haga espuma",
            "Mezclar la leche templada con los huevos",
            "Colar la mezcla y verter sobre el caramelo",
            "Cocinar al baño maría en el horno a 160°C durante 45 min",
            "Dejar enfriar completamente antes de desmoldar"
        ],
        tip: "Debe temblar como gelatina cuando esté listo, no líquido"
    },
    {
        id: 30,
        name: "Lentejas caseras",
        emoji: "🍲",
        ingredients: ["lentejas", "patata", "zanahoria", "cebolla", "ajo", "pimiento", "tomate", "chorizo", "sal"],
        categories: ["economica", "saludable"],
        time: "45 min",
        servings: 6,
        difficulty: "Fácil",
        steps: [
            "Poner las lentejas en una olla grande con agua fría",
            "Añadir patata, zanahoria troceadas y la cebolla entera",
            "Agregar ajo, pimiento y tomate troceado",
            "Añadir el chorizo cortado en rodajas",
            "Llevar a ebullición y luego bajar el fuego",
            "Cocinar a fuego lento 35-40 minutos",
            "Ajustar de sal al final",
            "Servir calientes con un chorrito de aceite"
        ],
        tip: "Si añades el agua fría desde el principio, las lentejas quedan más tiernas"
    }
];

// ==================== APP CLASS ====================
class FamilyRecipesApp {
    constructor() {
        this.members = JSON.parse(localStorage.getItem('fr_members')) || [];
        this.currentUser = null;
        this.selectedIngredients = [];
        this.currentFilter = 'all';
        this.favorites = JSON.parse(localStorage.getItem('fr_favorites')) || {};
        this.myRecipes = JSON.parse(localStorage.getItem('fr_myrecipes')) || [];
        this.selectedMemberEmoji = '👨';
        this.selectedFoodEmoji = '🍳';
        this.createCategories = [];
        this.createDifficulty = 'Fácil';
        this.currentScreen = 'screen-profile';
        this.previousScreen = 'screen-main';
        this.currentDetailRecipe = null;
        this.previousTab = 'ingredients';

        this.init();
    }

    init() {
        this.renderMembers();
        this.updateCategoryCounts();

        // Si solo hay un miembro, auto-login
        if (this.members.length === 1) {
            // Still show profile screen
        }
    }

    // ==================== NAVIGATION ====================
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
        window.scrollTo(0, 0);
    }

    goToProfile() {
        this.showScreen('screen-profile');
    }

    goBack() {
        if (this.currentScreen === 'screen-detail') {
            this.showScreen('screen-main');
            // Restore the previously active tab
            this.switchTab(this.previousTab);
        } else if (this.currentScreen === 'screen-create') {
            this.showScreen('screen-main');
            this.switchTab('myrecipes');
        }
    }

    switchTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

        document.getElementById(`tab-${tabName}`).classList.add('active');
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        this.previousTab = tabName;

        if (tabName === 'favorites') this.renderFavorites();
        if (tabName === 'myrecipes') this.renderMyRecipes();
    }

    // ==================== MEMBERS ====================
    renderMembers() {
        const container = document.getElementById('family-members');
        container.innerHTML = this.members.map((m, i) => `
            <div class="member-card" onclick="app.selectMember(${i})">
                <button class="member-delete" onclick="event.stopPropagation(); app.deleteMember(${i})">✕</button>
                <span class="member-emoji">${m.emoji}</span>
                <span class="member-name">${m.name}</span>
            </div>
        `).join('');
    }

    showAddMember() {
        document.getElementById('modal-add-member').classList.remove('hidden');
        document.getElementById('input-member-name').focus();
        this.selectedMemberEmoji = '👨';
        // Reset emoji selection
        document.querySelectorAll('.emoji-picker span').forEach(s => s.classList.remove('selected'));
        document.querySelector('.emoji-picker span').classList.add('selected');
    }

    hideAddMember() {
        document.getElementById('modal-add-member').classList.add('hidden');
        document.getElementById('input-member-name').value = '';
    }

    selectEmoji(emoji) {
        this.selectedMemberEmoji = emoji;
        document.querySelectorAll('.emoji-picker span').forEach(s => s.classList.remove('selected'));
        event.target.classList.add('selected');
    }

    addMember() {
        const name = document.getElementById('input-member-name').value.trim();
        if (!name) {
            this.showToast('⚠️ Escribe un nombre');
            return;
        }

        this.members.push({ name, emoji: this.selectedMemberEmoji });
        // Initialize favorites for this member
        if (!this.favorites[name]) {
            this.favorites[name] = [];
        }
        this.saveData();
        this.renderMembers();
        this.hideAddMember();
        this.showToast(`✅ ${name} se unió a la familia`);
    }

    deleteMember(index) {
        const name = this.members[index].name;
        if (confirm(`¿Eliminar a ${name}?`)) {
            this.members.splice(index, 1);
            delete this.favorites[name];
            this.saveData();
            this.renderMembers();
            this.showToast(`🗑️ ${name} eliminado`);
        }
    }

    selectMember(index) {
        this.currentUser = this.members[index];
        document.getElementById('current-user-emoji').textContent = this.currentUser.emoji;
        document.getElementById('current-user-name').textContent = this.currentUser.name;
        this.showScreen('screen-main');
        this.switchTab('ingredients');
        this.showToast(`¡Hola ${this.currentUser.name}! 👋`);
    }

    // ==================== INGREDIENTS ====================
    addIngredient() {
        const input = document.getElementById('input-ingredient');
        const value = input.value.trim().toLowerCase();

        if (!value) return;
        if (this.selectedIngredients.includes(value)) {
            this.showToast('⚠️ Ya lo tienes añadido');
            return;
        }

        this.selectedIngredients.push(value);
        input.value = '';
        this.updateIngredientsUI();
    }

    addQuickIngredient(name) {
        const lower = name.toLowerCase();
        if (this.selectedIngredients.includes(lower)) {
            // Remove it
            this.selectedIngredients = this.selectedIngredients.filter(i => i !== lower);
        } else {
            this.selectedIngredients.push(lower);
        }
        this.updateIngredientsUI();
    }

    removeIngredient(name) {
        this.selectedIngredients = this.selectedIngredients.filter(i => i !== name);
        this.updateIngredientsUI();
    }

    clearIngredients() {
        this.selectedIngredients = [];
        this.updateIngredientsUI();
        document.getElementById('results-section').classList.add('hidden');
    }

    updateIngredientsUI() {
        const container = document.getElementById('selected-ingredients');
        const list = document.getElementById('ingredients-list');
        const filterSection = document.getElementById('filter-section');
        const searchBtn = document.getElementById('btn-search');

        if (this.selectedIngredients.length > 0) {
            container.classList.remove('hidden');
            filterSection.classList.remove('hidden');
            searchBtn.classList.remove('hidden');

            list.innerHTML = this.selectedIngredients.map(i => `
                <span class="chip-ingredient">
                    ${i}
                    <button onclick="app.removeIngredient('${i}')">✕</button>
                </span>
            `).join('');
        } else {
            container.classList.add('hidden');
            filterSection.classList.add('hidden');
            searchBtn.classList.add('hidden');
        }

        // Update quick buttons
        document.querySelectorAll('.chip-quick').forEach(btn => {
            const name = btn.textContent.trim().split(' ').pop().toLowerCase();
            if (this.selectedIngredients.includes(name)) {
                btn.classList.add('added');
            } else {
                btn.classList.remove('added');
            }
        });
    }

    // ==================== FILTERS ====================
    setFilter(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.chip-filter').forEach(c => c.classList.remove('active'));
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    }

    // ==================== SEARCH ====================
    searchRecipes() {
        const allRecipes = [...RECIPES_DB, ...this.myRecipes];

        let results = allRecipes.map(recipe => {
            const recipeIngLower = recipe.ingredients.map(i => i.toLowerCase());
            const matched = this.selectedIngredients.filter(si =>
                recipeIngLower.some(ri => ri.includes(si) || si.includes(ri))
            );
            const matchPercent = Math.round((matched.length / recipe.ingredients.length) * 100);
            return { ...recipe, matched: matched.length, matchPercent, totalIngredients: recipe.ingredients.length };
        });

        // Filter by minimum match (at least 1 ingredient)
        results = results.filter(r => r.matched > 0);

        // Filter by category
        if (this.currentFilter !== 'all') {
            results = results.filter(r => r.categories && r.categories.includes(this.currentFilter));
        }

        // Sort by match percentage
        results.sort((a, b) => b.matchPercent - a.matchPercent);

        this.showResults(results, 'results');
    }

    showResults(recipes, target) {
        const section = document.getElementById(`${target}-section`);
        const list = document.getElementById(`${target}-list`);
        const title = document.getElementById(`${target}-title`);

        section.classList.remove('hidden');

        if (recipes.length === 0) {
            list.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <span class="empty-icon">🔍</span>
                    <p>No se encontraron recetas</p>
                    <p class="empty-hint">Prueba con otros ingredientes o categoría</p>
                </div>
            `;
            title.textContent = 'Sin resultados 😕';
            return;
        }

        title.textContent = `${recipes.length} receta${recipes.length !== 1 ? 's' : ''} encontrada${recipes.length !== 1 ? 's' : ''} 🎉`;

        list.innerHTML = recipes.map(r => this.renderRecipeCard(r)).join('');

        // Scroll to results
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    renderRecipeCard(recipe) {
        const isFav = this.isFavorite(recipe.id || recipe.customId);
        const favEmoji = isFav ? '❤️' : '🤍';
        const catTags = (recipe.categories || []).map(c => {
            const labels = {
                saludable: '🥗 Saludable', rapida: '⚡ Rápida', ninos: '👶 Niños',
                golosa: '🍫 Golosa', economica: '💰 Económica', vegetariana: '🌿 Veggie',
                fiesta: '🎉 Fiesta'
            };
            return `<span class="tag">${labels[c] || c}</span>`;
        }).join('');

        const matchBadge = recipe.matchPercent !== undefined
            ? `<span class="recipe-match">${recipe.matchPercent}% match</span>`
            : '';

        const recipeId = recipe.id || recipe.customId;
        const isCustom = !!recipe.customId;

        return `
            <div class="recipe-card" onclick="app.viewRecipe('${recipeId}', ${isCustom})">
                <div class="recipe-card-header">
                    <span class="recipe-emoji">${recipe.emoji}</span>
                    ${matchBadge}
                </div>
                <h4 class="recipe-card-title">${recipe.name}</h4>
                <div class="recipe-card-tags">${catTags}</div>
                <div class="recipe-card-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>👥 ${recipe.servings} pers.</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
                <div class="recipe-card-actions">
                    <button class="btn-fav-card" onclick="event.stopPropagation(); app.toggleFavorite('${recipeId}', ${isCustom})">${favEmoji}</button>
                    <button class="btn-view">Ver receta →</button>
                </div>
            </div>
        `;
    }

    // ==================== RECIPE DETAIL ====================
    viewRecipe(id, isCustom) {
        let recipe;
        if (isCustom) {
            recipe = this.myRecipes.find(r => r.customId === id);
        } else {
            recipe = RECIPES_DB.find(r => r.id === parseInt(id));
        }

        if (!recipe) return;

        this.currentDetailRecipe = recipe;
        const recipeId = recipe.id || recipe.customId;
        const isFav = this.isFavorite(recipeId);

        document.getElementById('btn-fav-detail').textContent = isFav ? '❤️' : '🤍';

        const catLabels = {
            saludable: '🥗 Saludable', rapida: '⚡ Rápida', ninos: '👶 Para niños',
            golosa: '🍫 Golosa', economica: '💰 Económica', vegetariana: '🌿 Vegetariana',
            fiesta: '🎉 Para fiestas'
        };

        const tagsHtml = (recipe.categories || []).map(c =>
            `<span class="detail-tag">${catLabels[c] || c}</span>`
        ).join('');

        const ingredientsHtml = recipe.ingredients.map(i =>
            `<li>${i.charAt(0).toUpperCase() + i.slice(1)}</li>`
        ).join('');

        const stepsHtml = recipe.steps.map(s => `<li>${s}</li>`).join('');

        const isCustomRecipe = !!recipe.customId;
        const deleteBtn = isCustomRecipe
            ? `<button class="btn-delete-recipe" onclick="app.deleteMyRecipe('${recipe.customId}')">🗑️ Eliminar receta</button>`
            : '';

        const authorHtml = recipe.author
            ? `<div class="detail-author">Creada por ${recipe.author} 👨‍🍳</div>`
            : '';

        document.getElementById('recipe-detail').innerHTML = `
            <div class="detail-hero">
                <span class="detail-hero-emoji">${recipe.emoji}</span>
                <h2>${recipe.name}</h2>
                <div class="detail-meta">
                    <div class="detail-meta-item">
                        <span class="detail-meta-value">⏱️ ${recipe.time}</span>
                        <span class="detail-meta-label">Tiempo</span>
                    </div>
                    <div class="detail-meta-item">
                        <span class="detail-meta-value">👥 ${recipe.servings}</span>
                        <span class="detail-meta-label">Personas</span>
                    </div>
                    <div class="detail-meta-item">
                        <span class="detail-meta-value">📊 ${recipe.difficulty}</span>
                        <span class="detail-meta-label">Dificultad</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h3>🏷️ Categorías</h3>
                <div class="detail-tags">${tagsHtml}</div>
            </div>

            <div class="detail-section">
                <h3>🛒 Ingredientes</h3>
                <ul class="detail-ingredients">${ingredientsHtml}</ul>
            </div>

            <div class="detail-section">
                <h3>👨‍🍳 Preparación</h3>
                <ol class="detail-steps">${stepsHtml}</ol>
            </div>

            ${recipe.tip ? `
            <div class="detail-section">
                <h3>💡 Consejo</h3>
                <div class="detail-tip">${recipe.tip}</div>
            </div>
            ` : ''}

            ${authorHtml}

            <div style="text-align: center; margin-top: 20px;">
                ${deleteBtn}
            </div>
        `;

        this.showScreen('screen-detail');
    }

    // ==================== FAVORITES ====================
    isFavorite(recipeId) {
        if (!this.currentUser) return false;
        const userFavs = this.favorites[this.currentUser.name] || [];
        return userFavs.includes(String(recipeId));
    }

    toggleFavorite(recipeId, isCustom) {
        if (!this.currentUser) return;

        const userName = this.currentUser.name;
        if (!this.favorites[userName]) this.favorites[userName] = [];

        const id = String(recipeId);
        const index = this.favorites[userName].indexOf(id);

        if (index > -1) {
            this.favorites[userName].splice(index, 1);
            this.showToast('💔 Eliminado de favoritos');
        } else {
            this.favorites[userName].push(id);
            this.showToast('❤️ Añadido a favoritos');
        }

        this.saveData();

        // Re-render current view
        if (this.previousTab === 'favorites') {
            this.renderFavorites();
        }

        // Update any visible cards
        this.refreshVisibleCards();
    }

    toggleFavoriteDetail() {
        if (!this.currentDetailRecipe) return;
        const id = this.currentDetailRecipe.id || this.currentDetailRecipe.customId;
        const isCustom = !!this.currentDetailRecipe.customId;
        this.toggleFavorite(id, isCustom);

        const isFav = this.isFavorite(id);
        document.getElementById('btn-fav-detail').textContent = isFav ? '❤️' : '🤍';
    }

    renderFavorites() {
        if (!this.currentUser) return;

        const userFavs = this.favorites[this.currentUser.name] || [];
        const container = document.getElementById('favorites-list');
        const empty = document.getElementById('favorites-empty');

        if (userFavs.length === 0) {
            empty.classList.remove('hidden');
            container.innerHTML = '';
            return;
        }

        empty.classList.add('hidden');

        const allRecipes = [...RECIPES_DB, ...this.myRecipes];
        const favRecipes = userFavs.map(id => {
            return allRecipes.find(r => String(r.id) === id || String(r.customId) === id);
        }).filter(Boolean);

        container.innerHTML = favRecipes.map(r => this.renderRecipeCard(r)).join('');
    }

    refreshVisibleCards() {
        // Simple approach: refresh category results if visible
        const catResults = document.getElementById('category-results');
        if (!catResults.classList.contains('hidden')) {
            // It's showing, we just let it be
        }
    }

    // ==================== CATEGORIES ====================
    updateCategoryCounts() {
        const allRecipes = [...RECIPES_DB, ...this.myRecipes];
        const categories = ['saludable', 'rapida', 'ninos', 'golosa', 'economica', 'vegetariana', 'fiesta'];

        categories.forEach(cat => {
            const count = allRecipes.filter(r => r.categories && r.categories.includes(cat)).length;
            const el = document.getElementById(`count-${cat}`);
            if (el) el.textContent = `${count} recetas`;
        });

        const allEl = document.getElementById('count-all');
        if (allEl) allEl.textContent = `${allRecipes.length} recetas`;
    }

    browseCategory(category) {
        const allRecipes = [...RECIPES_DB, ...this.myRecipes];
        let results;

        if (category === 'all') {
            results = allRecipes;
        } else {
            results = allRecipes.filter(r => r.categories && r.categories.includes(category));
        }

        const catLabels = {
            all: '🍽️ Todas las recetas',
            saludable: '🥗 Recetas Saludables',
            rapida: '⚡ Recetas Rápidas',
            ninos: '👶 Recetas para Niños',
            golosa: '🍫 Recetas Golosas',
            economica: '💰 Recetas Económicas',
            vegetariana: '🌿 Recetas Vegetarianas',
            fiesta: '🎉 Recetas para Fiestas'
        };

        const section = document.getElementById('category-results');
        const list = document.getElementById('category-results-list');
        const title = document.getElementById('category-results-title');

        section.classList.remove('hidden');
        title.textContent = `${catLabels[category]} (${results.length})`;
        list.innerHTML = results.map(r => this.renderRecipeCard(r)).join('');

        section.scrollIntoView({ behavior: 'smooth' });
    }

    // ==================== MY RECIPES ====================
    showCreateRecipe() {
        // Reset form
        document.getElementById('create-name').value = '';
        document.getElementById('create-ingredients').value = '';
        document.getElementById('create-steps').value = '';
        document.getElementById('create-tip').value = '';
        document.getElementById('create-time').value = '30 min';
        document.getElementById('create-servings').value = '4';
        this.selectedFoodEmoji = '🍳';
        this.createCategories = [];
        this.createDifficulty = 'Fácil';

        // Reset UI
        document.querySelectorAll('.food-emoji').forEach(e => e.classList.remove('selected'));
        document.querySelector('.food-emoji').classList.add('selected');
        document.querySelectorAll('.chip-filter-create').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.diff-btn').forEach(d => d.classList.remove('selected'));
        document.querySelector('[data-diff="Fácil"]').classList.add('selected');

        this.showScreen('screen-create');
    }

    selectFoodEmoji(emoji) {
        this.selectedFoodEmoji = emoji;
        document.querySelectorAll('.food-emoji').forEach(e => e.classList.remove('selected'));
        event.target.classList.add('selected');
    }

    toggleCreateCat(cat) {
        const index = this.createCategories.indexOf(cat);
        if (index > -1) {
            this.createCategories.splice(index, 1);
        } else {
            this.createCategories.push(cat);
        }
        document.querySelectorAll('.chip-filter-create').forEach(c => {
            c.classList.toggle('active', this.createCategories.includes(c.dataset.cat));
        });
    }

    setDifficulty(diff) {
        this.createDifficulty = diff;
        document.querySelectorAll('.diff-btn').forEach(d => {
            d.classList.toggle('selected', d.dataset.diff === diff);
        });
    }

    saveRecipe() {
        const name = document.getElementById('create-name').value.trim();
        const ingredientsRaw = document.getElementById('create-ingredients').value.trim();
        const stepsRaw = document.getElementById('create-steps').value.trim();
        const tip = document.getElementById('create-tip').value.trim();
        const time = document.getElementById('create-time').value;
        const servings = parseInt(document.getElementById('create-servings').value);

        if (!name) {
            this.showToast('⚠️ Escribe un nombre para la receta');
            return;
        }
        if (!ingredientsRaw) {
            this.showToast('⚠️ Añade al menos un ingrediente');
            return;
        }
        if (!stepsRaw) {
            this.showToast('⚠️ Añade al menos un paso');
            return;
        }

        const ingredients = ingredientsRaw.split('\n').map(i => i.trim()).filter(i => i);
        const steps = stepsRaw.split('\n').map(s => s.trim()).filter(s => s);

        const recipe = {
            customId: 'custom_' + Date.now(),
            name,
            emoji: this.selectedFoodEmoji,
            ingredients,
            categories: this.createCategories,
            time,
            servings,
            difficulty: this.createDifficulty,
            steps,
            tip: tip || null,
            author: this.currentUser ? this.currentUser.name : 'Familia'
        };

        this.myRecipes.push(recipe);
        this.saveData();
        this.updateCategoryCounts();
        this.showToast('✅ ¡Receta guardada!');
        this.showScreen('screen-main');
        this.switchTab('myrecipes');
    }

    deleteMyRecipe(customId) {
        if (!confirm('¿Seguro que quieres eliminar esta receta?')) return;

        this.myRecipes = this.myRecipes.filter(r => r.customId !== customId);

        // Remove from all favorites
        Object.keys(this.favorites).forEach(user => {
            this.favorites[user] = this.favorites[user].filter(id => id !== customId);
        });

        this.saveData();
        this.updateCategoryCounts();
        this.showToast('🗑️ Receta eliminada');
        this.showScreen('screen-main');
        this.switchTab('myrecipes');
    }

    renderMyRecipes() {
        const container = document.getElementById('myrecipes-list');
        const empty = document.getElementById('myrecipes-empty');

        if (this.myRecipes.length === 0) {
            empty.classList.remove('hidden');
            container.innerHTML = '';
            return;
        }

        empty.classList.add('hidden');
        container.innerHTML = this.myRecipes.map(r => this.renderRecipeCard(r)).join('');
    }

    // ==================== UTILITIES ====================
    saveData() {
        localStorage.setItem('fr_members', JSON.stringify(this.members));
        localStorage.setItem('fr_favorites', JSON.stringify(this.favorites));
        localStorage.setItem('fr_myrecipes', JSON.stringify(this.myRecipes));
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.remove('hidden');

        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            toast.classList.add('hidden');
        }, 2500);
    }
}

// ==================== INIT ====================
const app = new FamilyRecipesApp();