"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    ;
    getInfo() {
        return `Имя ${this.name} , возраст ${this.age} ,позиция ${this.position} `;
    }
}
exports.Employee = Employee;
