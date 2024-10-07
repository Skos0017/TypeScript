"use strict";
class Car {
    constructor(make, model, fuelLevel, speed) {
        this.make = make;
        this.model = model;
        this.fuelLevel = fuelLevel;
        this.speed = speed;
    }
    drive() {
        if (this.refuel() && this.fastenSeatBelt() && this.startEngine()) {
            this.accelerate();
        }
    }
    refuel() {
        if (this.fuelLevel < 10) {
            console.log('На донышке!  Идет заправка...');
            this.fuelLevel = 100;
        }
        else {
            console.log('Топлива достаточно!');
        }
        return true;
    }
    fastenSeatBelt() {
        console.log('Пристегивание ремня безопасности...');
        return true;
    }
    startEngine() {
        console.log('Запуск двигателя...');
        return true;
    }
    accelerate() {
        console.log('Увеличение скорости...');
        this.speed = 60;
        console.log(`Теперь машина едет со скоростью ${this.speed} км/ч`);
    }
}
const myCar = new Car('Japan', 'Toyta', 5, 0);
myCar.drive();
