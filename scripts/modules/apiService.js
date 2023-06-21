const API_URL= 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'ac3cb4ac4c5bef59df17bfb7e21301f5';


export const fetchWeather = () => {
      fetch(`${API_URL}weather?q=Казань&appid=${API_KEY}&lang=ru`)  // https://openweathermap.org/current
};