const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  // content.textContent = `" ${joke.value} "`;
  content.textContent = `" ${joke} "`;
  // shake image
  img.classList.add("shake-img");
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}
