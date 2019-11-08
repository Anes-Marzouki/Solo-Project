$( document ).ready(function() {
	// console.log('hi');
//set of Variables

	var timer;//set it to undefined ? or null?
	var startGame = false;
	var ammo = $('.ammo').text();
 	var score = $('.score').text();
	var nowTime = $('.timer').text(); //global from <div>text like 30s
//logs
// console.log(score);
// console.log(nowTime)

$('.restart').on('click', function() {
	//needs to clear the interval.
	// stop();
	// clearInterval(timer);
	$('.square').addClass('stop');
	$('.screen').addClass('stop');
	startgame = false;
	nowTime = 1;
	console.log(nowTime);
	console.log(startgame);
})


//starts the timer
	function timerFn() {
	  	timer = setInterval( function(){
		    nowTime--; // 30s--
		    $('.timer').html(nowTime);
		    if (nowTime < 5) {
		    	$('.timer').css('color', 'red');
		    }
		    if (nowTime < 1) {
		      clearInterval( timer );
		      stop();
		    }
	    },1000);
	}
	//Base skelaton for the mini game!
//generates random number for the move function.
	function randomNumb(min,max){
	    return Math.floor( Math.random() * ( max - min ) + min + 1 );
            //test this return otherwise try (max - min + 1).
	}

//ammo count on click inside screen
	$('.screen').on('click', function(){
		if ( ammo !== 0){
		ammo--;
		$('.ammo').html(ammo);
		}else {
			$('.ammo').html('Out of ammo');
		}
	})
//timer
	//start the timer with a function maybe .onclick start timer with a startgame var set to true?
		// like if startgame is false .click on element with class start ?? $('.start').click(f() {start the timer and sets startgame to true}) 
	$('.square').on('click', function (){
		if (!startGame) {
			timerFn();
			startGame = true;
		}
	})
//clicking on square (element:maybe change it to an img) calls the move function below
	$('.square').click(function(){
	  updateScore();  
	  move( $(this) ); //this refers to the square.
	});
	//move!!
		function move(element){
		  var left = randomNumb(2,80);
		  var top = randomNumb(2, 80);
		  var width = randomNumb(2,10);
		  $(element).css('left', left + '%');
		  $(element).css('top', top + '%');
		  $(element).css('width', '-=2' + '%');
		  $(element).css('height', '-=2' + '%');
		  //anim
		  blink();
		  // $(element).css('animation-name', 'moving');
		  // $(element).css('animation-name', 'moving');
	          //for now this moves the elmt back and forth
	          //using the CSS' left value, try and implement
	          //a more dynamic movement pattern.
		}
		function blink(){
			$('.square').fadeOut(80);
			$('.square').fadeIn(80);
		}
	//increases score var
		function updateScore(){
		  score++;
		  $('.score').html(score);
		}
//stop and adds score, an ending mechanic.
	function stop(){
	  $('.square').addClass('stop'); // stop pointer event
	  $('.screen').addClass('stop');
	  $('.score').html('Your score is: ' + score);
	}
})





//-----------------------click-events-&-keypress-events--------------------------------






	// $('#right').on('click', function(){
	// 	$('.square').css('left', '+=10');
	// })

	// $('#left').on('click', function(){
	// 	$('.square').css('left', '-=10');
	// })

	// $(document).keydown(function(event){
	// 	console.log(event.keyCode)
	// 	// var key = event.keyCose;
	// 	if (event.keyCode == 39){
	// 			$('.square').css('left', '+=10');
	// 	}else if (event.keyCode == 37){
	// 		$('.square').css('left', '-=10');
	// 	}
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
	






//----------------------------

// If key presses anywhere need to be caught
// (for example, to implement global shortcut keys on a page),
// it is useful to attach this behavior to the document object.
// Because of event bubbling, all key presses will make their way up the
// DOM to the document object unless explicitly stopped.


// event.keyCode {
// 	32: space
// 	37: Left key
// 	38: Up key
//     39: Right key         
//     40: Down key
//     } 



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

