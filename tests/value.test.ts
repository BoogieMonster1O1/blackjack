import { Card, generateDeck, generateDecks, generateSuit } from '../src/deck/card';
import { CardFace } from '../src/deck/card-face';
import { Suit } from '../src/deck/suit';
import { getBestValue, isBlackjack, totalValuations } from '../src/game/value-util';

describe("Should perform correct valuation operations", () => {
	it("Should return that it is not a blackjack", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS)
		];
		expect(isBlackjack(hand)).toBe(false);
	});
	it("Should return that it is a blackjack", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.JACK, Suit.CLUBS)
		];
		expect(isBlackjack(hand)).toBe(true);
	});
	it("Should return best value of two aces as 12", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS)
		];
		expect(getBestValue(hand)).toBe(12);
	});
	it("Should return best value of two aces and a ten as 12", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TEN, Suit.CLUBS)
		];
		expect(getBestValue(hand)).toBe(12);
	});
	it("Should return best value of two aces and a five as 17", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.FIVE, Suit.CLUBS)
		];
		expect(getBestValue(hand)).toBe(17);
	});
	it("Should return best value of two aces, a jack and six as 18", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.JACK, Suit.CLUBS),
			new Card(CardFace.SIX, Suit.CLUBS)
		];
		expect(getBestValue(hand)).toBe(18);
	});
});

describe("Should return correct valuations", () => {
	it("Should return correct valuation for two non-aces", () => {
		const hand: Card[] = [
			new Card(CardFace.TWO, Suit.CLUBS),
			new Card(CardFace.THREE, Suit.CLUBS),
		];
		expect(totalValuations(hand)).toEqual([5]);
	});
	it("Should return correct valuation for three non-aces", () => {
		const hand: Card[] = [
			new Card(CardFace.TWO, Suit.CLUBS),
			new Card(CardFace.THREE, Suit.CLUBS),
			new Card(CardFace.FOUR, Suit.CLUBS),
		];
		expect(totalValuations(hand)).toEqual([9]);
	});
	it("Should return correct valuation for four non-aces", () => {
		const hand: Card[] = [
			new Card(CardFace.TWO, Suit.CLUBS),
			new Card(CardFace.THREE, Suit.CLUBS),
			new Card(CardFace.FOUR, Suit.CLUBS),
			new Card(CardFace.FIVE, Suit.CLUBS),
		];
		expect(totalValuations(hand)).toEqual([14]);
	});
	it("Should return correct valuations for one ace", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([1, 11]);
	});
	it("Should return correct valuations for one ace and one regular", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([3, 13]);
	});
	it("Should return correct valuations for one ace and two regulars", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS),
			new Card(CardFace.THREE, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([6, 16]);
	});
	it("Should return correct valuations for one ace and three regulars", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS),
			new Card(CardFace.THREE, Suit.CLUBS),
			new Card(CardFace.FOUR, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([10, 20]);
	});
	it("Should return correct valuations for an entire suit", () => {
		const hand = generateSuit(Suit.DIAMONDS);
		expect(totalValuations(hand)).toEqual([85, 95]);
	})
	it("Should return correct valuations for two aces", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([2, 12, 22]);
	});
	it("Should return correct valuations for two aces and one regular", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([4, 14, 24]);
	});
	it("Should return correct valuations for two aces and two regulars", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS),
			new Card(CardFace.THREE, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([7, 17, 27]);
	});
	it("Should return correct valuations for two entire suits", () => {
		const hand = [...generateSuit(Suit.DIAMONDS), ...generateSuit(Suit.HEARTS)];
		expect(totalValuations(hand)).toEqual([170, 180, 190]);
	});
	it("Should return correct valuations for three aces", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([3, 13, 23, 33]);
	});
	it("Should return correct valuations for three aces and one regular", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([5, 15, 25, 35]);
	});
	it("Should return correct valuations for three aces and two regulars", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS),
			new Card(CardFace.THREE, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([8, 18, 28, 38]);
	});
	it("Should return correct valuations for three entire suits", () => {
		const hand = [...generateSuit(Suit.DIAMONDS), ...generateSuit(Suit.HEARTS), ...generateSuit(Suit.SPADES)];
		expect(totalValuations(hand)).toEqual([255, 265, 275, 285]);
	});
	it("Should return correct valuations for four aces", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([4, 14, 24, 34, 44]);
	});
	it("Should return correct valuations for four aces and one regular", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([6, 16, 26, 36, 46]);
	});
	it("Should return correct valuations for four aces and two regulars", () => {
		const hand: Card[] = [
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.ACE, Suit.CLUBS),
			new Card(CardFace.TWO, Suit.CLUBS),
			new Card(CardFace.THREE, Suit.CLUBS)
		];
		expect(totalValuations(hand)).toEqual([9, 19, 29, 39, 49]);
	});
	it("Should return correct valuations for an entire deck", () => {
		const hand: Card[] = generateDeck();
		expect(totalValuations(hand)).toEqual([340, 350, 360, 370, 380]);
	});
	it("Should return correct valuations for two entire decks", () => {
		const hand: Card[] = generateDecks(2);
		expect(totalValuations(hand)).toEqual([680, 690, 700, 710, 720, 730, 740, 750, 760]);
	});
	it("Should return correct valuations for four entire decks", () => {
		const hand: Card[] = generateDecks(4);
		expect(totalValuations(hand)).toEqual([1360, 1370, 1380, 1390, 1400, 1410, 1420, 1430, 1440, 1450, 1460, 1470, 1480, 1490, 1500, 1510, 1520]);
	});
});
