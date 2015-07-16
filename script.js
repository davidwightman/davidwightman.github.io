function getInput (){
//var button = document.querySelector(".button")
$("button").on("click", function (event){
//button.addEventListener("click", function (event){
//var input = document.getElementsByClassName("input")[0].value;
var input = $(event.target).siblings("input").val()
$(event.target).siblings("p").text(input);
})
}
getInput ()



var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };




var xOrO = ("clicks")
$(function occupySquare() {
  $(".box").on("click", function (event){
    $(event.target).css("background", "url(xOrO) no-repeat");
  });
});



function xoSelector () {
	if (clicks%2 === 0){
		xOrO==="o.png";
	} else {
		xOrO===("x.gif");
}}


