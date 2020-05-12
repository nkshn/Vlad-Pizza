import MainCategory from '../models/main-category';
import SubCategory from '../models/sub-category';
import Product from '../models/product';

export const MAIN_CATEGORIES = [
  new MainCategory('mc1', 'Піцца'),
  new MainCategory('mc2', 'Страви'),
  new MainCategory('mc3', 'Напої'),
  new MainCategory('mc4', 'Десерти'),
];

export const SUB_CATEGORIES = [
  // Основна кат.: [Піцца]
  new SubCategory('sc1', 'mc1', 'Краща ціна'),
  new SubCategory('sc2', 'mc1', 'Класичні'),
  new SubCategory('sc3', 'mc1', 'Фірмові'),
  new SubCategory('sc4', 'mc1', 'Легенди'),
  new SubCategory('sc5', 'mc1', 'Преміум'),
  new SubCategory('sc6', 'mc1', 'Chef`s Best'),

  // Основна кат.: [Страви]
  new SubCategory('sc7', 'mc2', 'Картопля'),
  new SubCategory('sc8', 'mc2', 'Салати'),

  // Основна кат.: [Напої]
  new SubCategory('sc9', 'mc3', 'Напої'),
  new SubCategory('sc10', 'mc3', 'Кава'),
  new SubCategory('sc11', 'mc3', 'Чай'),

  // Основна кат.: [Десерти]
  new SubCategory('sc12', 'mc4', 'Морозиво'),
];

export const PRODUCTS = [
  // Основна кат.: [Піцца], Другорядна кат.: [Краща ціна]
  new Product('p1', 'sc1', 'Маргарита', 85),
  new Product('p2', 'sc1', 'Грибна', 85),
  new Product('p3', 'sc1', 'Два сири', 85),
  new Product('p4', 'sc1', 'Вегетаріанська', 85),

  // Основна кат.: [Піцца], Другорядна кат.: [Класичні]
  new Product('p5', 'sc2', 'Мисливська', 75),
  new Product('p6', 'sc2', 'Куряча', 75),
  new Product('p7', 'sc2', 'Салямі', 75),
  new Product('p8', 'sc2', 'Гавайська', 75),
  new Product('p9', 'sc2', 'Техас', 75),
  new Product('p10', 'sc2', 'Шинка-Ананас', 75),

  // Основна кат.: [Піцца], Другорядна кат.: [Фірмові]
  new Product('p11', 'sc3', 'Шинка-Гриби', 75),
  new Product('p12', 'sc3', 'З Беконом', 75),

  // Основна кат.: [Піцца], Другорядна кат.: [Легенди]
  new Product('p13', 'sc4', 'Курка з грибами', 85),
  new Product('p14', 'sc4', 'Домашня', 85),

  // Основна кат.: [Піцца], Другорядна кат.: [Преміум]
  new Product('p15', 'sc5', 'Неаполітано', 90),
  new Product('p16', 'sc5', 'Американо', 90),

  // Основна кат.: [Піцца], Другорядна кат.: [Chef`s Best]
  new Product('p17', 'sc6', 'Морська', 200),
  new Product('p18', 'sc6', 'Мюнхенська', 200),
  new Product('p19', 'sc6', 'Чотири Сири', 200),

  // Основна кат.: [Страви], Другорядна кат.: [Картопля]
  new Product('p20', 'sc7', 'Картопля по-селянськи', 35),
  new Product('p21', 'sc7', 'Картопля Фрі', 35),

  // Основна кат.: [Страви], Другорядна кат.: [Салати]
  new Product('p22', 'sc8', 'Грецький', 65),
  new Product('p23', 'sc8', 'Цезар', 85),
  new Product('p24', 'sc8', '“Салат з мідіями', 95),

  // Основна кат.: [Напої], Другорядна кат.: [Напої]
  new Product('p25', 'sc9', 'Pepsi', 10),
  new Product('p26', 'sc9', 'Sandora', 25),
  new Product('p27', 'sc9', 'Jaffa', 10),
  new Product('p28', 'sc9', 'Pine Water', 15),
  new Product('p29', 'sc9', 'Lipton Ice Tea', 15),
  new Product('p30', 'sc9', 'Ice coffe', 35),

  // Основна кат.: [Напої], Другорядна кат.: [Кава]
  new Product('p31', 'sc10', 'Еспресо', 10),
  new Product('p32', 'sc10', 'Американо', 10),
  new Product('p33', 'sc10', 'Лате', 20),
  new Product('p34', 'sc10', 'Капучино', 20),
  new Product('p35', 'sc10', 'Флет Вайт', 25),
  new Product('p36', 'sc10', 'РАФ', 25),
  new Product('p37', 'sc10', 'Какао', 20),
  new Product('p38', 'sc10', 'M&M`s', 40),
  new Product('p39', 'sc10', 'Snickers', 40),
  new Product('p40', 'sc10', 'Oreo', 40),
  new Product('p41', 'sc10', 'Айс Лате', 35),

  // Основна кат.: [Напої], Другорядна кат.: [Чай]
  new Product('p42', 'sc11', 'Чай', 10),

  // Основна кат.: [Десерти], Другорядна кат.: [Морозиво]
  new Product('p43', 'sc12', 'Лайм', 12),
  new Product('p44', 'sc12', 'Гранат', 12),
  new Product('p45', 'sc12', 'Бренді Кава', 12),
  new Product('p46', 'sc12', 'Black Ice', 12),
  new Product('p47', 'sc12', 'Фісташкове', 12),
  new Product('p48', 'sc12', 'Лісові Ягоди', 12),
  new Product('p49', 'sc12', 'Пломбір', 12),
  new Product('p50', 'sc12', 'Бабл-Гам', 12),
  new Product('p51', 'sc12', 'Ананасове', 12),
];
