   export class Employee{
        private name: string;
        private age: number;
        private position: string;

        constructor(name: string,age: number,position: string){
            this.name = name;
            this.age = age;
            this.position = position;
        };

        public getInfo(){
            return `Имя ${this.name} , возраст ${this.age} ,позиция ${this.position} `;
        }

    }