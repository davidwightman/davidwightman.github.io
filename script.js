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




var xOrO = document.getElementById("clicks").innerHTML
function xoSelector () {
	if (clicks%2 === 0){
		xOrO==="http://www.lostjungle.com/games_jul_2014/novel/tictactoe/50x50.png";
	} else {
		xOrO===("http://johnscabin.com/tic%20tac%20toe/x.gif");
}}


$(function occupySquare() {
  $(".box").on("click", function (event){
    $(event.target).css("background", "url(xOrO) no-repeat");
  });
});
