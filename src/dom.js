import searchIcon from './assets/images/magnifying-glass-solid-full.svg';
import cloudIcon from './assets/images/cloud.svg'
import rainIcon from './assets/images/rain.svg'
import moonIcon from './assets/images/moon.svg'
import overcastIcon from './assets/images/overcast.svg'
import stormIcon from './assets/images/storm.svg'
import sunIcon from './assets/images/sun.svg'
import sunriseIcon from './assets/images/sunrise.svg'
import sunsetIcon from './assets/images/sunset.svg'
import shareIcon from './assets/images/share.svg'
import mapIcon from './assets/images/map.svg'
import moonCloudyIcon from './assets/images/moon-cloudy.svg'
import windIcon from './assets/images/wind.svg'
import snowIcon from './assets/images/snow.svg'
import errorIcon from './assets/images/error.svg'
import { fahrenheitToDegrees } from './helper';

export function loadView(viewName) {
  const main = document.querySelector(".main-content");
  main.innerHTML = "";

  if (viewName === 'home') {
    return;
  } else if (viewName === 'aboutus') {
    main.appendChild(renderAboutUs());
  } else if (viewName === 'signin') {
    main.appendChild(renderSignIn());
  } else if (viewName === 'signup') {
    main.appendChild(renderSignUp());
  } else if (viewName === 'account') {
    main.appendChild(renderAccount());
  } else {
    main.textContent = "View not implemented yet";
  }
}

