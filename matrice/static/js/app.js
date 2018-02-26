(function main(){
	$('#full').click(function(){
		$('.square, .circle, .diamond').addClass('black').removeClass('white');
	});
	$('#empty').click(function(){
		$('.square, .circle, .diamond').addClass('white').removeClass('black');
	});
	$('.circle').click(function(){
		$('white').toggleClass('black');
	});

	
})();