// xhr
btn.addEventListener("click", () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      const { value: joke } = JSON.parse(xhr.responseText);
      // content.textContent = `" ${joke.value} "`;
      content.textContent = `" ${joke} "`;
      // shake image
      img.classList.add("shake-img");
      const random = Math.random() * 1000;
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, random);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.responseText,
      });
    }
  };
}

// promises
btn.addEventListener("click", () => {
  getData(URL)
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.responseText,
        });
      }
    };
  });
}
function displayData(data) {
  const { value: joke } = JSON.parse(data);
  // content.textContent = `" ${joke.value} "`;
  content.textContent = `" ${joke} "`;
  // shake image
  img.classList.add("shake-img");
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}

// fetch
btn.addEventListener("click", () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
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
