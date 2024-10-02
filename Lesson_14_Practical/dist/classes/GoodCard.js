import { Good } from "./Good";
export class GoodCard extends Good {
    constructor(title, description, price, image) {
        super();
        this._title = title;
        this._description = description;
        this._price = price;
        this.image = image;
    }
    getInfo() {
        throw new Error("Method not implemented.");
    }
    draw(parent) {
        let goodCard = document.createElement('div');
        goodCard.className = 'good-card';
        goodCard.style.width = '15em';
        goodCard.style.minWidth = '7.5em';
        goodCard.style.margin = '0.5em';
        goodCard.style.borderRadius = '0.75em';
        goodCard.style.boxShadow = '0.5em 0.5em 0.5em hsl(0, 0%, 0%, 0.3)';
        let image = document.createElement('img');
        image.src = `url(${this.image})`;
        image.style.width = '100%';
        image.style.borderTopLeftRadius = '0.75em';
        image.style.borderTopRightRadius = '0.75em';
        let cardElemetnts = [
            document.createElement('h2'),
            document.createElement('p'),
            document.createElement('p'),
        ];
        let blockInfo = document.createElement('div');
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
    log() {
        console.log(`Логирование карточки: ${this.getInfo()}`);
    }
}
