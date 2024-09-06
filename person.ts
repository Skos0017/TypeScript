class Person {
    name: string;
    age: number;
    heiden: number;
    phoneNumber: string;
}

let person: Person = new Person();
person.name = "Валерий";
person.age = 21;
person.heiden = 1.5;
person.phoneNumber = "+790009484";

console.log(`
    ${person.name}\n
    ${person.age}\n
    ${person.heiden}\n
    ${person.phoneNumber}
    `);
