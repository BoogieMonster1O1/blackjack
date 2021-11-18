import { generateDeck, shuffle } from '../src/deck/card';

describe("card shuffling test", () => {
	it("should shuffle the deck", () => {
		const deck = generateDeck();
		const shuffledCards = shuffle(deck);
		expect(shuffledCards).not.toEqual(deck);
	});
});
