function LogClass (constructor: Function){
    console.log(constructor.name);
}

function SetMetaData(newMetadata: any){
    return function(constructor: Function){
        constructor.prototype.KAS_FIELD = newMetadata;
    }
}

@LogClass
@SetMetaData({role:'Admin'})

class Example{
    constructor(public name: string){}
}

const ex: Example = new Example('hello');

console.log(ex.name)
console.log((ex as any).KAS_FIELD)


function WrapMethod(target: Function) {
    for (const key of Object.getOwnPropertyNames(target.prototype)) {
        const method = target.prototype[key];

        if(typeof method === "function"){
            target.prototype[key] = function(...args: any[]) {
                console.log(`Metod ${key} был вызван с параметрами ${args}`) // Новое поведение 
                return method.apply(this, args); // Выполнение старого поведения 
            }
        }
    }
}

const WrapMethod1 = (target: Function) => {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const method = target.prototype[key];
  
      if (typeof method === "function") {
        target.prototype[key] = (...args: any[]) => {
          console.log(`Metod ${key} был вызван с параметрами ... ${args}`); // Новое поведение
          return method.apply(args); // Выполнение старого поведения
        };
      }
    });
  };
  

@WrapMethod
@WrapMethod1
class Some{
    prop1(){
        console.log("1")
    }
    prop2(){
        console.log("2")
    }
    prop3(){
        console.log("3")
    }
    prop4(){
        console.log("4")
    }
    prop5(){
        console.log("5")
    }
}

const some : Some = new Some();

some.prop1();
some.prop2();
some.prop3();
some.prop4();
some.prop5();