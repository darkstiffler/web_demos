$(document).ready(function(){
	var c = console;
	c.log('test');
	c.log('dom ready');

	$('.b1, .b2').click(function(){
		c.log('you clicked a btn');
	})

	$('.box').draggable();
	$('#reload').click(function(){
		location.reload();
		c.log('fire reload');
	})
})