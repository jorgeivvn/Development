var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?id=4058076&APPID=8e21efc86f5a2d4198cf1d4e4cbaead0';
var PORT = Number(process.env.PORT || 8081);

var server = http.createServer(function(request,response){
  //Body is below displaying the temperature of Dallas
  //Temp has to be converted because the openweathermap gives temperature in kelvins 
  var request = require('request');
  request(url, function(err,res, body){
    var data = JSON.parse(body);
    var tempConversion = data['main'].temp*(9/5)-459.67;
    var currentTemperature = Math.floor(tempConversion);
    console.log(currentTemperature);
    response.write("<html><body><div id='container'>");
    response.write("<h1>"+ 'City Name - : ' + data['name'] + '<br>' + "</h1>");
    response.write("<h2>" + 'Temperature - : ' + currentTemperature + '<br>' + '</h2');
    response.write("<h2>" + 'Sunset Time -: ' + new Date(data.sys['sunset']+1000)+'</h2');
    response.write("</div></body></html>");
    response.end();
  })
})

server.listen(PORT);
