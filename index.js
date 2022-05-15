function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function inputCity(theCity) {
  let apiKey = "cbef74b82771f591a155bb101a927962";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${theCity}&appid=${apiKey}&units=metric`;

  axios.get(url).then(displayWeather);
}

function whenSubmit(event) {
  event.preventDefault();
  let theCity = document.querySelector("#search-input").value;
  inputCity(theCity);
}
inputCity("Nairobi");

function displayWeather(response) {
  document.querySelector.innerHTML = response.data.name;
  document.querySelector.innerHTML = Math.round(response.data.main.temp);
  let tempResult = document.querySelector("h1");
  tempResult.innerHTML = `${Math.round(response.data.main.temp)}°C`;
}

//current location

function displayPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "f256af9198bc4036cf1455428925e38c";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

  axios.get(url).then(displayWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayPosition);
}

let currentLocButton = document.querySelector("button");
currentLocButton.addEventListener("click", getCurrentLocation);
