let isAvalabol: boolean = true;
let isComplete: boolean = false;

console.log(isAvalabol);


//числовой тип 

let count: number = 23.5;
let tempratue: number = 4;

let hex: number = 0xff;

let octan: number = 0o377;
let binar: number = 0b1111111111;

//строковые типы 

let myName: string = 'kas';
let citi: string = 'kaliningrad';
let info: string = citi ;

//тип больших чисел 

let largeNumber1: bigint = BigInt(51561561651515155615515);

//любой универсайльный тип даных 
let dynamicValue: any = true;

//Неизвестные типы 


let uncertinValue: unknown = 'Hello world';

// Не возрощающие типы данных 

function logMassage() : void {
    console.log('Hello');
}

// типы null и undefaind

let nulladel: null = null;
let undefaindle: undefined = undefined;


//колекции 
// масив 

let numberArray: number[] = [1,2,3,4,5];

let stringArray: Array<string> = ['wwq','eew'];

let tupel: [string , number] = ['wrod', 123];

let uniqueData: Set<number> = new Set([1,2,3,4]);

let dictinory = new Map();
dictinory.set('first',1);