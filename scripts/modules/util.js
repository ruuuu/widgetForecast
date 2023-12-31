
export const getCurrentDateTime = () => {
     
     const months = [ 'янв', 'февр', 'март', 'апр', 'май', 'июнь', 'июль', 'август', 'сен', 'окт', 'нояб', 'дек'];
     const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ];

     const date = new Date(); // получаем текущую дату

     const dayOffMonth = date.getDate(); // число
    
     const month = months[date.getMonth()];
     const year = date.getFullYear();
     

     //console.log('dayOffMonth ', dayOffMonth)
     //console.log('date.getDay() ', date.getDay())
     const dayOfWeek =  weekdays[date.getDay()];

     let hours = date.getHours();
     let minutes = date.getMinutes();

     if(hours < 10){
        hours = `0${hours}`;
     }

     if(minutes < 10){
        minutes = `0${minutes}`;
     }
     
     return { month, year, dayOffMonth, dayOfWeek, hours, minutes };
};



// export const getWindDirection = (deg) => {
   
//    const directions = ['&#8594;', '&#8592;', '&#8593;', '&#8595;', '&#10136;', '&#10138;', '&#11016;', '&#11017;', '&#11018;', '&#11019;'];

//    const i = Math.round(deg / 45) % 8;
//    return directions[i];
// };



export const calculateDevPoint = (temperature, humidity) => {

   const a = 17.27;
   const b = 237.7;

   const ft = (a * temperature) / (b + temperature) + Math.log(humidity / 100);
   const devPoint = (b * ft) / (a - ft);

   return devPoint.toFixed(1);
};



export const convertPressure = (pressure) => {
   
   const mmHg = pressure * 0.750063755419211;
   return mmHg.toFixed(2);
};



export const getWeatherForecastData = (data) => {        // данные с сервера  data = [{},{},{}]
   
   const forecast = data.list.filter((item) => {         // полуичм массив из 5 элементов(5 дней) [{},{},{},{},{}], котрые подходят под условие. Отличие от map() в том что map возвращает все элементы масива, а  filter вернет только те котрые подходят под условие
        
      return new Date(item.dt_txt).getHours() === 12 && new Date(item.dt_txt).getDate() > new Date().getDate() 
      && new Date(item.dt_txt).getDate() < new Date().getDate() + 5;  // dt_txt="2023-06-23 15:00:00"
   });
   console.log('forecast filter:  ', forecast);


   const forecastDays = forecast.map((item) => {

      const date = new Date(item.dt_txt);          // dt_txt = "2023-06-26 12:00:00"
      console.log('date: ', date, 'date.getDay(): ', date.getDay());  // Tue Jun 27 2023 12:00:00 GMT+0300 (Москва, стандартное время),  date.getDay():  2
      const weekdaysShort = ['вск', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ];
      const dayOfWeek = weekdaysShort[date.getDay()];

      const weatherIcon = item.weather[0].icon;

      let minTemp = Infinity;     // item.main.temp_min;
      let maxTemp = -Infinity;    // item.main.temp_max;

      for(let i = 0; i < data.list.length; i++){
         const temp = data.list[i].main.temp;               // 299.87
         const tempDate = new Date(data.list[i].dt_txt);    // Fri Jun 30 2023 03:00:00 GMT+0300 (Москва, стандартное время)
         
         if(tempDate.getDate() === date.getDate() && temp < minTemp){
            minTemp = temp;
         }

         if(tempDate.getDate() === date.getDate() && temp > maxTemp){
            maxTemp = temp;
         }
      }
      
      return { dayOfWeek, weatherIcon, minTemp, maxTemp };
   });

   return forecastDays;  // [ {dayOfWeek, weatherIcon, minTemp, maxTemp }, {dayOfWeek, weatherIcon, minTemp, maxTemp } ]
};