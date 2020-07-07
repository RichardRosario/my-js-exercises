import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";
import getElement from "./utils/getElement.js";

const btn = getElement(".btn");

const showUser = async () => {
  // get user from api
  const person = await getUser();
  displayUser(person);

  // display user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
