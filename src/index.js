window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

const apiKey = "cda4c46d1d07ecfb7a91c6d9b946210c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}";