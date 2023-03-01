import Card from "./Card.js";
import Deck from "./Deck.js"

const suits = [
    "C",
    "D",
    "S",
    "H"
];

// suits.push("J")
// const card = new Card("foo", 3);

const cards = []
for (const suit of suits) {
    for (let value = 2; value <= 14; value++) {
        const card = new Card(suit, value)
        cards.push(card);
    }
}

const deck = new Deck(cards)