import CreditCard from "./classes/CreditCard";

const creditCards: CreditCard[] = [];

const formElement = document.getElementById("cardInfoForm") as HTMLFormElement;
const cardNumber = document.getElementById("cardNumber") as HTMLInputElement;
const cardHolder = document.getElementById("cardHolder") as HTMLInputElement;
const expirationDate = document.getElementById(
  "expirationDate"
) as HTMLInputElement;
const outputFeld = document.getElementById("creditCardOutput") as HTMLElement;

expirationDate.setAttribute("min", "2024-08");
const cvv = document.getElementById("cvv") as HTMLInputElement;

formElement.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  if (dataValid()) {
    const newCreditCard: CreditCard = new CreditCard(
      cardNumber.value,
      cardHolder.value,
      expirationDate.value,
      cvv.value
    );
    creditCards.push(newCreditCard);
    outputFeld.innerHTML = "";
    displayCreditCards();
  }
});

function dataValid(): boolean {
  if (cardNumber.value.length !== 16 || isNaN(Number(cardNumber.value))) {
    console.log(cardNumber.value);
    window.alert("Die Kartennummer ist nicht korrekt.");
    return false;
  } else if (cvv.value.length !== 3 || isNaN(Number(cvv.value))) {
    window.alert("Die Kartennummer ist nicht korrekt.");
    return false;
  }
  return true;
}
function displayCreditCards() {
  creditCards.forEach((creditCard: CreditCard) => {
    //!_____ Ab hier Create Credite Card in HTML_____ -> Output
    //# Div Card
    const newCardDiv = document.createElement("div") as HTMLDivElement;
    newCardDiv.className = "creditCard";

    outputFeld.appendChild(newCardDiv);
    //# Card number im div
    const cardNumberOutput = document.createElement(
      "b"
    ) as HTMLParagraphElement;
    cardNumberOutput.textContent = creditCard._cardNumber;
    cardNumberOutput.className = "NumberOutput";
    newCardDiv.appendChild(cardNumberOutput);
    //# Card holder im div
    const cardHolderOutput = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    cardHolderOutput.textContent = creditCard._cardHolder;
    cardHolderOutput.className = "HolderOutput";
    newCardDiv.appendChild(cardHolderOutput);
    //# Card Date im div
    const cardDateOutput = document.createElement("p") as HTMLParagraphElement;
    cardDateOutput.textContent = creditCard._expiryDate;
    cardDateOutput.className = "DateOutput";
    newCardDiv.appendChild(cardDateOutput);
    //!______Ende Create Credit Card in HTML_______ -> Output
  });
}
