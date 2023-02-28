import Card from "./Card.js";
import Deck from "./Deck.js"


const deck = new Deck(1);
console.log(deck.cards);

const card = new Card("Jump",3)
const card2 = new Card("A", 3)
console.log(card2.suit)