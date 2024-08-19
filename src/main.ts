
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

formElement.addEvebtlistener("click", (event: Event) => {
  event.preventDefault();
  const newCreditCard: CreditCard = new CreditCard(
    cardNumber.value,
    cardHolder.value,
    expirationDate.value,
    cvv.value
  );
  creditCards.push(newCreditCard);
});

//!_____ Ab hier Create Credite Card in HTML_____ -> Output
//# Div Card 
const newCardDiv = document.createElement("div") as HTMLDivElement;
newCardDiv.className = "creditCard";

const outputFeld = document.getElementById("creditCardOutput") as HTMLElement
outputFeld.appendChild(newCardDiv)
//# Card number im div
const cardNumberOutput = document.createElement("b") as HTMLParagraphElement
cardNumberOutput.className = "NumberOutput"
newCardDiv.appendChild(cardNumberOutput)
//# Card holder im div
const cardHolderOutput = document.createElement("p") as HTMLParagraphElement
cardHolderOutput.className = "HolderOutput"
newCardDiv.appendChild(cardHolderOutput)
//# Card Date im div
const cardDateOutput = document.createElement("p") as HTMLParagraphElement
cardDateOutput.className = "DateOutput"
newCardDiv.appendChild(cardDateOutput)
//!______Ende Create Credit Card in HTML_______ -> Output
