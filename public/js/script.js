const weatherForm = document.querySelector("#weatherForm");
const locationEl = document.querySelector("#location");
const weatherMessageEl = document.querySelector("#weatherMessage");
const weatherErrorMessageEl = document.querySelector("#weatherErrorMessage");

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    weatherErrorMessageEl.innerText = data.error;
    weatherMessageEl.innerText = "";
    return;
  }

  const { location, temperature, feelslike } = data;
  const message = `location: ${location}; temperature: ${temperature}; feelslike: ${feelslike};`;

  weatherErrorMessageEl.innerText = "";
  weatherMessageEl.innerText = message;
}

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { value } = locationEl;
  const url = `/weather?address=${value}`;
  getData(url);
});
