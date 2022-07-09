const mytemp = document.getElementById('temp');
const myLocation = document.getElementById('location');
const myHumidity = document.getElementById('myHumidity')
const myInput = document.getElementById('myIn');
const myWeather = document.getElementById('weather');
const button = document.getElementById('myButton');
const myPressure = document.getElementById('myPressure');
const myDisplay = document.getElementById('myDisplay');
apik = "876d94cf5b3e94e39d8227d7899e6c4d";

function convertion(val){
    return (val - 273).toFixed(2)
}


button.addEventListener('click', function(e){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+myInput.value+'&appid='+apik)
    .then((res) => res.json()).then(data => {
        console.log(data)
        var loc = data['sys'].country
        var weather = data['weather']['0']['description']
        var temp = data['main'].temp
        var pressure = data['main'].pressure
        var thehumidity = data['main'].humidity
       
        
    mytemp.innerHTML = `<b>Temperature</b>: ${convertion(temp)} &degC`
    myLocation.innerHTML = `<b>Location</b>: ${loc}`
    myPressure.innerHTML = `<b>Pressure</b>: ${pressure}`
    myWeather.innerHTML = `<b>Weather</b>: ${weather}`
    myHumidity.innerHTML = `<b>Humidity</b>: ${thehumidity}`


    
    })
});


/*button.addEventListener('click', function(){
    console.log("hjiewfuergfruie")
    var xhr = new XMLHttpRequest;
    var myBase = "https://api.openweathermap.org/data/2.5/weather?q=+myInput.value+'&appid='+apik"
    xhr.open('GET','myBase', true)
    xhr.onload = function(){
        if(this.status == 200){
            console.log("XML Working")
            var places = JSON.parse(this.responseText);
            const str = ""
            for(var i in places){
                str+=  `<p><b>Temperature</b> :${data['main'].temp} C</p>
                <p><b>Weather</b>: </p> ${data['weather']['0']['description']}
                <p><b>Pressure</b>: ${data['main'].pressure}</p>]
                <p><b>Humidity</b>: ${data['main'].pressure}</p>
                <p><b>Location</b>: ${data['sys'].country}</p>`
            }
            myDisplay.innerHTML = str;
        }
    }



})*/

