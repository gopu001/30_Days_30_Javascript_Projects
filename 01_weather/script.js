const apikey = "7056e65f990b07ab2edc29076f42f81b";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const error = document.querySelector(".error");
const weather = document.querySelector(".weather");
const cityElement = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
    return;
  } else {
    var data = await response.json();
    cityElement.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    weather.style.display = "block";
    error.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// 1) I took API key and URL from open weather website
// 2) I fetched the API using fetch method & I used async function because I only want to show the data after fetching the api
// 3) I used &appid=${apikey} to add the API key in the URL
// 4) I used await to wait for the response from the API
// 5) I used .json() method to convert the response into JSON format
// 6) I used console.log() to print the datra in the console
// 7) After fetching data we should display the the data so i imported classes into javascript by using query selector and used it by innerHTML
// 8) For searchig citys in search box i used coty given by the open weather website and gave city as parameter to chechweather function and added it in fetch so it will now fetch 3 things url,city and details of weather using api
// 9)TO change the weather images accorinng to the degrees alike is it cloudy or sunny or rainy or drizzle or mist i used if else statements and used weather[0].main to get the weather condition
// 10) I used weather.style.display = "block" to display the weather data only after entering the city name
