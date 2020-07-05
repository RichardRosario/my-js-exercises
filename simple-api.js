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
    });
  }
};

xhr.send();
