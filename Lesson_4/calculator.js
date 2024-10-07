"use strict";
// class Calculator {
//     add(firstParam: number, secondParam: Number): Number;
//     add(firstParam: string, secondParam: string): string;
//     add(firstParam: any, secondParam: any): any {
//         return firstParam + secondParam;
//     }
// }
// const calc: Calculator = new Calculator();
// calc.add();
class Counter {
    constructor() {
        this.counter = 0;
    }
    ;
    increase(userNumber) {
        if (userNumber === undefined) {
            if (this.counter <= 0) {
                this.counter++;
            }
            else {
                this.counter - 1;
            }
        }
        else {
            this.counter += userNumber;
        }
        console.log(this.counter);
    }
}
const cnt = new Counter();
cnt.increase(10);
cnt.increase();
