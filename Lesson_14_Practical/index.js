import { CardsContainer } from "./classes/CardsContainer.js";
import { GoodCard } from "./classes/GoodCard.js";
let cards = [
    new GoodCard('Компьютер', 'Мощный компьютер для игр. Процессор: intel core i5 10400f. ОЗУ: Kingston 32gb Видеокарта: geforce rtx 4090', 79899.99, '/images/powerful_computer.png'),
    new GoodCard('Ноутбук', 'Легкий и мощный нотбук для работы и развлечений. Процессор: AMD Ryzen 7 5800H/ ОЗУ: 16GB DDR4 SSD: 1TB NVMe', 65999.99, '/images/laptop.png'),
    new GoodCard('Смартфон', 'Флагманский смартфон с лучшей камерой. Процессор: Snapdragon 888. ОЗУ: 12GB Аккумулятор: 5000mAh', 54999.99, '/images/smartphone.png'),
    new GoodCard('Игровая консоль', 'Последняя версия игровой консоли. Поддержка 4К игр. Встроенный SSD 1TB', 39999.99, '/images/game_console.png'),
    new GoodCard('Смарт-часы', 'Умные часы с функцией отслеживания фитнеса и уведомлений. Процессор: Exynos 9110. Время работы: до 7 дней', 12999.99, '/images/smart_watch.png'),
    new GoodCard('Наушники', 'Беспроводные наушники с активным шумоподавлением. Время работы: до 30 часов. Поддержка быстрой зарядки', 8999.99, '/images/headphones.png'),
];
let cardsContainer = new CardsContainer(document.getElementById('mainId'), cards);
cardsContainer.append();
