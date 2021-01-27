const setupDiv = document.getElementById("setup")
const punchlineDiv = document.getElementById("punchline")
const punchlineBtn = document.getElementById("punchlineBtn")
const newJokeBtn = document.getElementById("newJokeBtn")

var punchline;

punchlineBtn.onclick = function () { getPunchline() };
newJokeBtn.onclick = function () { getJoke() };

function getPunchline() {
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
    punchlineDiv.classList.add('bubble');
    punchlineDiv.innerHTML = punchline;
}

async function getJoke() {
    const jokePromise = await fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    const joke = await jokePromise.json();

    setupDiv.innerHTML = joke[0].setup
    punchline = joke[0].punchline
    newJokeBtn.innerHTML = "New Joke"

    punchlineDiv.innerHTML = "";
    punchlineDiv.classList.remove("bubble");

    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden')
}

getJoke()