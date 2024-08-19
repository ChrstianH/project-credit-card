class CreditCard {
  _cardNumber: string;
  _cardHolder: string;
  _expiryDate: Date;
  _cvv: string;

  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: Date,
    cvv: string
  ) {
    this._cardNumber = cardNumber;
    this._cardHolder = cardHolder;
    this._expiryDate = expiryDate;
    this._cvv = cvv;
  }
}

export default CreditCard;
