class Person{
    name: string;
    age!: number;

    constructor(name:string);
    constructor(name:string,age:number);
    constructor(name:string,age?:number){

        if(age === undefined){
            this.name = name;
            return;
        }
        this.age = age;
        this.name = name;
    }

    greet(): string{
        return`Привет меня зовут ${this.name}, мне ${this.age} Лет!`
    }

    celebrateBitrthday(): void{
        this.age += 1;
        console.log(`С днем рождения ${this.name}, теперь тебе ${this.age} Лет!`);
    }

    error(): never {
        throw new Error('Ошибка');
    }
    
}

const person: Person = new Person('Валерий', 34);
console.log(person.greet);
person.celebrateBitrthday();

