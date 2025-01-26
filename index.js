const inputCity = document.querySelector('#city')
const searchButton = document.querySelector('#search')
const weatherInfoDiv = document.querySelector('#weatherInfo');
const toggleButton = document.querySelector('#toggle')

searchButton.addEventListener('click', () => {
  const city = inputCity.value.trim();
  if (city) {
    weatherInfoDiv.textContent =`fetching weather for ${city}...`;
    fetchWeather(city);
  } else{
    weatherInfoDiv.textContent ='Please enter City name!'
  }
});

async function fetchWeather(city){
  const apiKey ='9670677c49aae645138b9b3180e64175'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



try {
  const response = await fetch(url);
  if (!response.ok) throw new Error('City not found'); 
  const data = await response.json();
  displayWeather(data); 
} catch (error) {
  weatherInfoDiv.textContent = error.message;
}
}

function displayWeather(data) {
  const { name, main, weather } = data;
  weatherInfoDiv.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Condition: ${weather[0].description}</p>
  `;
}





