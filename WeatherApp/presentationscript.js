function getLocation() {
    //How would I clear element "b"
    //document.getElementById("test").remove();
    var cit = document.getElementById('cityName').value;
    var sta = document.getElementById('stateName').value;
    console.log("Received " + cit + sta);
    var para = document.createElement("b");
    para.setAttribute("id", "test");
    if (sta === "") {
        var titleCity = document.createTextNode(cit);
        para.appendChild(titleCity);
    } else {
        var titleCity = document.createTextNode(cit + ", " + sta);
        para.appendChild(titleCity);
    }

    var element = document.getElementById("cityState");
    element.appendChild(para);

    getForecast(cit, sta);
    return false;
}

$(".weatherGet").click(function () {
    $(".weathertable").show(10);
});
//Set Table Hidden until Results Render

function getForecast(c, s) {
    var weatherApi = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + c + "%2C%20" + s + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

    $.getJSON(weatherApi, function (data) {

        document.getElementById("date1").innerHTML = data.query.results.channel.item.forecast[0].day; //Can also be .date
        document.getElementById("date2").innerHTML = data.query.results.channel.item.forecast[1].day;
        document.getElementById("date3").innerHTML = data.query.results.channel.item.forecast[2].day;
        document.getElementById("date4").innerHTML = data.query.results.channel.item.forecast[3].day;
        document.getElementById("date5").innerHTML = data.query.results.channel.item.forecast[4].day;
        document.getElementById("date6").innerHTML = data.query.results.channel.item.forecast[5].day;
        document.getElementById("date7").innerHTML = data.query.results.channel.item.forecast[6].day;

        /*
        for(var i = 0; i < 8; i++){
            document.getElementbyID("date"+(i+1)).innerHTML =
                data.query.results.channel.item.forecast[i].day;
        }
        */

        //Very likely there are loops for this. Unsure how to do so
        //DOM, unless table is generated in JS as well.

        document.getElementById("temp1").innerHTML = data.query.results.channel.item.forecast[0].high + " Hi <br>" +
            data.query.results.channel.item.forecast[0].low + " Lo";
        document.getElementById("temp2").innerHTML = data.query.results.channel.item.forecast[1].high + " Hi <br>" +
            data.query.results.channel.item.forecast[1].low + " Lo";
        document.getElementById("temp3").innerHTML = data.query.results.channel.item.forecast[2].high + " Hi <br>" +
            data.query.results.channel.item.forecast[2].low + " Lo";
        document.getElementById("temp4").innerHTML = data.query.results.channel.item.forecast[3].high + " Hi <br>" +
            data.query.results.channel.item.forecast[3].low + " Lo";
        document.getElementById("temp5").innerHTML = data.query.results.channel.item.forecast[4].high + " Hi <br>" +
            data.query.results.channel.item.forecast[4].low + " Lo";
        document.getElementById("temp6").innerHTML = data.query.results.channel.item.forecast[5].high + " Hi <br>" +
            data.query.results.channel.item.forecast[5].low + " Lo";
        document.getElementById("temp7").innerHTML = data.query.results.channel.item.forecast[6].high + " Hi <br>" +
            data.query.results.channel.item.forecast[6].low + " Lo";

        document.getElementById("cond1").innerHTML = data.query.results.channel.item.forecast[0].text;
        document.getElementById("cond2").innerHTML = data.query.results.channel.item.forecast[1].text;
        document.getElementById("cond3").innerHTML = data.query.results.channel.item.forecast[2].text;
        document.getElementById("cond4").innerHTML = data.query.results.channel.item.forecast[3].text;
        document.getElementById("cond5").innerHTML = data.query.results.channel.item.forecast[4].text;
        document.getElementById("cond6").innerHTML = data.query.results.channel.item.forecast[5].text;
        document.getElementById("cond7").innerHTML = data.query.results.channel.item.forecast[6].text;



    });

}
