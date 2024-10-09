import 'reflect-metadata';
class ExampleClass {
    @LogMethod
    public greet(@LogParametr message: string, @LogParametr name: string): void {
        console.log(`${name} write ${message}`)
    }
}

// function LogParametr(target: any, propertyKey: string, parametrIndex: number){
//     console.log(target);
//     console.log(propertyKey);
//     console.log(parametrIndex);
// }

function LogParametr(target: any, propertyKey: string, parametrIndex: number){
    const existingLoggedParametrs: number[] = Reflect.getOwnMetadata('logParametrs', target, propertyKey) || [];
    existingLoggedParametrs.push(parametrIndex);

    Reflect.defineMetadata('logParametrs', existingLoggedParametrs, target, propertyKey)
}

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor){
    const original: any = descriptor.value;

    descriptor.value = function(...args: any[]){
        const loggedParametrs: number[] = Reflect.getOwnMetadata('logParametrs', target, key) || [];

        //Логируем значения параметров
        loggedParametrs.forEach(index => {
            const parametrValue = args[index];
            console.log(`$Метод${key} ${index} ${parametrValue}`);
        });
        return original.apply(this, args);
    }
    return descriptor;

}

const ex: ExampleClass = new ExampleClass();
ex.greet("Hllow, friend", "Ivan");