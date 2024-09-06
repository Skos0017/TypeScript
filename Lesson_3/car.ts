class Car{
    model: string;
    year: number;

    constructor(outermodel: string , outeryear: number){
        this.model = outermodel;
        this.year = outeryear;
    }
}

const car1: Car = new Car("Тоёта",1999);
const car2: Car = new Car("Газ", 1995);