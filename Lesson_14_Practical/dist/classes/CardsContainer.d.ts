import { GoodCard } from "./GoodCard";
export declare class CardsContainer {
    private _parent;
    private _goodCards;
    constructor(parent: HTMLElement, goodCards: Array<GoodCard>);
    append(): void;
}
