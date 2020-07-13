// (function add() {
//   const num1 = 3;
//   const num2 = 67;
//   console.log(`result is: ${num1 + num2}`);
// })();
// let firstname = "anna";

// (function moreCom() {
//   console.log(`${firstname}`);
// })();
// // closure
// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalance() {
//     console.log(`hey ${name} your account balance is ${balance}`);
//   }
//   function deposit(amount) {
//     balance += amount;
//     showBalance();
//   }
//   function withdraw(amount) {
//     if (amount > balance) {
//       console.log(`sorry ${name}, You dont have enough funds`);
//     }
//     balance -= amount;
//     showBalance();
//   }
//   return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
// }

// const bob = newAccount("bob", 876);
// const john = newAccount("John", 2347);
// john.showBalance();
// john.deposit(567);
// john.deposit(50);
// john.deposit(100);
// john.withdraw(1000);
// john.withdraw(1000);
// john.withdraw(1100);

// bob.showBalance();
// // var let const
// // const number = 100;
// // console.log(number);
// // number = 200;
// // console.log(number);
// // scope
// let number = 100;
// console.log(number);
// number = 200;
// console.log(number);
// {
//   let total = 0980;
//   console.log(total);
// }
// {
//   let total = 89;
//   console.log(total);
// }
// console.log(total);
// {
//   var total = 100;
// }
// // arrow function
// const multiply = (num1, num2) => {
//   const result = num1 * num2;
//   return result;
// };
// const sum = multiply(3, 4);
// console.log(sum);
// // return object
// const object = () => ({ name: "jone", age: "45" });
// // const person = object();
// console.log(person);

// // arrow func as call back func

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const big = numbers.filter((number) => number > 2);
// console.log(big);

// in regular functions, "this" refers to the parent.. or to the left of the dot
// in the arrow functions, it refers to the current surrounding scope
// destructuring object
// const babe = {
//   first: "bob",
//   last: "gone",
//   city: "puerto",
//   siblings: {
//     sister: "jane",
//   },
// };

// const {
//   first,
//   last,
//   city,
//   siblings: { sister: favSis },
// } = babe;
// console.log(first, last, city, favSis);

// // new string method-startWith(), endWith(), includes(), repeat()
// const person = 'Peter Pan'
// const employee = 'uowuerfjalanglj-EMP'
// const manager = '9487593784lnalnglan-MAN'
// // startWith()
// spread operator object
// const person = { name: "john", job: "developer" };

// const newPerson = { ...person, city: "puerto" };
// console.log(person);
// console.log(newPerson);
// // spread operator dom element

// const headings = document.querySelectorAll("h2");
// const result = document.querySelector(".result");

// console.log(headings);

// const text = [...headings]
//   .map((item) => `<div>${item.textContent}</div>`)
//   .join("");

// result.innerHTML = text;
// console.log(text);
// async javascript/ setTimeout

// async/await

// async function someFunc (){
//   await
// }

// const otherFunc = async()=>{
//   await
// }

//== vs ===
// let r = 8;
// const r1 = "8";
// r == r1 ? console.log("true") : console.log("false"); //true
// r === r1 ? console.log("true") : console.log("false"); //false

// use spread to get an array instead of nodelist
// const heading = [...document.getElementsByTagName("h1")];
// console.log(heading);

// heading.forEach((item) => {
//   item.style.color = "blue";
// });

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
