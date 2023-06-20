

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

}