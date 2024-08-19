function validateCardNumber(cardNumber: string): boolean {
    return cardNumber.length === 16 && !isNaN(Number(cardNumber));
}

function validateCvvNumber(cvvNumber: string): boolean {
  return cvvNumber.length === 3 && !isNaN(Number(cvvNumber))
}