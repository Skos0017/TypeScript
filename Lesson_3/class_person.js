"use strict";
class Person {
    constructor(name, age, heiden, phoneNumber, imagePth) {
        this.name = name;
        this.age = age;
        this.heiden = heiden;
        this.phoneNumber = phoneNumber;
        this.imagePth = imagePth;
    }
}
const person = {
    name: "Kas",
    age: 21,
    heiden: 1.5,
    phoneNumber: '+790009484',
    imagePth: 'Z:\\Чёрный\\ПОweb2421\\Москаленко.К.Е\\TypeScript\\TypeScript\\Lesson_3\\Img\\man.png'
};
const nameElem = document.createElement('h1');
nameElem.textContent = `Имя ${person.name}`;
const ageElem = document.createElement('p');
ageElem.textContent = `Возраст ${person.age}`;
const heiden = document.createElement('p');
heiden.textContent = `Рост ${person.heiden}`;
const phoneNumber = document.createElement('p');
phoneNumber.textContent = `телефон ${person.heiden}`;
const imagePth = document.createElement('img');
imagePth.alt = `картинка  ${person.heiden}`;
