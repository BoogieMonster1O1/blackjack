import { generateDeck, generateDecks, generateSuit, shuffle } from '../src/deck/card';
import { Suit } from '../src/deck/suit';

describe("Decks' lengths test", () => {
	it("Should have 13 cards", () => {
		const deck = generateSuit(Suit.HEARTS);
		expect(deck.length).toBe(13);
	});
    it("Should have 52 cards", () => {
        const deck = generateDeck();
        expect(deck.length).toBe(52);
    });
	it("Should have 104 cards", () => {
        const deck = generateDecks(2);
        expect(deck.length).toBe(104);
    });
	it("Should have 416 cards", () => {
        const deck = generateDecks(8);
        expect(deck.length).toBe(416);
    });
});

describe("Deck shuffling test", () => {
	it("Should shuffle the deck", () => {
		const deck = generateDeck();
		const shuffledCards = shuffle(deck);
		expect(shuffledCards).not.toEqual(deck);
	});
});
