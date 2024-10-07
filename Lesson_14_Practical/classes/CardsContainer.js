"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsContainer = void 0;
class CardsContainer {
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
exports.CardsContainer = CardsContainer;
