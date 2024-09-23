export namespace Algebra{
    export function solveQuadreatic(a: number , b: number, c:number): [number,number]{
        let discrininant: number = Math.pow(b, 2)-4*a*c;
        let root1: number = (-b - Math.sqrt(discrininant))/(2*a);
        let root2: number = (-b + Math.sqrt(discrininant))/(2*a);

        return[root1,root2]
    }
}