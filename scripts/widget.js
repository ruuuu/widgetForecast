import { startWidget } from './modules/widgetService.js';
// document - объект который формируется в браузере на основе html файла



const initWidget = async (app) => {
      const widget = await startWidget();                         // создание виджета, тк startWidget() -асинхронная, поэтому ставм await
      app.append(widget);
    
}




initWidget(document.querySelector('#app')); 