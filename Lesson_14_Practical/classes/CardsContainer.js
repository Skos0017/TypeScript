export class CardsContainer {
    constructor(parent, goodCards) {
        this._parent = parent;
        this._goodCards = goodCards;
    }
    append() {
        this._goodCards.forEach((card) => {
            card.draw(this._parent);
        });
    }
}
