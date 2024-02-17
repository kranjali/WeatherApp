
const apiKey="af8d16c4038e057f2fea98b620abbe8c";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const checkWeather = async(city)=>{
    try{
        document.querySelector(".error").style.display="none";
    const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await respone.json();

   
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
      document.querySelector(".weather").style.display="block";
}catch(err){
    
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}

}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})
