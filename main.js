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

		if (event.keyCode == 39) {
			$('.square').css('left', '+=10');
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


document.on('keydown' , function() {
        switch (event.keyCode) {
           case 37: Left key
           		;
              break;
           case 38: Up key
           		; 
              break;
           case 39: Right key
           		;
              break;
           case 40: Down key
           		;
              break;
        }
*/