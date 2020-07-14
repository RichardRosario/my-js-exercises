(function add() {
  const num1 = 3;
  const num2 = 67;
  console.log(`result is: ${num1 + num2}`);
})();
let firstname = "anna";

(function moreCom() {
  console.log(`${firstname}`);
})();
// closure
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey ${name} your account balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`sorry ${name}, You dont have enough funds`);
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const bob = newAccount("bob", 876);
const john = newAccount("John", 2347);
john.showBalance();
john.deposit(567);
john.deposit(50);
john.deposit(100);
john.withdraw(1000);
john.withdraw(1000);
john.withdraw(1100);

bob.showBalance();
// var let const
const number = 100;
console.log(number);
// number = 200; //will throw error const cannot reassign value
console.log(number);
// scope
let number1 = 100;
console.log(number1);
number1 = 200;
console.log(number1);
{
  let total = 0980;
  console.log(total);
}
{
  let total = 89;
  console.log(total);
}
console.log(total);
{
  var total = 100;
}
// arrow function
const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};
const sum = multiply(3, 4);
console.log(sum);
// return object
const object = () => ({ name: "jone", age: "45" });
const person2 = object();
console.log(person2);

// arrow func as call back func

const numbers = [1, 2, 3, 4, 5, 6, 7];
const big = numbers.filter((number) => number > 2);
console.log(big);

// in regular functions, "this" refers to the parent.. or to the left of the dot
// in the arrow functions, it refers to the current surrounding scope
// destructuring object
const babe = {
  first: "bob",
  last: "gone",
  city: "puerto",
  siblings: {
    sister: "jane",
  },
};

const {
  first,
  last,
  city,
  siblings: { sister: favSis },
} = babe;
console.log(first, last, city, favSis);

// new string method-startWith(), endWith(), includes(), repeat()
const person = "Peter Pan";
const employee = "uowuerfjalanglj-EMP";
const manager = "9487593784lnalnglan-MAN";
// startWith()
// spread operator object
const person1 = { name: "john", job: "developer" };

const newPerson = { ...person1, city: "puerto" };
console.log(person1);
console.log(newPerson);
// spread operator dom element

const headings = document.querySelectorAll(".list-item");
const result = document.querySelector(".result");

const text = [...headings]
  .map((item) => `<div>${item.textContent}</div>`)
  .join("");

result.innerHTML = text;
console.log(text);
// async javascript/ setTimeout

// async/await

// async function someFunc (){
//   await
// }

// const otherFunc = async()=>{
//   await
// }

// == vs ===
const r = 8;
const r1 = "8";
r == r1 ? console.log("true") : console.log("false"); //true
r === r1 ? console.log("true") : console.log("false"); //false

// use spread to get an array instead of nodelist
const heading = [...document.getElementsByTagName("h1")];
console.log(heading);

heading.forEach((item) => {
  item.style.color = "blue";
});

// challenge 4
const input = document.querySelector('input[name="newItem"]');
const list = document.querySelector("ul");
const listItems = document.querySelectorAll("li");

for (let x = 0; x < listItems.length; x++) {
  listItems[x].addEventListener("click", myList);
}

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    makeNew();
  }
});
// creating new element from input
function makeNew() {
  let li = document.createElement("li");
  li.addEventListener("click", myList);
  let textValue = input.value;
  input.value = "";
  let tempNode = document.createTextNode(textValue);
  li.appendChild(tempNode);
  console.log(li);
  list.appendChild(li);
}

function myList() {
  let temp = this.classList.toggle("red");
  if (temp) {
    let span = document.createElement("span");
    span.textContent = "X";
    span.addEventListener("click", function () {
      this.parentElement.remove();
    });
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
  }
}
// event bubbling
const outputEl = document.querySelector(".result");
const elems = document.querySelectorAll("div");

// for (let i = 0; i < elems.length; i++) {
//   let el = elems[i];
//   el.style.border = "1px solid blue";
//   el.style.color = "red";
//   el.style.padding = "20px";
//   el.style.width = "100px";
//   el.value = i + 1;
//   el.addEventListener("click", capture, true);
//   el.addEventListener("click", bubble, false);
// }

function output(msg) {
  outputEl.innerHTML += `${msg}`;
}
function bubble() {
  output("bubble:" + this.value);
}
function capture() {
  output("capture:" + this.value);
}

// checked and toggle checked input
const check = document.getElementById("oneway");
const disableToggle = document.getElementById("return");

check.addEventListener("click", function () {
  disableToggle.toggleAttribute("disabled");
});
// timers
const intervalID = window.setInterval(myCallback, 500, "interval");
const timeOutID = window.setTimeout(myCallback, 500, "setTimeout");

function myCallback(msg) {
  console.log(msg);
}

function stopInterval() {
  clearInterval(intervalID);
}

let x = 0;
const el = document.querySelector(".timer");
el.style.width = "100px";
el.style.height = "100px";
el.style.backgroundColor = "red";
function step() {
  x++;
  el.style.transform = "translateX(" + x + "px)";
  if (x < 450) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
//fetch
const url = "https://randomuser.me/api";
const btn = document.querySelector(".btn");
const ele = document.createElement("input");
const cont = document.querySelector(".result");
ele.setAttribute("type", "number");
ele.setAttribute("value", 5);
document.body.appendChild(ele);
btn.addEventListener("click", getUsers);

function getUsers() {
  let temp = url + "?results=" + ele.value;
  fetch(temp)
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      let html;
      for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].name.first);
        html +=
          data.results[i].name.first + " " + data.results[i].name.last + "<br>";
        cont.innerHTML = html;
      }
    });
}

// drag and drop
var dragged;

// fire draggable event
document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
  "dragstart",
  function (event) {
    // store ref on dragged element
    dragged = event.target;
    console.log(dragged);
    // add transparent style
    dragged.style.opacity = 0.5;
    dragged.style.backgroundColor = "blue";
    dragged.style.color = "white";
  },
  false
);
document.addEventListener(
  "dragend",
  function (event) {
    // reset transparency
    dragged.style.opacity = "";
    dragged.style.backgroundColor = "";
    dragged.style.color = "";
  },
  false
);
// drop event
document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false
);
document.addEventListener(
  "dragenter",
  function (event) {
    if (event.target.classList.contains("dropzone")) {
      event.target.style.background = "green";
    }
  },
  false
);
document.addEventListener(
  "dragleave",
  function (event) {
    // reset background
    if (event.target.classList.contains("dropzone")) {
      event.target.style.background = "";
    }
  },
  false
);
document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.classList.contains("dropzone")) {
      event.target.style.background = "";
      // event.target.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);
