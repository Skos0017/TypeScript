class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }
    @ValidateMethod
    public changePersonData(@GetMeta name: any, @GetMeta age: any){
        this.name = name;
        this.age = age;
    }
}

function ValidateMethod(target: any, propertyKey: string, parametrIndex: number){
    const existingLoggedParametrs: number[] = Reflect.getMetadata('loggedParams', target, propertyKey) || [];
    existingLoggedParametrs.push(parametrIndex);
    Reflect.defineMetadata('logParams',existingLoggedParametrs, target ,propertyKey)
}

function GetMeta(target: any, propertyKey: string, defineMetadata: PropertyDescriptor){
    const original: any = descriptor.value;

    descriptor.value = function (...arges: any[]){

    }

}
