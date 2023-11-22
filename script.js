const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5da626a4a7mshb4af844a303be23p16d3c9jsnf101f0585af3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// Function to categorize temperature
const categorizeTemperature = (temperature) => {
	if (temperature < 0) {
		return "Very Cold";
	} else if (temperature < 10) {
		return "Cold";
	} else if (temperature < 20) {
		return "Cool";
	} else if (temperature < 30) {
		return "Mild";
	} else if (temperature < 40) {
		return "Warm";
	} else if (temperature < 50) {
		return "Warmer";
	} else {
		return "Hot";
	}
};

// Function to categorize humidity
const categorizeHumidity = (humidity) => {
	if (humidity < 30) {
		return "Dry";
	} else if (humidity < 50) {
		return "Comfortable";
	} else if (humidity < 70) {
		return "Moderately Humid";
	} else {
		return "Humid";
	}
};

// Function to categorize wind speed
const categorizeWindSpeed = (windSpeed) => {
	if (windSpeed < 5) {
		return "Calm";
	} else if (windSpeed < 15) {
		return "Light Breeze";
	} else if (windSpeed < 25) {
		return "Moderate Breeze";
	} else if (windSpeed < 35) {
		return "Fresh Breeze";
	} else {
		return "Strong Wind";
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			cloud_pct.innerHTML = response.cloud_pct;
			temp.innerHTML = response.temp;
			temp2.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			humidity2.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_speed2.innerHTML = response.wind_speed;
			// wind_degrees.innerHTML = response.wind_degrees;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;

			const weatherFeeling1 = categorizeTemperature(response.temp);
			document.getElementById('temp-feeling').textContent = `Feeling: ${weatherFeeling1}`;

			const weatherFeeling2 = categorizeHumidity(response.humidity);
			document.getElementById('humidity-feeling').textContent = `Feeling: ${weatherFeeling2}`;

			const weatherFeeling3 = categorizeWindSpeed(response.wind_speed);
			document.getElementById('wind-speed-feeling').textContent = `Feeling: ${weatherFeeling3}`;
		})
		.catch(err => console.error(err));
};

submit.addEventListener('click', (e) => {
	e.preventDefault();
	getWeather(city.value);
});

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
	.then(shanghai => shanghai.json())
	.then(shanghai => {
		console.log(shanghai);
		cloud_pct1.innerHTML = shanghai.cloud_pct;
		temp1.innerHTML = shanghai.temp;
		feels_like1.innerHTML = shanghai.feels_like;
		humidity1.innerHTML = shanghai.humidity;
		min_temp1.innerHTML = shanghai.min_temp;
		max_temp1.innerHTML = shanghai.max_temp;
		wind_speed1.innerHTML = shanghai.wind_speed;
		wind_degrees1.innerHTML = shanghai.wind_degrees;
		sunrise1.innerHTML = shanghai.sunrise;
		sunset1.innerHTML = shanghai.sunset;

	})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
	.then(boston => boston.json())
	.then(boston => {
		console.log(boston);
		cloud_pct2.innerHTML = boston.cloud_pct;
		temp3.innerHTML = boston.temp;
		feels_like2.innerHTML = boston.feels_like;
		humidity3.innerHTML = boston.humidity;
		min_temp2.innerHTML = boston.min_temp;
		max_temp2.innerHTML = boston.max_temp;
		wind_speed3.innerHTML = boston.wind_speed;
		wind_degrees2.innerHTML = boston.wind_degrees;
		sunrise2.innerHTML = boston.sunrise;
		sunset2.innerHTML = boston.sunset;

	})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai', options)
	.then(dubai => dubai.json())
	.then(dubai => {
		console.log(dubai);
		cloud_pct3.innerHTML = dubai.cloud_pct;
		temp4.innerHTML = dubai.temp;
		feels_like3.innerHTML = dubai.feels_like;
		humidity4.innerHTML = dubai.humidity;
		min_temp3.innerHTML = dubai.min_temp;
		max_temp3.innerHTML = dubai.max_temp;
		wind_speed4.innerHTML = dubai.wind_speed;
		wind_degrees3.innerHTML = dubai.wind_degrees;
		sunrise3.innerHTML = dubai.sunrise;
		sunset3.innerHTML = dubai.sunset;

	})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=maldives', options)
	.then(maldives => maldives.json())
	.then(maldives => {
		console.log(maldives);
		cloud_pct4.innerHTML = maldives.cloud_pct;
		temp5.innerHTML = maldives.temp;
		feels_like4.innerHTML = maldives.feels_like;
		humidity5.innerHTML = maldives.humidity;
		min_temp4.innerHTML = maldives.min_temp;
		max_temp4.innerHTML = maldives.max_temp;
		wind_speed5.innerHTML = maldives.wind_speed;
		wind_degrees4.innerHTML = maldives.wind_degrees;
		sunrise4.innerHTML = maldives.sunrise;
		sunset4.innerHTML = maldives.sunset;

	})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
	.then(london => london.json())
	.then(london => {
		console.log(london);
		cloud_pct5.innerHTML = london.cloud_pct;
		temp6.innerHTML = london.temp;
		feels_like5.innerHTML = london.feels_like;
		humidity6.innerHTML = london.humidity;
		min_temp5.innerHTML = london.min_temp;
		max_temp5.innerHTML = london.max_temp;
		wind_speed6.innerHTML = london.wind_speed;
		wind_degrees5.innerHTML = london.wind_degrees;
		sunrise5.innerHTML = london.sunrise;
		sunset5.innerHTML = london.sunset;

	})

// Initial call to get weather for Delhi
getWeather("Delhi");
