const apiKey="de538c80985d508019c3fbdc397b6a6f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".input-box input");
const searchBtn=document.querySelector(".input-box button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+`°C`;
    document.querySelector(".measureh").innerHTML=data.main.humidity+`%`;
    document.querySelector(".measurew").innerHTML=data.wind.speed+`km/hr`;

    if(data.weather[0].main=="Clouds")
    {
     weatherIcon.src="clouds.png";   
    }
    else if(data.weather[0].main=="Clear")
    {
     weatherIcon.src="clear.png";   
    }
    else if(data.weather[0].main=="Drizzle")
    {
     weatherIcon.src="drizzle.png";   
    }
    else if(data.weather[0].main=="Mist")
    {
     weatherIcon.src="mist.png";   
    }
    else if(data.weather[0].main=="Snow")
    {
     weatherIcon.src="snow.png";   
    }
    else if(data.weather[0].main=="Rain")
    {
     weatherIcon.src="rain.png";   
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});

