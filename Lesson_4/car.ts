class Car {
    make: string;
    model: string;
    fuelLevel: number;
    speed: number;

    constructor(make: string, model: string, fuelLevel: number, speed: number){
        this.make = make;
        this.model = model;
        this.fuelLevel = fuelLevel;
        this.speed = speed;        
    }

    drive(): void {
        if (this.refuel() && this.fastenSeatBelt() && this.startEngine()){
            this.accelerate();
        }

    }

    refuel(): boolean {
        if (this.fuelLevel < 10){
            console.log('На донышке!  Идет заправка...');
            this. fuelLevel = 100;
        } else{
            console.log('Топлива достаточно!');
        }

        return true;
    }

    fastenSeatBelt(): boolean {
        console.log('Пристегивание ремня безопасности...');
        return true;
    }

    startEngine(): boolean {
        console.log('Запуск двигателя...');
        return true;
    }

    accelerate(): void {
        console.log('Увеличение скорости...');
        this.speed = 60;
        console.log(`Теперь машина едет со скоростью ${this.speed} км/ч`);
    }
}

const myCar: Car = new Car('Japan','Toyta',5,0);
myCar.drive();