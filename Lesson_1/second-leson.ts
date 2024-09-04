function add (a: number, b: number):number{
    return a + b ;
}

function greet(name?: string):void{
    console.log(`Hello ${name}`);
}

greet();

function greet2(counter: number =0 ,name: string = 'гость'):string{
    return `Гость: ${name} по счету: ${counter}`
}

greet2();

function sum (...numbers: number[]): number{
    let sum: number = 0 ;

    for(let i = 0 ; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

sum(1,2,3,4,5,6,7,8,3245,)




function createFullName(firstName :string, secondName? :string, lastname? : string) : string {
    if(firstName != undefined && secondName != undefined){
        return`${firstName} ${secondName}`
    } else{
        return lastname;
    }
}

let name1 = createFullName('Константин','Москаленко','Евгеньевич')


let summator = (a: number , b: number) : number => a+b;

summator(25,31)