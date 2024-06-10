window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

const apiKey = "cda4c46d1d07ecfb7a91c6d9b946210c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".card__header input");
const searchBtn = document.querySelector(".card__header button");
const weatherIco = document.querySelector(".card__body > img");

async function checkWeather(city) {
  const res = await fetch(apiURL + city + `&appid=${apiKey}`);
  
  if (res.status == 404) {
    document.querySelector(".card__error").style.display = "block";
    document.querySelector(".card__body").style.display = "none";
    return;
  }

  let data = await res.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  weatherIco.src = `images/${data.weather[0].main}.png`
  document.querySelector(".card__body").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});