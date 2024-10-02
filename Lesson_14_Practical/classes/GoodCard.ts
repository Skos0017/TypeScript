import { IDrawable } from "../interfaces/IDrawable";
import { IImage } from "../interfaces/IImage";
import { Good } from "./Good.js";

export class GoodCard extends Good implements IDrawable, IImage {
    protected _title: string;
    protected _description: string;
    protected _price: number;
    image: string;

    constructor (title: string, description: string, price: number, image: string) {
        super();
        this._title = title;
        this._description = description;
        this._price = price;
        this.image = image;
    }

    public getInfo(): string {
        throw new Error("Method not implemented.");
    }

    public draw(parent: HTMLElement): void {
        let goodCard: HTMLDivElement = document.createElement('div');
        goodCard.className = 'good-card';
        goodCard.style.width = '20em';
        goodCard.style.minWidth = '10em';
        goodCard.style.margin = '0.75em';
        goodCard.style.borderRadius = '0.65em';
        goodCard.style.boxShadow = '0.6em 0.4em 0.5em hsl(0, 0%, 0%, 0.5)';

        

        let image: HTMLImageElement = document.createElement('img');
        image.src = this.image;
        image.style.width = '100%';
        image.style.borderTopLeftRadius = '0.75em';
        image.style.borderTopRightRadius = '0.75em';

        let cardElemetnts: Array<HTMLElement> = [
            document.createElement('h2'),
            document.createElement('p'),
            document.createElement('p'),
        ]
        
        let blockInfo: HTMLDivElement = document.createElement('div');
        blockInfo.style.padding = '0 0.5em';

        cardElemetnts[0].textContent = this._title;
        cardElemetnts[1].textContent = this._description;
        cardElemetnts[2].textContent = this._price.toString();




        for (let i = 0; i < cardElemetnts.length; i++) {
            blockInfo.appendChild(cardElemetnts[i]);
        }
        goodCard.appendChild(image);
        goodCard.appendChild(blockInfo);

        parent.appendChild(goodCard);
    }

    private log() {
        console.log(`Логирование карточки: ${this.getInfo()}`);
    }

}