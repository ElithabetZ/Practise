/*var mas = ['alex', 17, 5, true];
mas[100] = 'Hello'
var out = ''

for(var i=0; i<mas.length; i++){
    if(mas[i] != undefined){
    out += mas[i] + ' ';
    }
}
 document.querySelector('#out').innerHTML = out;


 // ассоциативный массив
 
 var mas2 = {
     "name" : 'Alex',
     "age" : 17,
     "kod" : 5,
     "car" : true,
     "hi all" : 666,
 }

 var out2 = '';
 for(var k in mas2){
     out2 += k + ' === '+mas2[k]+'<br>';
 }
 document.querySelector('#out2').innerHTML = out2;

 var m = {
     "name": "Eli",
     "age": 19,
     "sex" : "female",
     "phone": ['+375449870865', '+37529768543'],
     "email": {
         "gmal": "eliorl@gmail.com",
         "yahoo":"eliorl@yahoo.com"
     }

 }
 //console.log(m.phone)
 


 // Массив в строку

 var str = JSON.stringify(m);
 console.log(str);

 // Преобразовать строку в массив
 console.log(JSON.parse(str));

 // AJAX 

 window.onload = function(){

document.querySelector('#inp').onclick = function(){
    alert(1);
}
 }


 /*function ajaxGet(){
     var request = new XMLHttpRequest();

     request.onreadystatechange = function(){
         console.log(request.readyState);
     }
     //подготовить к отправке на сервер
     request.open('GET','ip.php');
     request.send();
 }*/


function val(o){
    var town = o.value;
 fetch ('http://api.openweathermap.org/data/2.5/weather?q='+town+'&appid=1e82470e3c4cd294920473dfb28d4a3d')
 .then(function(resp){return resp.json()})
 .then(function(data){
     document.querySelector('#City').textContent = data.name;
     document.querySelector('#tem').innerHTML = Math.round((data.main.temp - 273)) + '&deg';
     document.querySelector('#cloud').innerHTML= data.weather[0].description
     document.querySelector("#icon").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
     //console.log(data);
 })
 .catch(function(){
     //catch anny errors
 })

 }