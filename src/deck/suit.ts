export class Suit {
	public static readonly VALUES: Suit[] = [];
	public static readonly HEARTS = new Suit("Hearts");
	public static readonly SPADES = new Suit("Spades");
	public static readonly DIAMONDS = new Suit("Diamonds");
	public static readonly CLUBS = new Suit("Clovers");
	private readonly _name: String;

	private constructor(name: String) {
		this._name = name;
		Suit.VALUES.push(this);
	}

	public get name() {
		return this._name;
	}
}
