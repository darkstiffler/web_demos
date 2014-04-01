$(document).ready(function(){
	// test 1: load dom
	console.log('dom loaded');

	// test 2: load jQuery
	$('#statusLight').css({backgroundColor:'green'});


	var getNow = function() {
		var result = moment().format('YYYY-MM-DD | HH:MM:ss:SS');
		return result;
	}
	console.log('getNow function set');

	var localClock = function(){
  $('.local-time').text(getNow());
  
  // setTimeout is a builtin JavaScript function. You pass it a function
  // and a time (in milliseconds) that it should wait to carry out that function
  t = setTimeout(function(){
		localClock();}, 500);
	};
	console.log('localClock function set');
})