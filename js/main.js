async function getData(city){
    let url = 'https://api.meteo.lt/v1/places/'+city+'/forecasts/long-term';
    let response = await fetch(url);
    return await response.json();

}


async function showData(callback) {
    const data = await getData('Kaunas');
    //console.log(data['forecastTimestamps'][0])
    // su let ar var neveikia
    Alldata = data['forecastTimestamps'];
    console.log(Alldata);
    callback();

}
   function createElements(){
       for(let i=0;i<24;i++) {
           const hourBlock = document.querySelector(".hourWeatherCont");
           // Sukuria valandos duomenis
           const hourdiv = document.createElement("div");
           hourdiv.classList.add("hourWeather");
           hourBlock.appendChild(hourdiv);
           //Sukuria laiko p
           const time = document.createElement("p");
           time.classList.add("time");
           hourdiv.append(time);
           // iskerpa is stringo valandas
           var str = Alldata[i]['forecastTimeUtc'];
           var res = str.slice(-8, -3);
           time.textContent = res + '';
           // Sukuria temp p
           const temp = document.createElement("p");
           temp.classList.add("temp");
           hourdiv.append(temp);
           temp.textContent = Alldata[i]['airTemperature'] + '°';
           // Sukuria krituliu p
           const wet = document.createElement("p");
           wet.classList.add("wet");
           hourdiv.append(wet);
           wet.textContent = Alldata[i]['totalPrecipitation'] + 'mm';
           // Sukuria vejo greicio p
           const wind = document.createElement("p");
           wind.classList.add("wind");
           hourdiv.append(wind);
           wind.textContent = Alldata[i]['windSpeed'] + 'm/s';
       }

   }



showData(createElements);




