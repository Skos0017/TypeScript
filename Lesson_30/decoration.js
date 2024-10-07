"use strict";
// function WrapMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       console.log(`Method ${propertyKey} былвызван с параметром ${args}`);
//       return originalMethod.apply(this, args);
//     };
//     return descriptor;
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class MyClass{
//     @WrapMethod
//     myMethod(arg1: number, arg2:string){
//         console.log(`Использовал метод ${arg1} c ${arg2}`)
//     }
// }
// const instanse: MyClass = new MyClass();
// instanse.myMethod(25,"Example")
// Применяем целефой тип название ключа 
function RestrictionDeco(target, key, descriptor) {
    const originalMethod = descriptor.value; // Сохраняем старый метод 
    //Доступ к дочерниму MyClass и переименование ключа 
    descriptor.value = function (...args) {
        if (target.isAdmin) {
            throw new Error('Вы не администратор');
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
class MyClass {
    constructor() {
        this.isAdmin = false;
    }
    adminMethod() {
        console.log("Это доступно только админу");
    }
}
__decorate([
    RestrictionDeco
], MyClass.prototype, "adminMethod", null);
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
