"use strict";
// Фильтрация с условными типами с распределением
// type Diff<T, U> = T extends U ? never : T;
// type Primitive = string | number | boolean | object;
// type Some = Diff<Primitive, string>
// type NotNull<T> = T extends null | undefined ? never : T;
// type A = NotNull<string | number |undefined>;
// type B = NotNull<number |undefined | null>;
// type C = NotNull<null | undefined>;
