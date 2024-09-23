"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Algebra = void 0;
var Algebra;
(function (Algebra) {
    function solveQuadreatic(a, b, c) {
        let discrininant = Math.pow(b, 2) - 4 * a * c;
        let root1 = (-b - Math.sqrt(discrininant)) / (2 * a);
        let root2 = (-b + Math.sqrt(discrininant)) / (2 * a);
        return [root1, root2];
    }
    Algebra.solveQuadreatic = solveQuadreatic;
})(Algebra || (exports.Algebra = Algebra = {}));
