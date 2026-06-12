// process users city input
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'eb8bf39a3a432dd3a2d2743f87965ee7';
const cityForm = document.getElementById('cityForm');
const weatherResult = document.querySelector('.weather-result');

cityForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);  
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherResult.textContent = 'Error fetching weather data: ' + error.message;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h3>Weather in ${name}</h3>
        <p>Temperature: ${main.temp} °C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}