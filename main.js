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
		switch(event.keyCode){
			case 32: //space
			return function shoot (){
			$('.square').append("<div class=bullet></div>");
			$('.bullet').css('left', '+=50');
			};

			// break;
			case 39: //righ
				if ($('.square').css('left') > 100%) {
				$('.square').css('left', '+=10');
			};
				// break;
			case 37: //left
				$('.square').css('left', '-=10');
		}
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
*/