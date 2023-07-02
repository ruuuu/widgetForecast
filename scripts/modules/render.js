import { getCurrentDateTime,  calculateDevPoint, convertPressure, getWeatherForecastData } from "./util.js";



export const renderWidgetToday = (widget, data) => {  // 1 ый блок <div></div>, data = {}

      //const currentDateTime = getCurrentDateTime(); // { day, month, year, dayOffMonth, dayOfWeek, hours, minutes }
      // либо через деструктуризацию:
      const { month, year, dayOffMonth, dayOfWeek, hours, minutes } = getCurrentDateTime();
    

      widget.insertAdjacentHTML(
            'beforeend',
            `
             <div class="widget__today">
                  <div class="widget__date-block">
                        <p class="widget__date">${dayOffMonth} ${month} ${year}</p>
                        <p class="widget__time">${hours} : ${minutes}</p>
                        <p class="widget__day">${dayOfWeek}</p>
                  </div>
                  <div class="widget__icon">
                        <img class="widget__img" src="./icon/${data.weather[0].icon}.svg" alt="Погода">
                  </div>
                  <div class="widget__wheather">
                        <div class="widget__city">
                              <p>${data.name}</p>
                              <button class="widget__change-city" aria-label="Изменить город"></button>
                        </div>
                        <p class="widget__temp-big">${(data.main.temp - 273.15).toFixed(2)} °C</p>
                        <p class="widget__felt">ощущается</p>
                        <p class="widget__temp-small">${(data.main.feels_like - 273.15).toFixed(2)} °C</p>
                  </div>
            </div>
            `
      );
} 


export const renderWidgetOther= (widget, data) => {    // 2 ой блок   <div></div>. data = {}
      const {} = data;  // деструткризация

      widget.insertAdjacentHTML('beforeend', `
            <div class="widget__other">
                  <div class="widget__wind">
                        <p class="widget__wind-title">Ветер</p>
                        <p class="widget__wind-speed">${data.wind.speed} м/с</p>
                        <p class="widget__wind-text" style="transform: rotate(${data.wind.deg});">&#8595;</p>
                  </div>
                  <div class="widget__humidity">
                        <p class="widget__humidity-title">Влажность</p>
                        <p class="widget__humidity-value">${data.main.humidity}%</p>
                        <p class="widget__humidity-text">Т.Р: ${calculateDevPoint((data.main.temp - 273.15), data.main.humidity)} °C</p>
                  </div>
                  <div class="widget__pressure">
                        <p class="widget__pressure-title">Давление</p>
                        <p class="widget__pressure-value">${convertPressure(data.main.pressure)}</p>
                        <p class="widget__pressure-text">мм рт.ст.</p>
                  </div>
            </div>
            `
      );
}   


export const renderWidgetForecast = (widget,  data) => {     // 3 ий блок  <div></div>
      console.log('data forecast from sever ', data);

      const widgetForecast = document.createElement('ul');
      widgetForecast.className = 'widget__forecast';
      widget.append(widgetForecast);

      const forecastData = getWeatherForecastData(data);  // вернет массив из 5 элеменв [{dayOfWeek, weatherIcon, minTemp, maxTemp }, {dayOfWeek, weatherIcon, minTemp, maxTemp }]
      console.log('forecastData in render.js : ', forecastData);

      const items = forecastData.map((item) => {    // map возвращает массив [li, li, li, li], forEach() не возвращает ничего
           
            const widgetDayItem = document.createElement('li');
            widgetDayItem.className = 'widget__day-item';
            widgetDayItem.insertAdjacentHTML('beforeend',  `
                  <p class="widget__day-text">${item.dayOfWeek}</p>
                  <img class="widget__day-img" src="./icon/${item.weatherIcon}.svg" alt="Погода">
                  <p class="widget__day-temp">${(item.minTemp - 273.15).toFixed(1)}°/${(item.maxTemp - 273.15).toFixed(1)}°</p>
            `);
            
            return widgetDayItem;  // <li></li>
      });  

      widgetForecast.append(...items);  // items = [ li.widget__day-item, li.widget__day-item, li.widget__day-item, li ], ... - спред оператор
};




export const showError = (widget, error) => {  // widget = <div></div>
      
      widget.textContent = error.toString();
      widget.classList.add('widget--error');
};