$( document ).ready(function() {
	// console.log('hi');
	$('#right').on('click', function(){
		$('.square').css('left', '+=10');
	})

	$('#left').on('click', function(){
		$('.square').css('left', '-=10');
	})

	$(document).keydown(function(event){
		console.log(event.keyCode)
		// var key = event.keyCose;
		if (event.keyCode == 39){
				$('.square').css('left', '+=10');
		}else if (event.keyCode == 37){
			$('.square').css('left', '-=10');
		}
	// 	switch(event.keyCode){
	// 		case 32: //space
	// 		return function shoot (){
	// 		$('.square').append("<div class=bullet></div>");
	// 		$('.bullet').css('left', '+=50');
	// 		};

	// 		// break;
	// 		case 39: //righ
	// 			if ($('.square').css('left') > 100%) {
	// 			$('.square').css('left', '+=10');
	// 		};
	// 			// break;
	// 		case 37: //left
	// 			$('.square').css('left', '-=10');
	// 	}
	})
	


})	



//----------------------------
/*
If key presses anywhere need to be caught
(for example, to implement global shortcut keys on a page),
it is useful to attach this behavior to the document object.
Because of event bubbling, all key presses will make their way up the
DOM to the document object unless explicitly stopped.


event.keyCode {
	32: space
	37: Left key
	38: Up key
    39: Right key         
    40: Down key
    } 


 //timer
 	var score = $(".score").text(),
	var currentTime = $(".timer").text(); //global from <div>text like 30s

//start the timer with a function maybe .onclick start timer with a startgame var set to true?
	like if startgame is false .click on element with class start ?? $('.start').click(f() {start the timer and sets startgame}) 


//starts the timer
	var timer; //global set it to undefined ? or null?
	function timer(){
	  	timer = setInterval( function(){
		    currentTime--; // 30s--
		    $(".timer").html(currentTimer);
		    if(currentTime < 1){
		      clearInterval(timer);
		      end();
		    }
	    },1000);
	}

//clicking on square (element:maybe change it to an img) calls the move function below
	$(".square").click(function(){
	  updateScore();  
	  move( $(this) ); //this refers to the square.
	});

//move!!
	function move(element){
	  var left = randomNumb(2,75);
	  $(element).css("left", left + "%");
	}

//generates random number for the move function.
	function randomNumb(min,max){
	    return Math.floor( Math.random() * ( max - min ) + min + 1 );
	}


//increses score var
	function updateScore(){
	  score++;
	  $(".score").html(score);
	}

//stop and adds score
	function stop(){
	  $(".ball").addClass("stop"); // stop pointer event
	  $(".score").html("Your score is: " + score);
	}
*/

//This doesn't work, you can't nest an if statement inside a case!!!
	// $(document).keydown(function(event){
		// 	console.log(event.keyCode)
		// 	switch(event.keyCode){
		// 		case 32: //space
		// 		return function shoot (){
		// 		$('.square').append("<div class=bullet></div>");
		// 		$('.bullet').css('left', '+=50');
		// 		};

		// 		// break;
		// 		case 39: //righ
		// 			if ($('.square').css('left') > 100%) {
		// 			$('.square').css('left', '+=10');
		// 		};
		// 			// break;
		// 		case 37: //left
		// 			$('.square').css('left', '-=10');
		// 	}
		// })

