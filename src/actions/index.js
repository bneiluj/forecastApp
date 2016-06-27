import axios from 'axios';

// Personnal openweathermap key
const API_KEY = '06ab5d8e9075d3db1e27981e2b2c36b8';
// ES6 syntax with ${}
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Function to fetch weather data
export function fetchWeather(city) {
  // Request url
  const url = `${ROOT_URL}&q=${city},us`;
  // Make the Request
  const request = axios.get(url);

  // Just concole for debugging
  console.log('Request: ', request);
  return {
    // An action always contains a type
    type: FETCH_WEATHER,
    // Pass the axios promise to the payload
    payload: request
  }
}
