import {fahrenheitToDegrees} from './helper'


export async function loadData(value) {
  try {
    const data = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+value+"?key=KKCWJMTE67NPVNGU6A5M2KYFK").then(r => r.json());
    console.log(data)
    return  data ;
  } catch (err) {
    console.error("Loading failed:", err);
  }
}

export async function processData(data){
    try{
        const dataNeeded = {
            currentIcon : data.currentConditions.icon,
            currentHumidity : data.currentConditions.humidity,
            currentTemperature : data.currentConditions.temp,
            currentWindspeed : data.currentConditions.windspeed,
            currentHour : data.currentConditions.datetime,
            maxTemp : fahrenheitToDegrees(data.days[0].tempmax),
            minTemp : fahrenheitToDegrees(data.days[0].tempmin),
            address : data.address,
            hourly : data.days[0].hours,
        }
        console.log(dataNeeded);
        return dataNeeded
        

    }
    catch(err){
        console.error("Loading failed :", err);
    }
}