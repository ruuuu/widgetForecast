import { startWidget } from './modules/widgetService.js';



const initWidget = (app) => {
     
      const widget = startWidget();                         // создание виджета
      app.append(widget);

}

// document - объект который формируется в браузере на основе html файла


initWidget(document.querySelector('#app')); 