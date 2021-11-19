export class CardFace {
	public static readonly VALUES: CardFace[] = [];
	public static readonly ACE = new CardFace(1, 'Ace');
	public static readonly TWO = new CardFace(2, 'Two');
	public static readonly THREE = new CardFace(3, 'Three');
	public static readonly FOUR = new CardFace(4, 'Four');
	public static readonly FIVE = new CardFace(5, 'Five');
	public static readonly SIX = new CardFace(6, 'Six');
	public static readonly SEVEN = new CardFace(7, 'Seven');
	public static readonly EIGHT = new CardFace(8, 'Eight');
	public static readonly NINE = new CardFace(9, 'Nine');
	public static readonly TEN = new CardFace(10, 'Ten');
	public static readonly JACK = new CardFace(10, 'Jack');
	public static readonly QUEEN = new CardFace(10, 'Queen');
	public static readonly KING = new CardFace(10, 'King');
	private readonly _value: number;
	private readonly _name: string;

	private constructor(value: number, name: string) {
		this._value = value;
		this._name = name;
		CardFace.VALUES.push(this);
	}

	public get value() {
		return this._value;
	}

	public get name() {
		return this._name;
	}
}
