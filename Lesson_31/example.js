"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.greet = function (message, name) {
        console.log("".concat(name, " write ").concat(message));
    };
    __decorate([
        LogMethod,
        __param(0, LogParametr),
        __param(1, LogParametr),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ExampleClass.prototype, "greet", null);
    return ExampleClass;
}());
// function LogParametr(target: any, propertyKey: string, parametrIndex: number){
//     console.log(target);
//     console.log(propertyKey);
//     console.log(parametrIndex);
// }
function LogParametr(target, propertyKey, parametrIndex) {
    var existingLoggedParametrs = Reflect.getOwnMetadata('logParametrs', target, propertyKey) || [];
    existingLoggedParametrs.push(parametrIndex);
    Reflect.defineMetadata('logParametrs', existingLoggedParametrs, target, propertyKey);
}
function LogMethod(target, key, descriptor) {
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var loggedParametrs = Reflect.getOwnMetadata('logParametrs', target, key) || [];
        //Логируем значения параметров
        loggedParametrs.forEach(function (index) {
            var parametrValue = args[index];
            console.log("$\u041C\u0435\u0442\u043E\u0434".concat(key, " ").concat(index, " ").concat(parametrValue));
        });
        return original.apply(this, args);
    };
    return descriptor;
}
var ex = new ExampleClass();
ex.greet("Hllow, friend", "Ivan");
