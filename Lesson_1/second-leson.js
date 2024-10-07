"use strict";
function add(a, b) {
    return a + b;
}
function greet(name) {
    console.log(`Hello ${name}`);
}
greet();
function greet2(counter = 0, name = 'гость') {
    return `Гость: ${name} по счету: ${counter}`;
}
greet2();
function sum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 3245);
function createFullName(firstName, secondName, lastname) {
    if (firstName != undefined && secondName != undefined) {
        return `${firstName} ${secondName}`;
    }
    else {
        return lastname;
    }
}
let name1 = createFullName('Константин', 'Москаленко', 'Евгеньевич');
let summator = (a, b) => a + b;
summator(25, 31);
