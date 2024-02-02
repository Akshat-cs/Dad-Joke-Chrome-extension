async function fetchJoke() {
  const joke = await fetch("https://icanhazdadjoke.com/slack");
  const jsonjoke = await joke.json();
  const jokeElement = document.getElementById("jokeElement");
  jokeElement.innerHTML = jsonjoke.attachments[0].text;
}

fetchJoke();
