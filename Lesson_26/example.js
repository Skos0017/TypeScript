"use strict";
// Определение функции Jumplable
function Jumplable(base) {
    return class extends base {
        jump() {
            console.log("Куриный Пыжок");
        }
    };
}
// Определение функции Swimmable
function Swimmable(base) {
    return class extends base {
        swim() {
            console.log("Плаваю!");
        }
    };
}
// Определение класса Chicken
class Chicken {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log("Реализую Бег!");
    }
}
// Создание класса JumplableChicken путем расширения Chicken поведением Jumplable и Swimmable
class JumplableChicken extends Swimmable(Jumplable(Chicken)) {
}
// Создание экземпляра JumplableChicken
const jc = new JumplableChicken("Инокентий");
// Тестирование методов
jc.jump();
jc.swim();
jc.run();
function Chargeable(base) {
    return class extends base {
        charge() {
            console.log("Заряжается...");
        }
    };
}
function Connectable(base) {
    return class extends base {
        connect() {
            console.log("Заряжается...");
        }
    };
}
class Device {
    turnOn() {
        console.log("Устройство Включино!");
    }
}
class Smartphone extends Chargeable(Connectable(Device)) {
}
