export default class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get symbol() {
        if (this.value < 11) {
            return this.value.toString();
        } else if (this.value === 11) {
            return "J"
        } else if (this.value === 12) {
            return "Q"
        }else if (this.value === 13) {
            return "K"
        }else if (this.value === 14) {
            return "A"
        }
    }
}
