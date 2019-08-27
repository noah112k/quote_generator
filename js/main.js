let button = document
  .querySelector(".button")
  .addEventListener("click", changeQuote);
let currentQuote = document.querySelector(".quote");
let currentAuth = document.querySelector(".author");
function changeQuote() {
  currentQuote.classList.add("fade-out");
  currentAuth.classList.add("fade-out");
  setTimeout(replaceQuote, 2000);
}

let prevNum = -1;

function replaceQuote() {
  let num = prevNum;
  if (num >= 0) {
    if (quotes[num].length > 150) {
      currentQuote.classList.remove("long-quote");
      currentQuote.classList.add("quote");
    }
  }
  while (num == prevNum) {
    num = Math.round(Math.random() * (quotes.length - 1));
  }
  prevNum = num;
  if (quotes[num].length > 150) {
    currentQuote.classList.add("long-quote");
    currentQuote.classList.remove("quote");
  }
  currentQuote.innerHTML = quotes[num];
  currentAuth.innerHTML = authors[num];
  currentQuote.classList.remove("fade-out");
  currentAuth.classList.remove("fade-out");
}
