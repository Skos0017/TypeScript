"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = void 0;
var Geometry;
(function (Geometry) {
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        ;
        erea() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
    Geometry.Circle = Circle;
    class Rectangle {
        constructor(widrh, heigrh) {
            this.widrh = widrh;
            this.heigrh = heigrh;
        }
        ;
        area() {
            return this.widrh * this.heigrh;
        }
    }
    Geometry.Rectangle = Rectangle;
})(Geometry || (exports.Geometry = Geometry = {}));
