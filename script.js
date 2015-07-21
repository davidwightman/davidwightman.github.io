//enter name

function getInput (){
	$("button").on("click", function (event){
		var input = $(event.target).siblings("input").val()
		$(event.target).siblings("p").text(input);
	})
}
getInput ()

//monitor clicks

var clicks = 0;
    function onClick() {
        clicks += 1;
        var xO = (clicks%2 ===0)? "":""
        document.getElementById("clicks").innerHTML = xO;
		win()
    };




//set array to monitor occupied spaces, move x and o into div

array = []
var clicks2 = 0;
$(function occupySquare() {
  $(".box").one("click", function (event){
    clicks2 += 1;
 		
        var clickedBox = $(event.target).attr("id") 
       array.push(clickedBox)

    var xO = (clicks2%2 ===0)? "url(o.png) no-repeat" : "url(o.png) no-repeat"
  	var aI = (clicks2%2 ===0)? "url(x.gif) no-repeat" : "url(x.gif) no-repeat"
  
    $(event.target).css("background", xO);
win()

//computer AI
		$(function computerMove (){

		
			//choose a random spot
			var cMove = Math.floor(Math.random()*9)+1;

			//while the randomly chosen spot has a background

			console.log("outside loop: ", cMove)

			 if (array.indexOf("box" + cMove) !== -1 && array.length !== 9){	
			 computerMove();
			 } else if (array.length<=8) { 
			 	var clickedBoxComputer = ("box" + cMove)
			 	$("#box" + cMove).css("background", aI);
			 	win()
			 	
			 	array.push(clickedBoxComputer)
			 	console.log("array:" +array.length)
			 	$(event.target).css("background", xO);
			 	} 
			 	win()
		});

win()
  });
});

//Winning and tie combinations with modal responses

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
	
}

// modal information

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