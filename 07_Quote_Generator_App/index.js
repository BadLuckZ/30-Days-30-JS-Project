// Daily Random Quote API
const apiURL = "https://api.quotable.io/random"

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text="
     + quote.innerHTML + "\n\t---- by " + author.innerHTML,
     "Tweet Window", "width=600, height=300");
}

getQuote(apiURL);