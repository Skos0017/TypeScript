// class Calculator {
//     add(firstParam: number, secondParam: Number): Number;
//     add(firstParam: string, secondParam: string): string;
//     add(firstParam: any, secondParam: any): any {
//         return firstParam + secondParam;
//     }
// }

// const calc: Calculator = new Calculator();
// calc.add();

class Counter{
    counter: number = 0;

    constructor(){};

    increase(): void;
    increase(userNumber: number): void;
    increase(userNumber?: number): void{
        if(userNumber === undefined){
            if(this.counter <= 0 ){
                this.counter++;
            }else{
                this.counter - 1;
            }

        }else{
            this.counter += userNumber;
        }

        console.log(this.counter)
    }
}
const cnt: Counter = new Counter();
cnt.increase(10);
cnt.increase();