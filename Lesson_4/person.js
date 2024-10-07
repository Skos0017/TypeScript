"use strict";
class Person {
    constructor(name, age) {
        if (age === undefined) {
            this.name = name;
            return;
        }
        this.age = age;
        this.name = name;
    }
    greet() {
        return `Привет меня зовут ${this.name}, мне ${this.age} Лет!`;
    }
    celebrateBitrthday() {
        this.age += 1;
        console.log(`С днем рождения ${this.name}, теперь тебе ${this.age} Лет!`);
    }
    error() {
        throw new Error('Ошибка');
    }
}
const person = new Person('Валерий', 34);
console.log(person.greet);
person.celebrateBitrthday();
