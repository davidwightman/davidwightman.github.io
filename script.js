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

// var clicks = 0;
//     function onClick() {
//         clicks += 1;
//         var xO = (clicks%2 ===0)? "X":"O"
//         document.getElementById("clicks").innerHTML = xO;
//     };

var clicks = 0;
    function onClick() {
        clicks += 1;
        var xO = (clicks%2 ===0)? "":""
        document.getElementById("clicks").innerHTML = xO;
		//$(event.target).css("background", "url(o.png) no-repeat");
		win()
    };

// function xoSelector () {
// 	if (clicks%2 == 0){
	
// $(function occupySquare() {
//   $(".box").on("click", function (event){
//     $(event.target).css("background", "url(o.png) no-repeat");
//   });
// });

// 	} else {

var clicks2 = 0;
$(function occupySquare() {
  $(".box").one("click", function (event){
    clicks2 += 1;
    var xO = (clicks2%2 ===0)? "url(x.gif) no-repeat" : "url(o.png) no-repeat"
  //  console.log(clicks2)
    $(event.target).css("background", xO);
	win()
  });
});

var x = "url(file:///Users/davidwightman/dev/davidwightman.github.io/x.gif)"
var o = "url(file:///Users/davidwightman/dev/davidwightman.github.io/o.png)"

function win(){
	var box1 = $("#box1").css("background-Image");
console.log(box1)
	var box2 = $("#box2").css("background-Image"); 
	var box3 = $("#box3").css("background-Image");
	var box4 = $("#box4").css("background-Image");
	var box5 = $("#box5").css("background-Image");
	var box6 = $("#box6").css("background-Image");
	var box7 = $("#box7").css("background-Image");
	var box8 = $("#box8").css("background-Image");
	var box9 = $("#box9").css("background-Image");

	if (x===box1 && x===box2 && x===box3){
		$("#modal").fadeIn(2000)
	}	else if (o===box1 && o===box2 && o===box3){
		$("#modalO").fadeIn(2000)
	} 	else if (x===box4 && x===box5 && x===box6){
		$("#modal").fadeIn(2000)
	}	else if (o===box4 && o===box5 && o===box6){
		$("#modalO").fadeIn(2000)
	} 	else if (x===box7 && x===box8 && x===box9){
		$("#modal").fadeIn(2000)
	}	else if (o===box7 && o===box8 && o===box9){
		$("#modalO").fadeIn(2000)
	} 	else if (x===box1 && x===box4 && x===box7){
		$("#modal").fadeIn(2000)
	}	else if (o===box1 && o===box4 && o===box7){
		$("#modalO").fadeIn(2000)
	} 	else if (x===box2 && x===box5 && x===box8){
		$("#modal").fadeIn(2000)
	}	else if (o===box2 && o===box5 && o===box8){
		$("#modalO").fadeIn(2000)
	} 	else if (x===box3 && x===box6 && x===box9){
		$("#modal").fadeIn(2000)
	}	else if (o===box3 && o===box6 && o===box9){
		$("#modalO").fadeIn(2000)
	} 	else if (x===box1 && x===box5 && x===box9){
		$("#modal").fadeIn(2000)
	}	else if (o===box1 && o===box5 && o===box9){
		$("#modalO").fadeIn(2000)
	} 	else if (x===box3 && x===box5 && x===box7){
		$("#modal").fadeIn(2000)
	}	else if (o===box3 && o===box5 && o===box7){
		$("#modalO").fadeIn(2000)
	}	

		else if (x===box1 && x===box3 && x===box5 && x===box8){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box4 && x===box5 && x===box3 && x===box9){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box1 && x===box5 && x===box6 && x===box7){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box2 && x===box5 && x===box7 && x===box9){
		$("#modalTie").fadeIn(2000)
	}	

		else if (x===box3 && x===box4 && x===box5 && x===box7){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box2 && x===box4 && x===box5 && x===box9){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box2 && x===box5 && x===box6 && x===box7){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box1 && x===box5 && x===box6 && x===box8){
		$("#modalTie").fadeIn(2000)
	}	

		else if (x===box1 && x===box6 && x===box7 && x===box8){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box2 && x===box6 && x===box7 && x===box9){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box2 && x===box3 && x===box4 && x===box9){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box1 && x===box3 && x===box4 && x===box8){
		$("#modalTie").fadeIn(2000)
	}	
		else if (x===box2 && x===box4 && x===box7 && x===box9){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box1 && x===box2 && x===box6 && x===box7){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box1 && x===box3 && x===box6 && x===box8){
		$("#modalTie").fadeIn(2000)
	}	else if (x===box3 && x===box4 && x===box8 && x===box9){
		$("#modalTie").fadeIn(2000)
	}	

		






	// else if (clicks===9) {
	// 	alert("It's a tie. Life!")
	// }
	// else (box1 box2 box3 box4 box5 box6 box7 box8 box9){
	// 	alert("It's a tie. Life!")
	// }
}


// function tie(){

// }




$("#open-modal").on("click", function(){
$("#modal").toggle();
});




$("#closeX").on("click", function(){

	$("#modal").toggle();
});

$("#closeO").on("click", function(){

	$("#modalO").toggle();
});

$("#closeTie").on("click", function(){

	$("#modalTie").toggle();
});