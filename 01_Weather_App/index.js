// Getting From Open Weather Map (https://openweathermap.org/)
const apiKey = "3323cdb41ca0d8d40c62de2da5cb6e6d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

document.addEventListener("DOMContentLoaded", () => {
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })
});

async function checkWeather(name) {
    const response = await fetch(apiURL + `&q=${name}&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

        var data = await response.json();
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "src/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "src/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "src/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "src/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "src/mist.png"
        }
    }
}