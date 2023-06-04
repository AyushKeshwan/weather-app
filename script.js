// Store the API key for accessing the weather API
const apiKey = "2e1441db6d4a03f18d886d4c295970a9";

// Function to fetch weather data from the API based on the provided city
function fetchWeather(city) {
    // Construct the API URL with the city and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Send a request to the API using the fetch() function
    fetch(apiUrl)
        // Get the response and convert it to JSON format
        .then((response) => response.json())
        // Process the JSON data
        .then((data) => displayWeather(data));
}

// Function to display the weather data in the user interface (UI)
function displayWeather(data) {
    // Extract relevant weather information from the API response
    const name = data.name;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;

    // Update the UI elements with the weather information
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = `${temp}°C`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;

    // Remove the loading class and update the background image in the UI
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = `url('https://source.unsplash.com/random/1920x1080/?${name}')`;
}

// Function to initiate a weather search when the search button is clicked or the Enter key is pressed
function search() {
    // Get the entered city from the search input field
    const city = document.querySelector(".search-bar").value;

    // Call the fetchWeather function to fetch weather data for the entered city
    fetchWeather(city);
}

// Event listener for the search button to trigger the search function when clicked
document.querySelector(".search button").addEventListener("click", search);

// Event listener for the search input field to trigger the search function when the Enter key is pressed
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        search();
    }
});


