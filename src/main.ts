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
