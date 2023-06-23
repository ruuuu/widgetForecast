const API_URL= 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'ac3cb4ac4c5bef59df17bfb7e21301f5';


export const fetchWeather = async (city) => {

      try{
            const response = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}&lang=ru`); // промис поучлим // https://openweathermap.org/current
            console.log('response ', response);
      
            if(!response.ok || response.status === 404){
                  throw new Error('Ошибка запроса');
            }

            const data = await response.json();  // response.json() асинхронный метод поэтому ставим await. Переводим из json  в объект
            console.log('data ', data);
      
            return { success: true,  data };
      }
      catch(err){
            return { success: false,  err };
      }

};



export const fetchForecast = async (city) => {

      try{
            const response = await fetch(`${API_URL}/forecast?q=${city}&appid=${API_KEY}&lang=ru`); // промис поучлим // https://openweathermap.org/current
            console.log('response ', response);
      
            if(!response.ok || response.status === 404){
                  throw new Error('Ошибка запроса');
            }

            const data = await response.json();  // response.json() асинхронный метод поэтому ставим await. Переводим из json  в объект
            console.log('data fetchForecast ', data);
      
            return { success: true,  data };
      }
      catch(err){
            return { success: false,  err };
      }

      

};