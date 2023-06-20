//  отрисовка виджета:
import {renderWidgetToday, renderWidgetOther, renderWidgetForecast } from './render.js';



export const startWidget = () => {
      
      const widget = document.createElement('div');
      //widget.className = 'widget';
      widget.classList.add('widget');

      renderWidgetToday(widget);       // 1 ый блок
      renderWidgetOther(widget);       // 2 ой блок
      renderWidgetForecast(widget);    // 3 ий блок

      return widget;          // <div class="widget"></div>
};
