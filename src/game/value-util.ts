import type { Card } from '../deck/card';

/**
 * Returns the value of a set of cards.
 *
 * <p>The value of ace is considered to be 1</p>
 *
 * @param cards The cards to get the value of.
 * @returns The value of the cards.
 */
export function absoluteValue(cards: Card[]) {
    return cards.reduce((sum, card) => sum + card.face.value, 0);
}

// Sum the values of the faces of the cards. If the cards have an ace, its value is either 1 or 11. Return an array of all possible valuations. There may be more than one ace
export function totalValuations(cards: Card[]): number[] {
    const values = absoluteValue(cards);
    const aces = cards.filter(card => card.face.value === 1);
    if (aces.length === 0) {
        return [values];
    }
    let values2 = values;
    const acesValues = aces.map(() => (values2 += 10));
    return [values, ...acesValues];
}
