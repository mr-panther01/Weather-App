const temperatureField = document.querySelector('.temp');
const conditionField = document.querySelector('.weather_condition span');
const timeandDateField = document.querySelector('.time_location span');
const locationField = document.querySelector('.time_location p');
const weatherIcon = document.querySelector('.weather_condition img');

const form = document.querySelector('form');
const searchField = document.querySelector('.searchField');

let target = 'Mumbai';

form.addEventListener('submit', searchFn);

function searchFn(event) {
    event.preventDefault();
    let target = searchField.value;
    fetchData(target);
}

async function fetchData(target) {
    let endpoint = `https://api.weatherapi.com/v1/current.json?key=f3c4cf44c66243b39ee51501250602&q=${target}&aqi=no`;

    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data);
    let cityName = data.location.name;
    let Time = data.location.localtime;
    let Tempc = data.current.temp_c;
    let condition = data.current.condition.text;
    let conditionIcon = data.current.condition.icon;

    console.log(Time);
    console.log(cityName);
    console.log(Tempc);
    console.log(condition);
    console.log(conditionIcon);

    temperatureField.textContent = `${Tempc}°C`;
    conditionField.textContent = condition;
    timeandDateField.textContent = Time;
    locationField.textContent = cityName;
    weatherIcon.src = conditionIcon;
}
