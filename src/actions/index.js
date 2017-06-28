import axios from 'axios'

const API_KEY = '160b2e0670eaca80578b849b48957fc7'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
