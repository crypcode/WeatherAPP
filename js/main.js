async function getData(city){
    let url = 'https://api.meteo.lt/v1/places/'+city+'/forecasts/long-term';
    let response = await fetch(url);
    return await response.json();

}


async function showData() {
    const data = await getData('Kaunas');
    console.log(data['forecastTimestamps'][0])
    let Alldata = data['forecastTimestamps'];
    //console.log(val)

    //------ #1 valandinis stulpelis
    let time = document.getElementById("time");
    let temp = document.getElementById("temp");
    let wet = document.getElementById("wet");
    let wind = document.getElementById("wind");
    // iskerpa is stringo valandas
    var str = Alldata[0]['forecastTimeUtc']; 
    var res = str.slice(-8,-3);
    //console.log(res)
    time.textContent = res+'';
    temp.textContent = Alldata[0]['airTemperature']+'°';
    wet.textContent = Alldata[0]['totalPrecipitation']+'mm';
    wind.textContent = Alldata[0]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #2 valandinis stulpelis
    let time2 = document.getElementById("time2");
    let temp2 = document.getElementById("temp2");
    let wet2 = document.getElementById("wet2");
    let wind2 = document.getElementById("wind2");
    // iskerpa is stringo valandas
    var str2 = Alldata[1]['forecastTimeUtc']; 
    var res2 = str2.slice(-8,-3);
    time2.textContent = res2+'';
    temp2.textContent = Alldata[1]['airTemperature']+'°';
    wet2.textContent = Alldata[1]['totalPrecipitation']+'mm';
    wind2.textContent = Alldata[1]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #3 valandinis stulpelis
    let time3 = document.getElementById("time3");
    let temp3 = document.getElementById("temp3");
    let wet3 = document.getElementById("wet3");
    let wind3 = document.getElementById("wind3");
    // iskerpa is stringo valandas
    var str3 = Alldata[2]['forecastTimeUtc']; 
    var res3 = str3.slice(-8,-3);
    time3.textContent = res3+'';
    temp3.textContent = Alldata[2]['airTemperature']+'°';
    wet3.textContent = Alldata[2]['totalPrecipitation']+'mm';
    wind3.textContent = Alldata[2]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #4 valandinis stulpelis
    let time4 = document.getElementById("time4");
    let temp4 = document.getElementById("temp4");
    let wet4 = document.getElementById("wet4");
    let wind4 = document.getElementById("wind4");
    // iskerpa is stringo valandas
    var str4 = Alldata[3]['forecastTimeUtc']; 
    var res4 = str4.slice(-8,-3);
    time4.textContent = res4+'';
    temp4.textContent = Alldata[3]['airTemperature']+'°';
    wet4.textContent = Alldata[3]['totalPrecipitation']+'mm';
    wind4.textContent = Alldata[3]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #5 valandinis stulpelis
    let time5 = document.getElementById("time5");
    let temp5 = document.getElementById("temp5");
    let wet5 = document.getElementById("wet5");
    let wind5 = document.getElementById("wind5");
    // iskerpa is stringo valandas
    var str5 = Alldata[4]['forecastTimeUtc']; 
    var res5 = str5.slice(-8,-3);
    time5.textContent = res5+'';
    temp5.textContent = Alldata[4]['airTemperature']+'°';
    wet5.textContent = Alldata[4]['totalPrecipitation']+'mm';
    wind5.textContent = Alldata[4]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #6 valandinis stulpelis
    let time6 = document.getElementById("time6");
    let temp6 = document.getElementById("temp6");
    let wet6 = document.getElementById("wet6");
    let wind6 = document.getElementById("wind6");
    // iskerpa is stringo valandas
    var str6 = Alldata[5]['forecastTimeUtc']; 
    var res6 = str6.slice(-8,-3);
    time6.textContent = res6+'';
    temp6.textContent = Alldata[5]['airTemperature']+'°';
    wet6.textContent = Alldata[5]['totalPrecipitation']+'mm';
    wind6.textContent = Alldata[5]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #7 valandinis stulpelis
    let time7 = document.getElementById("time7");
    let temp7 = document.getElementById("temp7");
    let wet7 = document.getElementById("wet7");
    let wind7 = document.getElementById("wind7");
    // iskerpa is stringo valandas
    var str7 = Alldata[6]['forecastTimeUtc']; 
    var res7 = str7.slice(-8,-3);
    time7.textContent = res7+'';
    temp7.textContent = Alldata[6]['airTemperature']+'°';
    wet7.textContent = Alldata[6]['totalPrecipitation']+'mm';
    wind7.textContent = Alldata[6]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #8 valandinis stulpelis
    let time8 = document.getElementById("time8");
    let temp8 = document.getElementById("temp8");
    let wet8 = document.getElementById("wet8");
    let wind8 = document.getElementById("wind8");
    // iskerpa is stringo valandas
    var str8 = Alldata[7]['forecastTimeUtc']; 
    var res8 = str8.slice(-8,-3);
    time8.textContent = res8+'';
    temp8.textContent = Alldata[7]['airTemperature']+'°';
    wet8.textContent = Alldata[7]['totalPrecipitation']+'mm';
    wind8.textContent = Alldata[7]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #9 valandinis stulpelis
    let time9 = document.getElementById("time9");
    let temp9 = document.getElementById("temp9");
    let wet9 = document.getElementById("wet9");
    let wind9 = document.getElementById("wind9");
    // iskerpa is stringo valandas
    var str9 = Alldata[8]['forecastTimeUtc']; 
    var res9 = str9.slice(-8,-3);
    time9.textContent = res9+'';
    temp9.textContent = Alldata[8]['airTemperature']+'°';
    wet9.textContent = Alldata[8]['totalPrecipitation']+'mm';
    wind9.textContent = Alldata[8]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #10 valandinis stulpelis
    let time10 = document.getElementById("time10");
    let temp10= document.getElementById("temp10");
    let wet10 = document.getElementById("wet10");
    let wind10 = document.getElementById("wind10");
    // iskerpa is stringo valandas
    var str10 = Alldata[9]['forecastTimeUtc']; 
    var res10 = str10.slice(-8,-3);
    time10.textContent = res10+'';
    temp10.textContent = Alldata[9]['airTemperature']+'°';
    wet10.textContent = Alldata[9]['totalPrecipitation']+'mm';
    wind10.textContent = Alldata[9]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #11 valandinis stulpelis
    let time11 = document.getElementById("time11");
    let temp11= document.getElementById("temp11");
    let wet11 = document.getElementById("wet11");
    let wind11 = document.getElementById("wind11");
    // iskerpa is stringo valandas
    var str11 = Alldata[10]['forecastTimeUtc']; 
    var res11 = str11.slice(-8,-3);
    time11.textContent = res11+'';
    temp11.textContent = Alldata[10]['airTemperature']+'°';
    wet11.textContent = Alldata[10]['totalPrecipitation']+'mm';
    wind11.textContent = Alldata[10]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #12 valandinis stulpelis
    let time12 = document.getElementById("time12");
    let temp12= document.getElementById("temp12");
    let wet12 = document.getElementById("wet12");
    let wind12 = document.getElementById("wind12");
    // iskerpa is stringo valandas
    var str12 = Alldata[11]['forecastTimeUtc']; 
    var res12 = str12.slice(-8,-3);
    time12.textContent = res12+'';
    temp12.textContent = Alldata[11]['airTemperature']+'°';
    wet12.textContent = Alldata[11]['totalPrecipitation']+'mm';
    wind12.textContent = Alldata[11]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #13 valandinis stulpelis
    let time13 = document.getElementById("time13");
    let temp13= document.getElementById("temp13");
    let wet13 = document.getElementById("wet13");
    let wind13 = document.getElementById("wind13");
    // iskerpa is stringo valandas
    var str13 = Alldata[12]['forecastTimeUtc']; 
    var res13 = str13.slice(-8,-3);
    time13.textContent = res13+'';
    temp13.textContent = Alldata[12]['airTemperature']+'°';
    wet13.textContent = Alldata[12]['totalPrecipitation']+'mm';
    wind13.textContent = Alldata[12]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #14 valandinis stulpelis
    let time14 = document.getElementById("time14");
    let temp14= document.getElementById("temp14");
    let wet14 = document.getElementById("wet14");
    let wind14 = document.getElementById("wind14");
    // iskerpa is stringo valandas
    var str14 = Alldata[13]['forecastTimeUtc']; 
    var res14 = str14.slice(-8,-3);
    time14.textContent = res14+'';
    temp14.textContent = Alldata[13]['airTemperature']+'°';
    wet14.textContent = Alldata[13]['totalPrecipitation']+'mm';
    wind14.textContent = Alldata[13]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #15 valandinis stulpelis
    let time15 = document.getElementById("time15");
    let temp15= document.getElementById("temp15");
    let wet15 = document.getElementById("wet15");
    let wind15 = document.getElementById("wind15");
    // iskerpa is stringo valandas
    var str15 = Alldata[14]['forecastTimeUtc']; 
    var res15 = str15.slice(-8,-3);
    time15.textContent = res15+'';
    temp15.textContent = Alldata[14]['airTemperature']+'°';
    wet15.textContent = Alldata[14]['totalPrecipitation']+'mm';
    wind15.textContent = Alldata[14]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #16 valandinis stulpelis
    let time16 = document.getElementById("time16");
    let temp16= document.getElementById("temp16");
    let wet16 = document.getElementById("wet16");
    let wind16 = document.getElementById("wind16");
    // iskerpa is stringo valandas
    var str16 = Alldata[15]['forecastTimeUtc']; 
    var res16 = str16.slice(-8,-3);
    time16.textContent = res16+'';
    temp16.textContent = Alldata[15]['airTemperature']+'°';
    wet16.textContent = Alldata[15]['totalPrecipitation']+'mm';
    wind16.textContent = Alldata[15]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #17 valandinis stulpelis
    let time17 = document.getElementById("time17");
    let temp17= document.getElementById("temp17");
    let wet17 = document.getElementById("wet17");
    let wind17 = document.getElementById("wind17");
    // iskerpa is stringo valandas
    var str17 = Alldata[16]['forecastTimeUtc']; 
    var res17 = str17.slice(-8,-3);
    time17.textContent = res17+'';
    temp17.textContent = Alldata[16]['airTemperature']+'°';
    wet17.textContent = Alldata[16]['totalPrecipitation']+'mm';
    wind17.textContent = Alldata[16]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #18 valandinis stulpelis
    let time18 = document.getElementById("time18");
    let temp18= document.getElementById("temp18");
    let wet18 = document.getElementById("wet18");
    let wind18 = document.getElementById("wind18");
    // iskerpa is stringo valandas
    var str18 = Alldata[17]['forecastTimeUtc']; 
    var res18 = str18.slice(-8,-3);
    time18.textContent = res18+'';
    temp18.textContent = Alldata[17]['airTemperature']+'°';
    wet18.textContent = Alldata[17]['totalPrecipitation']+'mm';
    wind18.textContent = Alldata[17]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #19 valandinis stulpelis
    let time19 = document.getElementById("time19");
    let temp19= document.getElementById("temp19");
    let wet19 = document.getElementById("wet19");
    let wind19 = document.getElementById("wind19");
    // iskerpa is stringo valandas
    var str19 = Alldata[18]['forecastTimeUtc']; 
    var res19 = str19.slice(-8,-3);
    time19.textContent = res19+'';
    temp19.textContent = Alldata[18]['airTemperature']+'°';
    wet19.textContent = Alldata[18]['totalPrecipitation']+'mm';
    wind19.textContent = Alldata[18]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #20 valandinis stulpelis
    let time20 = document.getElementById("time20");
    let temp20= document.getElementById("temp20");
    let wet20 = document.getElementById("wet20");
    let wind20 = document.getElementById("wind20");
    // iskerpa is stringo valandas
    var str20 = Alldata[19]['forecastTimeUtc']; 
    var res20 = str20.slice(-8,-3);
    time20.textContent = res20+'';
    temp20.textContent = Alldata[19]['airTemperature']+'°';
    wet20.textContent = Alldata[19]['totalPrecipitation']+'mm';
    wind20.textContent = Alldata[19]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #21 valandinis stulpelis
    let time21 = document.getElementById("time21");
    let temp21= document.getElementById("temp21");
    let wet21 = document.getElementById("wet21");
    let wind21 = document.getElementById("wind21");
    // iskerpa is stringo valandas
    var str21 = Alldata[20]['forecastTimeUtc']; 
    var res21 = str21.slice(-8,-3);
    time21.textContent = res21+'';
    temp21.textContent = Alldata[20]['airTemperature']+'°';
    wet21.textContent = Alldata[20]['totalPrecipitation']+'mm';
    wind21.textContent = Alldata[20]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #22 valandinis stulpelis
    let time22 = document.getElementById("time22");
    let temp22= document.getElementById("temp22");
    let wet22 = document.getElementById("wet22");
    let wind22 = document.getElementById("wind22");
    // iskerpa is stringo valandas
    var str22 = Alldata[21]['forecastTimeUtc']; 
    var res22 = str22.slice(-8,-3);
    time22.textContent = res22+'';
    temp22.textContent = Alldata[21]['airTemperature']+'°';
    wet22.textContent = Alldata[21]['totalPrecipitation']+'mm';
    wind22.textContent = Alldata[21]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #23 valandinis stulpelis
    let time23 = document.getElementById("time23");
    let temp23= document.getElementById("temp23");
    let wet23 = document.getElementById("wet23");
    let wind23 = document.getElementById("wind23");
    // iskerpa is stringo valandas
    var str23 = Alldata[22]['forecastTimeUtc']; 
    var res23 = str23.slice(-8,-3);
    time23.textContent = res23+'';
    temp23.textContent = Alldata[22]['airTemperature']+'°';
    wet23.textContent = Alldata[22]['totalPrecipitation']+'mm';
    wind23.textContent = Alldata[22]['windSpeed']+'m/s';
    //--------------------------------------
    //------ #24 valandinis stulpelis
    let time24 = document.getElementById("time24");
    let temp24= document.getElementById("temp24");
    let wet24 = document.getElementById("wet24");
    let wind24 = document.getElementById("wind24");
    // iskerpa is stringo valandas
    var str24 = Alldata[23]['forecastTimeUtc']; 
    var res24 = str24.slice(-8,-3);
    time24.textContent = res24+'';
    temp24.textContent = Alldata[23]['airTemperature']+'°';
    wet24.textContent = Alldata[23]['totalPrecipitation']+'mm';
    wind24.textContent = Alldata[23]['windSpeed']+'m/s';
    //--------------------------------------
}
showData()




