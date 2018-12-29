var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var axiobtn = document.querySelector("#axios");
var display = document.querySelector("#quote");


//USing XHR
xhrbtn.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			var quote =JSON.parse(XHR.responseText)[0];
			display.innerText = quote;

		}
	}
	XHR.open("GET", url);
	XHR.send();
});


//Using Fetch
fetchbtn.addEventListener("click", function(){
  fetch(url)
  .then(function(req){
    req.json().then(function(data){
      display.innerText = data[0];
    })
  })
  .catch(function(){
    alert("ERROR!")
  })
});


//Using Jquery 
$("#jquery").click(function(){
	$.getJSON(url)
	.done(function(data){
	$("#quote").text(data[0]);
	});
});


//Using AXIOS....Works, find out a way to use all 4 at once with no errors

// axiosbtn.addEventListener("click",function(){
//  axios.get(url)
//  .then(function(res){
//    display.innerText = res.data[0];
//  })
//  .catch(function(){
//    alert("ERROR!");
//  })
//	});