// a9398322fcbcaeb55fa83579c0f2b717

const form = document.querySelector('form')
const input = document.querySelector('input[type="text"]')

const weatherDesc = document.querySelector('[data-weather-desc]')
const weatherLocation = document.querySelector('[data-location]')
const temp = document.querySelector('[data-temp]')
const feels = document.querySelector('[data-feels-like]')
const wind = document.querySelector('[data-wind]')
const humidity = document.querySelector('[data-humidity]')


async function getData(town){
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=a9398322fcbcaeb55fa83579c0f2b717`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        populate(data)
    }catch(err){
        alert('error')
    }
}

function populate(data){
    weatherDesc.textContent = data.weather[0].description
    weatherLocation.textContent = `${data.name}, ${data.sys.country}`
    temp.textContent = `${Math.floor(data.main.temp - 273.14)}`
    feels.textContent = `${Math.floor(data.main.feels_like - 273.14)}`
    wind.textContent = `${data.wind.speed}`
    humidity.textContent = `${data.main.humidity}`
}


form.addEventListener('submit', e=>{
    e.preventDefault();
    const value = input.value
    getData(value)
})