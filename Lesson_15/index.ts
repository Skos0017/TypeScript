// function identity<T>(arg: T){
//     return arg;
// }

// let numberOurut: number = identity<number>(34);
// let stringOurut: string = identity<string>('world');

// function getFirstElement<ArrType>(arr: ArrType[]): ArrType{
//     let value: ArrType = arr[0];
//     return value;
// }

// console.log(getFirstElement([1,2,3,4,5]));

// function summ<T>(first: T, second: T){
//     return first;
// }
// summ<number>(10,15);

function dictionary<TKey, TValeu>(key: TKey,value: TValeu): {key: TKey, value: TValeu} {
    return{key, value}
}

let dic:{key: string, value: number}=dictionary<string, number>("Индекс",25);
console.log(dic);
console.log(typeof(dic.key));
console.log(typeof(dic.value));

// function bubblesSorting<TValeu>(arr:TValeu[]) {  

//     for (let j = arr.length - 1; j > 0; j--) {

//         for (let i = 0; i < j; i++) {

//             if (arr[i] > arr[i + 1]) {

//                 let temp: TValeu = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }
//     }
//     return arr;
// // }

// console.log(bubblesSorting<number>([5,1,4,2,3]));
// console.log(bubblesSorting<string>(["5",'1','4','2','3']));


function minimum<TKey>(anu: TKey[]){
    for (let j = anu.length - 1; j > 0; j--) {

        for (let i = 0; i < j; i++) {

            if (anu[i] > anu[i + 1]) {

                let temp: TKey = anu[i];
                anu[i] = anu[i + 1];
                anu[i + 1] = temp;
            }
        }
    }
    return anu[0];
}

    


function maksimum<TKey>(anu: TKey[]){
    for (let j = anu.length - 1; j > 0; j--) {

        for (let i = 0; i < j; i++) {

            if (anu[i] > anu[i + 1]) {

                let temp: TKey = anu[i];
                anu[i] = anu[i + 1];
                anu[i + 1] = temp;
            }
        }
    }
    return anu.length;
}


console.log(minimum<number>([5,1,4,2,3]));
console.log(minimum<string>(["5",'1','4','2','3']));

console.log(maksimum<number>([5,1,4,2,3]));
console.log(maksimum<string>(["5",'1','4','2','3']));