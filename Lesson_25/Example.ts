// Фильтрация с условными типами с распределением
// type Diff<T, U> = T extends U ? never : T;
// type Primitive = string | number | boolean | object;
// type Some = Diff<Primitive, string>
// type NotNull<T> = T extends null | undefined ? never : T;
// type A = NotNull<string | number |undefined>;
// type B = NotNull<number |undefined | null>;
// type C = NotNull<null | undefined>;


// Добовление с условными типами с распределением
// type Extraction <T,U> = T extends U ? T : never ;
// type A = Extract<string | number | boolean | object>;


//Хрень Первая строка определяет псевдоним типа TypeReturning, который принимает параметр типа T. Это условный тип, который проверяет, является ли T типом функции. Если это так, он выводит тип возвращаемого значения этой функции с помощью ключевого слова infer и присваивает его R. Если T не является типом функции, по умолчанию используется любой.
// type TypeRetutning<T> = T extends (...args: any[]) => infer R ? R : any;
// function f1() : string{
//     return 'Hello';
// }
// type A = TypeRetutning<string>;


// Очень интерестно не хуя не понятно 
// type ReadonlyType<T> = {
//     readonly [Property in keyof T]: ReadonlyType<T[Property]>;
//   };
//   type Some = {
//     a: string;
//     b: number;
//     c: {
//       d: boolean;
//       e: string;
//     };
//   };
// type NewSome = ReadonlyType<Some>;


type CheckString<T> = {
    readonly [K in keyof T]: CheckString<T[K]>;
};

type Obj = {
    c: string;
};
