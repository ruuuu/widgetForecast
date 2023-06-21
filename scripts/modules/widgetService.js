//  отрисовка виджета:
import {renderWidgetToday, renderWidgetOther, renderWidgetForecast, showError } from './render.js';
import { fetchWeather } from './apiService.js';



export const startWidget = async () => {
      
      const widget = document.createElement('div');
      //widget.className = 'widget';
      widget.classList.add('widget');
      const dataWeather = await fetchWeather('Москва');  // иначе вернет промис, без await

      if(dataWeather.success){
            renderWidgetToday(widget, dataWeather.data);       // 1 ый блок
            renderWidgetOther(widget, dataWeather.data);       // 2 ой блок
      }else{
            showError(widget, );
      }


      renderWidgetForecast(widget);    // 3 ий блок

      return widget;          // <div class="widget"></div>
}
