//your JS code here. If required.
const btn = document.getElementById('btn')
const result = document.getElementById('weatherData')

btn.addEventListener('click',()=>{
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=7d8db3a49de7c4affd734cb6dfcab991`)
	.then(data=>data.json())
	.then(response=>{
	result.innerText = `Current weather in London: ${response.weather[0].main}`
	})
} )