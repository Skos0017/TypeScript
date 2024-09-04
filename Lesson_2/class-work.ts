function add(a: number, b: number) : number{
    return a + b;
}

function greet(name: string = 'undefined') : void{
    console.log(`Hello ${name}`);
}

function factorial(int: number = 5): number{
    let sum = 1;
    for(let c = 1; c <= int ; c++){
        sum *= c;
    }
    return sum;
}

function isEven(int: number): boolean{
    if(int % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function max(numbers1: number, numbers2: number){
    Math.max(numbers1, numbers2)
}

function reverseString(userString: string): string{
    let reversed = '';
    for (let i = userString.length - 1; i >= 0; i--) {
        reversed += userString[i];
    }
    return reversed;
}
