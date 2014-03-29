$(document).ready(function(){
	console.log('dom ready');

	$('#box').css({backgroundColor:'blue'});

	var yVal = 0;
	var xVal = 0;
	var space = 2;

	$('html').keydown(function(x){
		if (x.keyCode == 83){
			$('#theBox').css({top: yVal});
			yVal++;
			x = null;
		}
	})
	$('html').keydown(function(x){
		if (x.keyCode == 87){
			$('#theBox').css({top: yVal});
			yVal--;
			x = null ;
		}
	})
	$('html').keydown(function(x){
		if (x.keyCode == 68){
			$('#theBox').css({left: xVal});
			xVal++;
			x = null;
		}
	})
	$('html').keydown(function(x){
		if (x.keyCode == 65){
			$('#theBox').css({left: xVal});
			xVal--;
			x = null;
		}
	})

	$('html').keydown(function(){
		console.log(event);
	})
})