// function WrapMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       console.log(`Method ${propertyKey} былвызван с параметром ${args}`);
//       return originalMethod.apply(this, args);
//     };
//     return descriptor;
// }


// class MyClass{
//     @WrapMethod
//     myMethod(arg1: number, arg2:string){
//         console.log(`Использовал метод ${arg1} c ${arg2}`)
//     }
// }

// const instanse: MyClass = new MyClass();
// instanse.myMethod(25,"Example")


    // Применяем целефой тип название ключа 
function RestrictionDeco(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // Сохраняем старый метод 

  //Доступ к дочерниму MyClass и переименование ключа 
  descriptor.value = function (...args: any[]) {
    if (!(target as any).isAdmin) {
      throw new Error('Вы не администратор');
    }
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class MyClass {
  isAdmin = false;
  
  @RestrictionDeco
  adminMethod(): void {
    console.log("Это доступно только админу");
  }
}

const myClass = new MyClass();
myClass.adminMethod();

// class Person {
//   @Validate
//   name: any;
  
//   constructor(name: string){
//     this.name = name;
//   }
// }

// let 

// function Validate(target: any, key: string){
//   const gettter = () => value;
//   const settr = (newValue: any) => {
//     if(typeof newValue !== 'string'){
//       throw new Error('Argument xe');
//     }
//     value = newValue;
//   }
// }