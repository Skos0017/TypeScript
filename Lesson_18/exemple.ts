// type StringAlias = string;
// type NumberAlias = Number;


// type Age = number;
// type UserName = Number;

// type UserDefaults = {name: string, age: number};

// type SuccessResponse = {
//     data: string;
//     status: 'Success';
// }

// type ErrorResponse = {
//     data: number;
//     status: 'Error'; 
// }

// type ApiResponse = SuccessResponse | ErrorResponse;

// let response: ApiResponse = {status: 'Error' , data: 12}

// type Person = {
//      name: string;
//      age: number; 
// }

// type Emloyee = {
//     same: number;

//     employeeId: number;
// }

// class Some{  
//     constructor(public some?: string){}
// }
// let some: Some = new Some(undefined);

// type MathOperations = (a: number ,b :string) => string

// let foo: MathOperations = (a: number ,b :string): string => {
//     console.log(`Число`);
// }

// type Point = [number,number];

// let point: Point = [10,10];

// type BoolianArr = boolean[];
// let typeFalseArr: BoolianArr = [true,false,true,false,true,false];

type Result<T> = {
    success: boolean;
    data: T;
    error: string;
}

let successData: Result<number>= {
    success:false,
    data:323213231321,
    error:'DataEroor'
}