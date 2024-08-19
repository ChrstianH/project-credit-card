class CreditCard {
  _cardNumber: string;
  _cardHolder: string;
  _expiryDate: string;
  _cvv: string;

  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: string
  ) {
    this._cardNumber = cardNumber;
    this._cardHolder = cardHolder;
    this._expiryDate = expiryDate;
    this._cvv = cvv;
  }
}

export default CreditCard;
