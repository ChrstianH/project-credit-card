
function validateCardNumber(cardNumber: string): boolean {
    return cardNumber.length === 16 && !isNaN(Number(cardNumber));
}

function validateCvvNumber(cvvNumber: string): boolean {
  return cvvNumber.length === 3 && !isNaN(Number(cvvNumber))
}

import CreditCard from "./classes/CreditCard";

const creditCards: CreditCard[] = [];

const formElement = document.getElementById("cardInfoForm") as HTMLFormElement;
const cardNumber = document.getElementById("cardNumber") as HTMLInputElement;
const cardHolder = document.getElementById("cardHolder") as HTMLInputElement;
const expirationDate = document.getElementById(
  "expirationDate"
) as HTMLInputElement;
expirationDate.setAttribute("min", "2024-08");
const cvv = document.getElementById("cvv") as HTMLInputElement;

formElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  if (dataValid()) {
    const newCreditCard: CreditCard = new CreditCard(
      cardNumber.value,
      cardHolder.value,
      expirationDate.value,
      cvv.value
    );
    creditCards.push(newCreditCard);
  }
});

<<<<<<< HEAD
=======
function dataValid(): boolean {
  if (cardNumber.value.length !== 16 || isNaN(Number(cardNumber.value))) {
    return false;
  } else if (cvv.value.length !== 3 || isNaN(Number(cvv.value))) {
    return false;
  }
  return true;
}
>>>>>>> cardLogic
