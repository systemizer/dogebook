$(document).ready(function() {

	var doge_phrases = ['such drift', 'much dignity', 'very leeder', 'many robe', 'much infinity', 'so gif', 'very guitar', 'such fall', 'so trick', 'much feels', 'many happy', 'very art', 'amaze', 'wow', 'excite', 'much joanna', 'such rob'];
	var doge_colors = ['#6FFF00','#FF00FF', '#FFFF00','#4D4DFF','#FE0001','#FF4105','#993CF3'];

	$(window).scroll(function() {
		// $('.doge-phrase').remove();
		var doge_phrase = doge_phrases[Math.floor(Math.random() * 17)];
		var doge_color = doge_colors[Math.floor(Math.random() * 7)];
		var top_percentage = Math.floor(Math.random()*100) + 1;
		var left_percentage = Math.floor(Math.random()*100) + 1;
		var font_size = Math.random()*1.5;
		$('body').append('<div class="doge-phrase" style="top: '+top_percentage+'%; left: '+left_percentage+'%; color: '+doge_color+'; font-size:'+font_size+'em;">'+doge_phrase+'</div>');
	});


});