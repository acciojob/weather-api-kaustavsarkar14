//your JS code here. If required.
const btn = document.getElementById('btn')
const result = document.getElementById('weatherData')

btn.onclick = ()=>{
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=7d8db3a49de7c4affd734cb6dfcab991`)
	.then(data=>data.json())
	.then(data=>{
		console.log(data)
	result.innerText = "Current weather in London: "+data.weather[0].main
	})
}