import { Employee } from "./emloyee";


export class Department{
    private name!: string;

    constructor(){};


    public addEmpouee(){

    }
    
}

function dictionary<TKey, TAge, TName, TPosition  >(key: TKey,age: TAge,name:TName,position: TPosition): {key: TKey,age: TAge,name:TName,position: TPosition} {
    return{key, age, name, position}
}

