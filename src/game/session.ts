import type { Card } from '../deck/card';
import { generateDecks } from '../deck/card';

export class GameSession {
	private _deck: Card[];
	private readonly _decks: number;

	public constructor(decks: number = 2) {
		this._decks = decks;
		this.reshuffle();
	}

	private reshuffle(): void {
        this._deck = generateDecks(this._decks);
    }

	public get decks(): number {
        return this._decks;
    }

	public get deck(): Card[] {
        return this._deck;
    }

	public get card(): Card {
        return this._deck.pop();
    }
}
