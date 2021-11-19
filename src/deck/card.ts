import { CardFace } from './card-face';
import { Suit } from './suit';

export class Card {
	private readonly _face: CardFace;
	private readonly _suit: Suit;

	public constructor(face: CardFace, suit: Suit) {
		this._face = face;
		this._suit = suit;
	}

	public get face() {
		return this._face;
	}

	public get suit() {
		return this._suit;
	}
}

export function generateSuit(suit: Suit) {
	const arr: Card[] = [];
    for (const face of CardFace.VALUES) {
        arr.push(new Card(face, suit));
    }
	return arr;
}

export function generateDeck(): Card[] {
	const arr: Card[] = [];
	for (const suit of Suit.VALUES) {
		arr.push(...generateSuit(suit));
	}
	return arr;
}

export function generateDecks(count: number): Card[] {
	const arr: Card[] = [];
	for (let i = count; i > 0; i--) {
		arr.push(...generateDeck());
	}
	return arr;
}

export function shuffle(arr: Card[]): Card[] {
	const newArr = [...arr];
    for (let i: number = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
	return newArr;
}
