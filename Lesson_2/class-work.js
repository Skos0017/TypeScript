"use strict";
function add(a, b) {
    return a + b;
}
function greet(name = 'undefined') {
    console.log(`Hello ${name}`);
}
function factorial(int = 5) {
    let sum = 1;
    for (let c = 1; c <= int; c++) {
        sum *= c;
    }
    return sum;
}
function isEven(int) {
    if (int % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
function max(numbers1, numbers2) {
    Math.max(numbers1, numbers2);
}
function reverseString(userString) {
    let reversed = '';
    for (let i = userString.length - 1; i >= 0; i--) {
        reversed += userString[i];
    }
    return reversed;
}
