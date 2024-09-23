
export namespace Geometry{
    export class Circle{
        constructor(public radius: number){};

        public erea():number{
            return Math.PI * Math.pow(this.radius,2);
        }
    }

    export class Rectangle{
        constructor(public widrh: number, public heigrh: number){};

        public area(): number{
            return this.widrh * this.heigrh;
        }
    }
}
