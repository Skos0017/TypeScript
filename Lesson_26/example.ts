//миксин Альтернатива наследования
// Определение типа Constructor
type Constructor<T = {}> = new (...args: any[]) => T;
// Определение функции Jumplable
function Jumplable<T extends Constructor>(base: T) {
  return class extends base {
    jump() {
      console.log("Куриный Пыжок");
    }
  };
}
// Определение функции Swimmable
function Swimmable<T extends Constructor>(base: T) {
  return class extends base {
    swim() {
      console.log("Плаваю!");
    }
  };
}
// Определение класса Chicken
class Chicken {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    console.log("Реализую Бег!");
  }
}
// Создание класса JumplableChicken путем расширения Chicken поведением Jumplable и Swimmable
class JumplableChicken extends Swimmable(Jumplable(Chicken)) {}
// Создание экземпляра JumplableChicken
const jc: JumplableChicken = new JumplableChicken("Инокентий");
// Тестирование методов
jc.jump();
jc.swim();
jc.run();


function Chargeable<T extends Constructor>(base: T){
    return class extends base{
        charge(){
            console.log("Заряжается...")
        }
    }

}

function Connectable<T extends Constructor>(base: T){
    return class extends base{
        connect(){
            console.log("Заряжается...")
        }
    }

}

class Device {
    turnOn(){
        console.log("Устройство Включино!")
    }
}

class Smartphone extends {}