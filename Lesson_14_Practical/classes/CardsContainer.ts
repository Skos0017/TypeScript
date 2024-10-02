import { GoodCard } from "./GoodCard";

export class CardsContainer {    
    private _parent: HTMLElement;
    private _goodCards: Array<GoodCard>

    constructor(parent: HTMLElement, goodCards: Array<GoodCard>) {
        this._parent = parent;
        this._goodCards = goodCards;
    }

    public append() {
        this._goodCards.forEach((card) => {
            card.draw(this._parent);
        });
    }
}