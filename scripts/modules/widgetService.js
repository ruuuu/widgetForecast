//  отрисовка виджета:
import {renderWidgetToday, renderWidgetOther, renderWidgetForecast, showError } from './render.js';
import { fetchWeather, fetchForecast } from './apiService.js';



export const startWidget = async () => { // ставим async потому что внутри есть await fetchWeather('Сочи')
      
      const widget = document.createElement('div');
      //widget.className = 'widget';
      widget.classList.add('widget');
      const dataWeather = await fetchWeather('Калининград');  // иначе вернет промис, без await

      if(dataWeather.success){
            renderWidgetToday(widget, dataWeather.data);       // 1-ый блок
            renderWidgetOther(widget, dataWeather.data);       // 2-ой блок
      }else{
            showError(dataWeather.err);
      }


      //
      const dataForecast = await fetchForecast('Сочи');
      if(dataForecast.success){
            renderWidgetForecast(widget, dataForecast.data);       // 3-й блок         
      }else{
            showError(dataForecast.err);
      }

      return widget;          // <div class="widget"></div>
}
