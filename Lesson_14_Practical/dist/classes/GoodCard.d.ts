import { IDrawable } from "../interfaces/IDrawable";
import { IImage } from "../interfaces/IImage";
import { Good } from "./Good";
export declare class GoodCard extends Good implements IDrawable, IImage {
    protected _title: string;
    protected _description: string;
    protected _price: number;
    image: string;
    constructor(title: string, description: string, price: number, image: string);
    getInfo(): string;
    draw(parent: HTMLElement): void;
    private log;
}
