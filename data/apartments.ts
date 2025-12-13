import { Apartment } from '../types';

/**
 * БАЗА ДАННЫХ КВАРТИР (REALISTIC UPDATE 2025)
 * Цены скорректированы в соответствии с рынком (ЖК Софийский, Хамовники).
 * Диапазон цен: 1.8 - 3.0 млн руб/м².
 */

export const INITIAL_APARTMENTS: Apartment[] = [
  // 2 ЭТАЖ (Low Rise)
  {
    id: "apt-201",
    number: "11",
    floor: 2,
    rooms: 1,
    totalArea: 64.5,
    livingArea: 32.4,
    ceilingHeight: 3.2,
    pricePerSqm: 1851938,
    totalPrice: 119450000,
    status: "sold",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1541123437860-226e3d09eaf5?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1473669145942-78d120a1eb2f?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1594916801458-9a3b2a265e31?w=1200&q=75&output=webp&il", // Bedroom dark
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1587313885547-0b1a134764b8?w=1200&q=75&output=webp&il"  // Living room
    ],
    features: ["Окна во двор", "Гардеробная", "Тихая сторона"],
    tags: ["Компактная", "Инвестиция"],
    finishingOptions: { "white-box": true, "turnkey": false },
    windows: { orientation: "Восток", count: 3 },
    description: "Уютная резиденция для тех, кто ценит тишину центра. Идеальный вариант для пиедра-терра или инвестиции.",
    updatedAt: "2025-11-10"
  },
  {
    id: "apt-202",
    number: "12",
    floor: 2,
    rooms: 2,
    totalArea: 98.2,
    livingArea: 54.1,
    ceilingHeight: 3.2,
    pricePerSqm: 1854378,
    totalPrice: 182100000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1629828453472-8822998a12fd?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=75&output=webp&il",
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=75&output=webp&il"
    ],
    features: ["Мастер-спальня", "Постирочная", "Вид на переулок"],
    tags: ["Семейная", "Мастер-спальня"],
    finishingOptions: { "white-box": true, "turnkey": true },
    windows: { orientation: "Запад", count: 4 },
    description: "Просторная двухкомнатная квартира с классической планировкой. Окна выходят в тихий переулок, создавая атмосферу старой Москвы.",
    updatedAt: "2025-12-01"
  },

  // 3 ЭТАЖ
  {
    id: "apt-301",
    number: "14",
    floor: 3,
    rooms: 2,
    totalArea: 89.5,
    livingArea: 48.0,
    ceilingHeight: 3.2,
    pricePerSqm: 1875419,
    totalPrice: 167850000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1587582423116-41718292c733?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1492147395048-fd210c83a54a?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1579532536935-6453cd984956?w=1200&q=75&output=webp&il",
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=75&output=webp&il"
    ],
    features: ["Эркер", "Кухня-гостиная", "Два санузла"],
    tags: ["Эркер", "Светлая"],
    finishingOptions: { "white-box": true, "turnkey": true },
    windows: { orientation: "Юго-Запад", count: 5 },
    description: "Светлая квартира с историческим эркером. Пространство наполнено воздухом благодаря удачной ориентации окон.",
    updatedAt: "2025-12-05"
  },
  {
    id: "apt-302",
    number: "15",
    floor: 3,
    rooms: 3,
    totalArea: 125.4,
    livingArea: 78.5,
    ceilingHeight: 3.2,
    pricePerSqm: 1901913,
    totalPrice: 238500000,
    status: "booked",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1560185008-b033106af5c3?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=75&output=webp&il",
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=75&output=webp&il"
    ],
    features: ["Кабинет", "Гардеробная 12м", "Остров на кухне"],
    tags: ["Бронь", "Кабинет", "Большая кухня"],
    finishingOptions: { "white-box": false, "turnkey": true },
    windows: { orientation: "Восток-Запад", count: 6 },
    description: "Идеальная семейная планировка: спальни выходят во двор, гостиная — в переулок. Забронировано.",
    updatedAt: "2025-12-08"
  },

  // 4 ЭТАЖ
  {
    id: "apt-401",
    number: "18",
    floor: 4,
    rooms: 2,
    totalArea: 92.0,
    livingArea: 51.0,
    ceilingHeight: 3.3,
    pricePerSqm: 1911956,
    totalPrice: 175900000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1502005229766-93976a171f25?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=75&output=webp&il",
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=75&output=webp&il"
    ],
    features: ["Круговая планировка", "Ванная с окном", "Библиотека"],
    tags: ["Ванная с окном", "Авторский дизайн"],
    finishingOptions: { "white-box": true, "turnkey": true },
    windows: { orientation: "Юг", count: 4 },
    description: "Уникальная квартира с ванной комнатой, имеющей естественное освещение. Высокие потолки 3.3м.",
    updatedAt: "2025-12-07"
  },
  {
    id: "apt-402",
    number: "19",
    floor: 4,
    rooms: 3,
    totalArea: 138.5,
    livingArea: 82.0,
    ceilingHeight: 3.3,
    pricePerSqm: 1936462,
    totalPrice: 268200000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1512918760538-95f2762a5b6f?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=75&output=webp&il",
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=75&output=webp&il"
    ],
    features: ["Французские балконы", "Каминный портал", "Серверная"],
    tags: ["Камин", "Балконы"],
    finishingOptions: { "white-box": false, "turnkey": true },
    windows: { orientation: "Север-Юг", count: 8 },
    description: "Респектабельная квартира с возможностью установки дровяного камина. Двусторонняя ориентация окон.",
    updatedAt: "2025-12-06"
  },

  // 5 ЭТАЖ
  {
    id: "apt-501",
    number: "22",
    floor: 5,
    rooms: 1,
    totalArea: 58.0,
    livingArea: 30.0,
    ceilingHeight: 3.3,
    pricePerSqm: 2025862,
    totalPrice: 117500000,
    status: "booked",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=1200&q=75&output=webp&il",
    gallery: ["https://wsrv.nl/?url=https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=75&output=webp&il"],
    features: ["Студия", "Вид на церковь", "Умный дом"],
    tags: ["Бронь", "Смарт"],
    finishingOptions: { "white-box": true, "turnkey": false },
    windows: { orientation: "Восток", count: 2 },
    description: "Лот забронирован под инвестиции.",
    updatedAt: "2025-12-09"
  },
  {
    id: "apt-502",
    number: "23",
    floor: 5,
    rooms: 4,
    totalArea: 165.0,
    livingArea: 105.0,
    ceilingHeight: 3.3,
    pricePerSqm: 2077575,
    totalPrice: 342800000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=75&output=webp&il",
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=75&output=webp&il"
    ],
    features: ["4 спальни", "Постирочная", "Кинозал", "Комната для персонала"],
    tags: ["Семейная резиденция", "Комната персонала"],
    finishingOptions: { "white-box": false, "turnkey": true },
    windows: { orientation: "Все стороны", count: 10 },
    description: "Роскошная семейная резиденция на весь этаж крыла. Приватный доступ из лифта.",
    updatedAt: "2025-12-01"
  },

  // 6 ЭТАЖ
  {
    id: "apt-601",
    number: "26",
    floor: 6,
    rooms: 2,
    totalArea: 75.5,
    livingArea: 40.0,
    ceilingHeight: 3.4,
    pricePerSqm: 2122516,
    totalPrice: 160250000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1560185893-a55cbc8c5768?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=75&output=webp&il",
    gallery: ["https://wsrv.nl/?url=https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=75&output=webp&il"],
    features: ["Дизайнерский ремонт", "Мебель Minotti", "Техника Miele"],
    tags: ["С отделкой", "Готова к жизни"],
    finishingOptions: { "white-box": false, "turnkey": true },
    windows: { orientation: "Запад", count: 3 },
    description: "Квартира 'под ключ' с мебелью. Заезжай и живи. Идеальный вариант для тех, кто ценит время.",
    updatedAt: "2025-11-25"
  },
  {
    id: "apt-602",
    number: "27",
    floor: 6,
    rooms: 3,
    totalArea: 110.0,
    livingArea: 65.0,
    ceilingHeight: 3.4,
    pricePerSqm: 2144545,
    totalPrice: 235900000,
    status: "sold",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1512918760538-95f2762a5b6f?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=1200&q=75&output=webp&il",
    gallery: [],
    features: ["Угловая", "Вид на Сити"],
    tags: ["Продана"],
    finishingOptions: { "white-box": true, "turnkey": false },
    windows: { orientation: "Северо-Запад", count: 6 },
    description: "Продано.",
    updatedAt: "2025-10-15"
  },

  // 7 ЭТАЖ (Видовой)
  {
    id: "apt-701",
    number: "30",
    floor: 7,
    rooms: 3,
    totalArea: 130.2,
    livingArea: 75.0,
    ceilingHeight: 3.4,
    pricePerSqm: 2246543,
    totalPrice: 292500000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=75&output=webp&il",
    gallery: ["https://wsrv.nl/?url=https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=75&output=webp&il"],
    features: ["Панорамное остекление", "Вид на закат", "Мастер-зона"],
    tags: ["Видовая", "Панорама"],
    finishingOptions: { "white-box": true, "turnkey": true },
    windows: { orientation: "Запад", count: 7 },
    description: "Потрясающие закаты над Москвой. Квартира наполнена светом благодаря увеличенным оконным проемам.",
    updatedAt: "2025-12-08"
  },
  {
    id: "apt-702",
    number: "31",
    floor: 7,
    rooms: 4,
    totalArea: 155.5,
    livingArea: 95.0,
    ceilingHeight: 3.4,
    pricePerSqm: 2304823,
    totalPrice: 358400000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=75&output=webp&il",
    gallery: ["https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=75&output=webp&il"],
    features: ["Приватный лифт", "Зимний сад", "Камин"],
    tags: ["Зимний сад", "Лифт в квартиру"],
    finishingOptions: { "white-box": false, "turnkey": true },
    windows: { orientation: "Юг-Запад", count: 9 },
    description: "Редкий формат с собственным зимним садом и лифтом, приезжающим прямо в квартиру.",
    updatedAt: "2025-12-01"
  },

  // 8 ЭТАЖ (High)
  {
    id: "apt-801",
    number: "34",
    floor: 8,
    rooms: 3,
    totalArea: 145.0,
    livingArea: 90.0,
    ceilingHeight: 3.6,
    pricePerSqm: 2656896,
    totalPrice: 385250000,
    status: "booked",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1512918760538-95f2762a5b6f?w=1200&q=75&output=webp&il",
    gallery: ["https://wsrv.nl/?url=https://images.unsplash.com/photo-1600210491892-03d54cc0a30b?w=1200&q=75&output=webp&il"],
    features: ["Потолки 3.6м", "Умный дом (полный)", "Звукоизоляция Extra"],
    tags: ["High Level", "Бронь"],
    finishingOptions: { "white-box": true, "turnkey": true },
    windows: { orientation: "Восток-Юг", count: 8 },
    description: "Предпоследний этаж. Тишина, высота, статус. Забронировано.",
    updatedAt: "2025-12-09"
  },
  {
    id: "apt-802",
    number: "35",
    floor: 8,
    rooms: 5,
    totalArea: 210.0,
    livingArea: 140.0,
    ceilingHeight: 3.6,
    pricePerSqm: 2741904,
    totalPrice: 575800000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600596542815-6ad4c4222c10?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1534595038511-9f219fe0c979?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1512918760538-95f2762a5b6f?w=1200&q=75&output=webp&il",
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=75&output=webp&il"
    ],
    features: ["Гранд-гостиная 60м", "5 спален", "Вид на Кремль"],
    tags: ["Grand", "Вид на Кремль", "5 спален"],
    finishingOptions: { "white-box": false, "turnkey": true },
    windows: { orientation: "Круговой обзор", count: 14 },
    description: "Грандиозная квартира для большой семьи. Прямой вид на башни Кремля и ХХС.",
    updatedAt: "2025-11-30"
  },

  // 9 ЭТАЖ (Penthouses)
  {
    id: "apt-901",
    number: "38",
    floor: 9,
    rooms: 4,
    totalArea: 240.5,
    livingArea: 150.0,
    ceilingHeight: 4.2,
    pricePerSqm: 3016632,
    totalPrice: 725500000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600210491892-03d54cc0a30b?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=75&output=webp&il",
    gallery: [
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=75&output=webp&il",
      "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=75&output=webp&il"
    ],
    features: ["Терраса 50м", "Второй свет", "Потолки 4.2м", "Камин"],
    tags: ["Пентхаус", "Терраса", "Второй свет", "Трофейная недвижимость"],
    finishingOptions: { "white-box": true, "turnkey": true },
    windows: { orientation: "Панорама 360", count: 12 },
    description: "Коллекционный пентхаус с собственной террасой на крыше. Ощущение загородного дома в центре Москвы.",
    updatedAt: "2025-12-07"
  },
  {
    id: "apt-902",
    number: "39",
    floor: 9,
    rooms: 3,
    totalArea: 180.0,
    livingArea: 100.0,
    ceilingHeight: 4.0,
    pricePerSqm: 2977222,
    totalPrice: 535900000,
    status: "available",
    floorPlanImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=75&output=webp&il",
    viewImage: "https://wsrv.nl/?url=https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=75&output=webp&il",
    gallery: ["https://wsrv.nl/?url=https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=75&output=webp&il"],
    features: ["Мансардные окна", "Видовая терраса", "Приватность 100%"],
    tags: ["Пентхаус", "Мансарда", "Терраса"],
    finishingOptions: { "white-box": true, "turnkey": true },
    windows: { orientation: "Запад-Восток", count: 8 },
    description: "Пентхаус с мансардными окнами и уютной террасой. Самая романтичная квартира в доме.",
    updatedAt: "2025-12-08"
  }
];