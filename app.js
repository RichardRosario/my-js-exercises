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

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    await addColor(2000, heading1, "red");
    await addColor(2000, heading2, "green");
    await addColor(1000, heading3, "blue");
  } catch (error) {
    console.log(error);
  }
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`cannot add element ${element}`));
    }
  });
}
// ajax-http

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function () {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();
  const result = document.querySelector(".result");

  // open the file
  xhr.open("GET", "./api.txt");
  xhr.onreadystatechange = function () {
    console.log(xhr);
    if (xhr.readyState === 4 || xhr.status === 200) {
      const text = document.createElement("p");
      text.textContent = xhr.responseText;
      result.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.responseText,
        state: xhr.readyState,
      });
    }
  };

  xhr.send();
}