export function renderHome(data){
  //Reset current HTML and handle the title
  
  const main = document.querySelector(".main-content");
  main.innerHTML="";

  const homeSection = document.createElement("section")
  homeSection.id = "home-section"
  main.appendChild(homeSection)

  const homeTitle = document.createElement("h1")
  homeTitle.textContent="What's the weather today ?"
  homeSection.appendChild(homeTitle)

  //Handle the searchBar

  const homeForm = document.createElement("form")
  homeForm.action="";
  homeForm.id="form"
  homeSection.appendChild(homeForm)

  const searchBar = document.createElement("div")
  searchBar.classList.add("search")
  homeForm.appendChild(searchBar)

  const searchInput = document.createElement("input")
  searchInput.type="search"
  searchInput.id="search"
  searchInput.placeholder="Find a location"
  searchBar.appendChild(searchInput)

  const searchLogoSpan = document.createElement("span")
  searchLogoSpan.classList.add("search-icon")
  searchBar.appendChild(searchLogoSpan)

  const searchLogo = document.createElement("img")
  searchLogo.id="search-logo"
  searchLogo.src= searchIcon
  searchLogoSpan.appendChild(searchLogo)
  
  //Handle the weather Display Header

  const weatherDisplayDiv = document.createElement("div")
  weatherDisplayDiv.classList.add("weather-display")
  homeSection.appendChild(weatherDisplayDiv)

  const weatherDisplayHeaderDiv = document.createElement("div")
  weatherDisplayHeaderDiv.classList.add("weather-display-header")
  weatherDisplayDiv.appendChild(weatherDisplayHeaderDiv)

  const weatherDisplayHeaderLeftDiv = document.createElement("div")
  weatherDisplayHeaderLeftDiv.classList.add("weather-display-header-left")
  weatherDisplayHeaderDiv.appendChild(weatherDisplayHeaderLeftDiv)

  const weatherDisplayHeaderLeftDivImage = document.createElement("img")
  weatherDisplayHeaderLeftDivImage.classList.add("weather-display-header-logo")
  weatherDisplayHeaderLeftDiv.appendChild(weatherDisplayHeaderLeftDivImage)

  if(data.currentIcon==="partly-cloudy-day"){
    weatherDisplayHeaderLeftDivImage.src=overcastIcon;
  } else if (data.currentIcon==="clear-day"){
    weatherDisplayHeaderLeftDivImage.src=sunIcon;
  } else if(data.currentIcon==="clear-night"){
    weatherDisplayHeaderLeftDivImage.src=moonIcon;
  } else if(data.currentIcon==="partly-cloudy-night"){
    weatherDisplayHeaderLeftDivImage.src=moonCloudyIcon;
  } else if(data.currentIcon==="cloudy"){
    weatherDisplayHeaderLeftDivImage.src=cloudIcon;
  } else if(data.currentIcon==="wind"){
    weatherDisplayHeaderLeftDivImage.src=windIcon;
  } else if(data.currentIcon==="rain"){
    weatherDisplayHeaderLeftDivImage.src=rainIcon;
  } else if(data.currentIcon==="snow"){
    weatherDisplayHeaderLeftDivImage.src=snowIcon;
  } else if(data.currentIcon==="thunderstorm"){
    weatherDisplayHeaderLeftDivImage.src=stormIcon;
  } else {
    weatherDisplayHeaderLeftDivImage.src=errorIcon;
  }

  const weatherDisplayHeaderLeftDivSpan = document.createElement("span")
  weatherDisplayHeaderLeftDivSpan.classList.add("weather-display-header-name")
  weatherDisplayHeaderLeftDivSpan.textContent=data.address[0].toUpperCase()+data.address.slice(1);
  weatherDisplayHeaderLeftDiv.appendChild(weatherDisplayHeaderLeftDivSpan)

  const weatherDisplayHeaderRightDiv = document.createElement("div")
  weatherDisplayHeaderRightDiv.classList.add("weather-display-header-right")
  weatherDisplayHeaderDiv.appendChild(weatherDisplayHeaderRightDiv)

  const weatherDisplayHeaderRightDivTopArrow = document.createElement("span")
  weatherDisplayHeaderRightDivTopArrow.textContent="↑"
  weatherDisplayHeaderRightDiv.appendChild(weatherDisplayHeaderRightDivTopArrow)

  const weatherDisplayHeaderRightDivTopTemp = document.createElement("span")
  weatherDisplayHeaderRightDivTopTemp.textContent=data.maxTemp+"°"
  weatherDisplayHeaderRightDivTopTemp.id="middle"
  weatherDisplayHeaderRightDiv.appendChild(weatherDisplayHeaderRightDivTopTemp)

  const weatherDisplayHeaderRightDivDownArrow = document.createElement("span")
  weatherDisplayHeaderRightDivDownArrow.textContent="↓"
  weatherDisplayHeaderRightDiv.appendChild(weatherDisplayHeaderRightDivDownArrow)

  const weatherDisplayHeaderRightDivBottomTemp = document.createElement("span")
  weatherDisplayHeaderRightDivBottomTemp.textContent=data.minTemp+"°"
  weatherDisplayHeaderRightDiv.appendChild(weatherDisplayHeaderRightDivBottomTemp)
    
  //Handle the weather Display Main

  const weatherDisplayMainDiv = document.createElement("div")
  weatherDisplayMainDiv.classList.add("weather-display-main")
  weatherDisplayDiv.appendChild(weatherDisplayMainDiv)

  for(let i = 0 ; i < 24 ; i++){
    const weatherDisplayMainHourlyDiv = document.createElement("div")
    weatherDisplayMainHourlyDiv.classList.add("weather-display-main-hourly")
    weatherDisplayMainDiv.appendChild(weatherDisplayMainHourlyDiv)

    const weatherDisplayMainHourlyDivTemp = document.createElement("span")
    weatherDisplayMainHourlyDivTemp.classList.add("weather-display-main-hourly-temp")
    weatherDisplayMainHourlyDivTemp.textContent=fahrenheitToDegrees(data.hourly[i].temp)+"°"
    weatherDisplayMainHourlyDiv.appendChild(weatherDisplayMainHourlyDivTemp)

    const weatherDisplayMainHourlyDivImg = document.createElement("img")
    weatherDisplayMainHourlyDivImg.classList.add("weather-display-main-hourly-logo")

    if(data.hourly[i].icon==="partly-cloudy-day"){
      weatherDisplayMainHourlyDivImg.src=overcastIcon;
    } else if (data.hourly[i].icon==="clear-day"){
      weatherDisplayMainHourlyDivImg.src=sunIcon;
    } else if(data.hourly[i].icon==="clear-night"){
      weatherDisplayMainHourlyDivImg.src=moonIcon;
    } else if(data.hourly[i].icon==="partly-cloudy-night"){
      weatherDisplayMainHourlyDivImg.src=moonCloudyIcon;
    } else if(data.hourly[i].icon==="cloudy"){
      weatherDisplayMainHourlyDivImg.src=cloudIcon;
    } else if(data.hourly[i].icon==="wind"){
      weatherDisplayMainHourlyDivImg.src=windIcon;
    } else if(data.hourly[i].icon==="rain"){
      weatherDisplayMainHourlyDivImg.src=rainIcon;
    } else if(data.hourly[i].icon==="snow"){
      weatherDisplayMainHourlyDivImg.src=snowIcon;
    } else if(data.hourly[i].icon==="thunderstorm"){
      weatherDisplayMainHourlyDivImg.src=stormIcon;
    } else {
      weatherDisplayMainHourlyDivImg.src=errorIcon;
    }

    weatherDisplayMainHourlyDiv.appendChild(weatherDisplayMainHourlyDivImg);

    const weatherDisplayMainHourlyDivSpan = document.createElement("span")
    weatherDisplayMainHourlyDivSpan.classList.add("weather-display-main-hourly-hour")
    weatherDisplayMainHourlyDivSpan.textContent=data.hourly[i].datetime.slice(0,2) +"h"
    weatherDisplayMainHourlyDiv.appendChild(weatherDisplayMainHourlyDivSpan);

    console.log(data.currentHour)
    
    if (data.hourly[i].datetime.slice(0,2)==data.currentHour.slice(0,2)){
      weatherDisplayMainHourlyDivSpan.textContent = "Now"
      weatherDisplayMainHourlyDivSpan.classList.add("now")
    }

    

  }

  const nowItem = document.querySelector(".now");

    nowItem.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
    

  
 


  //Handle the weather Display Footer

    const weatherDisplayFooterDiv = document.createElement("div")
    weatherDisplayFooterDiv.classList.add("weather-display-footer")
    weatherDisplayDiv.appendChild(weatherDisplayFooterDiv)

    const weatherDisplayFooterLeftDiv = document.createElement("div")
    weatherDisplayFooterLeftDiv.classList.add("weather-display-footer-left")
    weatherDisplayFooterDiv.appendChild(weatherDisplayFooterLeftDiv)

    const weatherDisplayFooterLeftDivHumidity = document.createElement("span")
    weatherDisplayFooterLeftDivHumidity.classList.add("weather-display-footer-left-humidity")
    weatherDisplayFooterLeftDivHumidity.textContent=data.currentHumidity+" %";
    weatherDisplayFooterLeftDiv.appendChild(weatherDisplayFooterLeftDivHumidity)

    const weatherDisplayFooterLeftDivWind = document.createElement("span")
    weatherDisplayFooterLeftDivWind.classList.add("weather-display-footer-left-wind")
    weatherDisplayFooterLeftDivWind.textContent=data.currentWindspeed+" km/h"
    weatherDisplayFooterLeftDiv.appendChild(weatherDisplayFooterLeftDivWind)

    const weatherDisplayFooterRightDiv =document.createElement("div")
    weatherDisplayFooterRightDiv.classList.add("weather-display-footer-right")
    weatherDisplayFooterDiv.appendChild(weatherDisplayFooterRightDiv)

    const weatherDisplayFooterRightDivShare = document.createElement("img")
    weatherDisplayFooterRightDivShare.classList.add("weather-display-footer-right-share","icon")
    weatherDisplayFooterRightDivShare.src = shareIcon;
    weatherDisplayFooterRightDiv.appendChild(weatherDisplayFooterRightDivShare) 

    const weatherDisplayFooterRightDivMap = document.createElement("img")
    weatherDisplayFooterRightDivMap.classList.add("weather-display-footer-right-map","icon")
    weatherDisplayFooterRightDivMap.src = mapIcon;
    weatherDisplayFooterRightDiv.appendChild(weatherDisplayFooterRightDivMap) 



}