import getElement from "./getElement.js";

const title = getElement(".user-title");
const value = getElement(".user-value");
const img = getElement(".user-img");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  removeActive();
  btns[0].classList.add("active");

  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      removeActive();
      btn.classList.add("active");
    });
  });
};

function removeActive() {
  btns.forEach((btn) => btn.classList.remove("active"));
}

export default displayUser;
