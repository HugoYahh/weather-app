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



  //Handle the weather Display Footer


}