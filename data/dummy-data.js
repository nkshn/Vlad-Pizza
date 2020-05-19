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
  new Product('p1', 'sc1', 'Маргарита', true, true, true, '25cм', '32cм', '40cм', 85, 165, 330),
  new Product('p2', 'sc1', 'Грибна', true, true, true, '25cм', '32cм', '40cм', 85, 165, 330),
  new Product('p3', 'sc1', 'Два сири', true, true, true, '25cм', '32cм', '40cм', 85, 165, 330),
  new Product('p4', 'sc1', 'Вегетаріанська', true, true, true, '25cм', '32cм', '40cм', 85, 165, 330),

  // Основна кат.: [Піцца], Другорядна кат.: [Класичні]
  new Product('p5', 'sc2', 'Мисливська', true, true, true, '25cм', '32cм', '40cм', 75, 150, 300),
  new Product('p6', 'sc2', 'Куряча', true, true, true, '25cм', '32cм', '40cм', 75, 150, 300),
  new Product('p7', 'sc2', 'Салямі', true, true, true, '25cм', '32cм', '40cм', 75, 150, 300),
  new Product('p8', 'sc2', 'Гавайська', true, true, true, '25cм', '32cм', '40cм', 75, 150, 300),
  new Product('p9', 'sc2', 'Техас', true, true, true, '25cм', '32cм', '40cм', 75, 150, 300),
  new Product('p10', 'sc2', 'Шинка-Ананас', true, true, true, '25cм', '32cм', '40cм', 75, 150, 300),

  // Основна кат.: [Піцца], Другорядна кат.: [Фірмові]
  new Product('p11', 'sc3', 'Шинка-Гриби', true, true, true, '25cм', '32cм', '40cм', 75, 150, 300),
  new Product('p12', 'sc3', 'З Беконом', true, true, true, '25cм', '32cм', '40cм', 75, 150, 300),

  // Основна кат.: [Піцца], Другорядна кат.: [Легенди]
  new Product('p13', 'sc4', 'Курка з грибами', true, true, true, '25cм', '32cм', '40cм', 85, 165, 330),
  new Product('p14', 'sc4', 'Домашня', true, true, true, '25cм', '32cм', '40cм', 85, 165, 330),

  // Основна кат.: [Піцца], Другорядна кат.: [Преміум]
  new Product('p15', 'sc5', 'Неаполітано', true, true, true, '25cм', '32cм', '40cм', 90, 180, 360),
  new Product('p16', 'sc5', 'Американо', true, true, true, '25cм', '32cм', '40cм', 90, 180, 360),

  // Основна кат.: [Піцца], Другорядна кат.: [Chef`s Best]
  new Product('p17', 'sc6', 'Морська', false, true, true, null, '32cм', '40cм', null, 200, 400),
  new Product('p18', 'sc6', 'Мюнхенська', false, true, true, null, '32cм', '40cм', null, 200, 400),
  new Product('p19', 'sc6', 'Чотири Сири', false, true, true, null, '32cм', '40cм', null, 200, 400),


  // Основна кат.: [Страви], Другорядна кат.: [Картопля]
  new Product('p20', 'sc7', 'Картопля по-селянськи', true, false, false, '150г', null, null, 35, null, null),
  new Product('p21', 'sc7', 'Картопля Фрі', true, false, false, '150г', null, null, 35, null, null),

  // Основна кат.: [Страви], Другорядна кат.: [Салати]
  new Product('p22', 'sc8', 'Грецький', true, false, false, '250г', null, null, 65, null, null),
  new Product('p23', 'sc8', 'Цезар', true, false, false, '250г', null, null, 85, null, null),
  new Product('p24', 'sc8', 'Салат з мідіями', true, false, false, '250г', null, null, 95, null, null),


  // Основна кат.: [Напої], Другорядна кат.: [Напої]
  new Product('p25', 'sc9', 'Pepsi', true, true, true, '0,33л', '0,5л', '1л', 10, 15, 25),
  new Product('p26', 'sc9', 'Sandora', false, true, true, null, '0,5л', '1л', null, 25, 35),
  new Product('p27', 'sc9', 'Jaffa', true, false, false, '125мл', null, null, 10, null, null),
  new Product('p28', 'sc9', 'Pine Water', true, false, false, '0,33л', null, null, 15, null, null),
  new Product('p29', 'sc9', 'Lipton Ice Tea', false, true, true, null, '0,5л', '1л', false, 15, 20),
  new Product('p30', 'sc9', 'Ice coffe', true, false, false, '125мл', null, null, 35, null, null),

  // Основна кат.: [Напої], Другорядна кат.: [Кава]
  new Product('p31', 'sc10', 'Еспресо', false, false, false, null, null, null, 10, null, null),
  new Product('p32', 'sc10', 'Американо', false, false, false, null, null, null, 10, null, null),
  new Product('p33', 'sc10', 'Лате', false, false, false, null, null, null, 20, null, null),
  new Product('p34', 'sc10', 'Капучино', false, false, false, null, null, null, 20, null, null),
  new Product('p35', 'sc10', 'Флет Вайт', false, false, false, null, null, null, 25, null, null),
  new Product('p36', 'sc10', 'РАФ', false, false, false, null, null, null, 25, null, null),
  new Product('p37', 'sc10', 'Какао', false, false, false, null, null, null, 20, null, null),
  new Product('p38', 'sc10', 'M&M`s', false, false, false, null, null, null, 40, null, null),
  new Product('p39', 'sc10', 'Snickers', false, false, false, null, null, null, 40, null, null),
  new Product('p40', 'sc10', 'Oreo', false, false, false, null, null, null, 40, null, null),
  new Product('p41', 'sc10', 'Айс Лате', false, false, false, null, null, null, 30, null, null),

  // Основна кат.: [Напої], Другорядна кат.: [Чай]
  new Product('p42', 'sc11', 'Чай', false, false, false, null, null, null, 10, null, null),


  // Основна кат.: [Десерти], Другорядна кат.: [Морозиво]
  new Product('p43', 'sc12', 'Лайм', true, false, false, '1 кулька', null, null, 12, null, null),
  new Product('p44', 'sc12', 'Гранат', true, false, false, '1 кулька', null, null, 12, null, null),
  new Product('p45', 'sc12', 'Бренді Кава', true, false, false, '1 кулька', null, null, 12, null, null),
  new Product('p46', 'sc12', 'Black Ice', true, false, false, '1 кулька', null, null, 12, null, null),
  new Product('p47', 'sc12', 'Фісташкове', true, false, false, '1 кулька', null, null, 12, null, null),
  new Product('p48', 'sc12', 'Лісові Ягоди', true, false, false, '1 кулька', null, null, 12, null, null),
  new Product('p49', 'sc12', 'Пломбір', true, false, false, '1 кулька', null, null, 12, null, null),
  new Product('p50', 'sc12', 'Бабл-Гам', true, false, false, '1 кулька', null, null, 12, null, null),
  new Product('p51', 'sc12', 'Ананасове', true, false, false, '1 кулька', null, null, 12, null, null),
];
