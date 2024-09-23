type StrinInt = String | Number;

function foo(params: StrinInt){
    if(params instanceof String){
        console.log("это  Строка");
    }else {
        console.log("Число");
    }
}

type Worcer = {
    id = number,
    name: string,
    age: number
}

interface _Compani{
    id: 
}