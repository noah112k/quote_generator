let quote1 =
  '"The most fucked up joke life can play on you is letting you meet the right person at the wrong time"';
let quote2 =
  '"I think the saddest people always try their hardest to make people happy. Because they know what it feels like to feel absolutely worthless and they don\'t want anyone else to feel like that."';
let quote3 =
  "\"When you're happy you enjoy the music. When you're sad you understand the lyrics.\"";
let quote4 = "Test 4";
let quote5 = "Test 5";
let img1 = "Image 1";
let img2 = "Image 2";
let img3 = "Image 3";
let img4 = "Image 4";
let img5 = "Image 5";
let auth1 = "-Unknown";
let auth2 = "-Robin Williams";
let auth3 = "-Frank Ocean";
let auth4 = "Author 4";
let auth5 = "Author 5";
let quotes = [quote1, quote2, quote3, quote4, quote5];
let images = [img1, img2, img3, img4, img5];
let authors = [auth1, auth2, auth3, auth4, auth5];

let button = document
  .querySelector(".button")
  .addEventListener("click", changeQuote);
function changeQuote() {
  let currentQuote = document.querySelector(".quote");
  let currentAuth = document.querySelector(".author");
  currentQuote.classList.add("fade-out");
  currentAuth.classList.add("fade-out");
  setTimeout(replaceQuote, 2000);
}
function replaceQuote() {
  let num = Math.round(Math.random() * (quotes.length - 1));
  let currentQuote = document.querySelector(".quote");
  let currentAuth = document.querySelector(".author");
  currentQuote.innerHTML = quotes[num];
  currentAuth.innerHTML = authors[num];
  currentQuote.classList.remove("fade-out");
  currentAuth.classList.remove("fade-out");
}
