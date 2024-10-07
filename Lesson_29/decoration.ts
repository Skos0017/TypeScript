// function LogClacc(constructor: Function){
//     console.log(`Клас Обьявлен с Названием ${constructor.name}`);
// }
// @LogClacc
// class MyClass{
//     constructor(){
//         console.log('Обьект класса создан');
//     }
// }
// const myClass: MyClass = new MyClass();

// function MetaData(metadata: any){
//     return function(constructor: Function){
//         constructor.prototype.metadata = metadata;
//     }
// }
// @MetaData({role: 'admin'})
// class User {
//     constructor(public name: string){}
// }
// const user : User = new User('Kas');
// console.log(user);
// console.log((user as any).metadata);


