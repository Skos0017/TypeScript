import { Geometry } from "./Geometri";
import { Algebra } from "./Algebra";

let circle: Geometry.Circle = new Geometry.Circle(10);
console.log(circle.erea());

let rectangle: Geometry.Rectangle = new Geometry.Rectangle(12,5);
console.log(rectangle.area());

let root: [Number, number] = Algebra.solveQuadreatic(1,5,3);

console.log(root[0]);
console.log(root[1]);

