const API_KEY = 'c365c8738e26bef125373fe9a9284454';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  return {
    type: FETCH_WEATHER
  }
}
