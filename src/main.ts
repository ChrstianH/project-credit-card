import CreditCard from "./classes/CreditCard";

const cardNumber = document.getElementById("cardNumber") as HTMLInputElement;
const cardHolder = document.getElementById("cardHolder") as HTMLInputElement;
const expirationDate = document.getElementById(
  "expirationDate"
) as HTMLInputElement;
expirationDate.setAttribute("min", "2024-08");
const cvv = document.getElementById("cvv") as HTMLInputElement;
