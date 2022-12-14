const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

console.log(btn, result);

console.log("Dad Jokes Starter");

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading....";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning-app",
      },
    });
    const data = await response.json();
    console.log(data);
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "There was an error .....";
  }
};

fetchDadJoke();
