const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '82f428cf82mshd4cd3a8e69a1cd3p191a1fjsnbe543430f34f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 
const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        temp.innerHTML = response.temp 
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like 
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity  
        min_temp.innerHTML = response.min_temp 
        max_temp.innerHTML = response.max_temp 
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed 
        wind_degrees.innerHTML = response.wind_degrees 
        sunrise.innerHTML = response.sunrise 
        sunset.innerHTML = response.sunset 
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

var hero = document.getElementById("hero");

        var backgroundImg = [
            "./public/1.jpg",
            "./public/2.jpg",
            "./public/3.jpg",
            "./public/4.jpg",
            "./public/5.jpg",
            "./public/6.jpg",
            "./public/7.jpg",
            "./public/8.jpg",
            "./public/9.jpg"
        ];
        var index = 0;

        function changeBackground() {
            hero.style.backgroundImage = 'url("' + backgroundImg[index] + '")';
            index = (index + 1) % backgroundImg.length;
        }

        setInterval(changeBackground, 3000);
