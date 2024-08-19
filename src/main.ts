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
