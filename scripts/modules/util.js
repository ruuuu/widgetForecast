
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



export const getWindDirection = (deg) => {
   const directions = ['&#8594;', '&#8592;', '&#8593;', '&#8595;', '&#10136;', '&#10138;', '&#11016;', '&#11017;', '&#11018;', '&#11019;'];

   const i = Math.round(deg / 45) % 8;
   return directions[i];

};



export const calculateDevPoint = (temperature, humidity) => {

   const a = 17.27;
   const b = 237.7;

   const ft = (a * temperature) / (b + temperature) + Math.log(humidity / 100);
   const devPoint = (b * ft) / (a - ft);

   return devPoint.toFixed(1);
};


export const convertPressure = (pressure)=> {
   const mmHg = pressure * 0.750063755419211;
   return mmHg.toFixed(2);

};