$(document).ready(function() {

    var doge_phrases = ['such drift', 'much dignity', 'very leeder',
			'many robe', 'much infinity', 'so gif',
			'very guitar', 'such fall', 'so trick', 'much feels',
			'many happy', 'very art', 'amaze', 'wow', 'excite',
			'much joanna', 'such rob', 'much smile', 'very frown',
			'so hair'],
    doge_colors = ['#6FFF00','#FF00FF', '#FFFF00','#4D4DFF',
		   '#FE0001','#FF4105','#993CF3'],
    body$ = $('body'),
    elems = [],
    min_elems = 30;

    $(window).scroll(function() {
	// $('.doge-phrase').remove();
	var doge_phrase = doge_phrases[Math.floor(Math.random() * doge_phrases.length)];
	var doge_color = doge_colors[Math.floor(Math.random() * doge_colors.length)];
	var top_percentage = Math.floor(Math.random()*100) + 1;
	var left_percentage = Math.floor(Math.random()*100) + 1;
	var font_size = Math.random()*1.5;
	var elem$ = $('<div class="doge-phrase" style="top: '+top_percentage+'%; left: '+left_percentage+'%; color: '+doge_color+'; font-size:'+font_size+'em;">'+doge_phrase+'</div>');
	body$.append(elem$);
	elems.push(elem$);
	setTimeout(function() {if (elems.length > min_elems) {elems[0].remove();elems = elems.splice(1,elems.length)}},Math.random()*10000);
    });


    (function(){

		window.AJMINT = window.AJMINT || {};

		$('.ajmint-social-btn[data-type="twitter"]').click(function(e){
			var imglink = $(this).parent().parent().find('img').attr('src'); // get link to image
			var socialtext = "very photo, much dogebombed";
			imglink = imglink.replace(/^\//, ""); // strip out first slash
			AJMINT.sendTweet(e, socialtext, imglink);
			e.stopPropagation()
			return false
		});

		$('.ajmint-social-btn[data-type="facebook"]').click(function(e){
			var imglink = $(this).parent().parent().find('img').attr('src'); // get link to image
			var socialtext = "very photo, much dogebombed";
			imglink = imglink.replace(/^\//, ""); // strip out first slash
			AJMINT.sendFbShare(e, socialtext, imglink);
		});

		$('.ajmint-social-btn[data-type="gplus"]').click(function(e){
			var imglink = $(this).parent().parent().find('img').attr('src'); // get link to image
			var socialtext = "very photo, much dogebombed";
			imglink = imglink.replace(/^\//, ""); // strip out first slash
			AJMINT.sendGplusShare(e, imglink);
		});


		AJMINT.percentEncode = function(string){
			return string.replace(/#/g, '%23').replace(/,/g, '%2c').replace(/ /g, '%20')
		}

		/* Usage: $el.click( function(e) { AJMINT.sendTweet(e) }) */
		// This function only needs e but if you want to pass in special text or a url hash, you can
		AJMINT.sendTweet = function(e, text, route){
			var base_url = 'https://twitter.com/intent/tweet?url=' + ((!route) ? window.location.href : ('http://' + window.location.hostname + window.location.pathname + route));
			text = (text) ? text : 'very photo, much dogebombed';

			var tweet_text  = "&text=" + text,
			    via_account = '&via=systemizer @joannaskao',
			    related     = "",
			    counter_url = "&counturl=" + window.location.hostname + window.location.pathname;

			var twitter_url = AJMINT.percentEncode(base_url + tweet_text + related + counter_url + via_account);
			// console.log(twitter_url);

			var settings = 'width=500,height=300,scrollbars=no,location=0,statusbars=0,menubars=0,toolbars=0,resizable=0';

			window.open(twitter_url, 'Tweet', settings)
			}

			AJMINT.sendFbShare = function(e, text, route){
			var base_url = 'http://www.facebook.com/dialog/feed',
			    app_id   = '?app_id=1405417853046999',
			    page_url = '&link=' + ((!route) ? window.location.href : ('http://' + window.location.hostname + window.location.pathname + route));

			var name = "&name=dogebomb: much bomb, very doge",
			    description = "&description=much bomb, very doge",
			    redirect    = '&redirect_uri=http://dogebomb.me',
			    image       = '&picture=' + ((!route) ? window.location.href : ('http://' + window.location.hostname + window.location.pathname + route));;

			var facebook_url = base_url + app_id + page_url + name + description + redirect + image;
			    facebook_url = AJMINT.percentEncode(facebook_url);
			// console.log(facebook_url)

			var settings = 'width=900,height=450,scrollbars=no,location=0,statusbars=0,menubars=0,toolbars=0,resizable=0';

			window.open(facebook_url, 'Share', settings);
		}

		AJMINT.sendGplusShare = function(e, route){
			var base_url = 'https://plus.google.com/share',
			    page_url = '?url=' + ((!route) ? window.location.href : ('http://' + window.location.hostname + window.location.pathname + route));

			var gplus_url = base_url + page_url;
			    gplus_url = AJMINT.percentEncode(gplus_url);
			// console.log(gplus_url)

			var settings = 'width=600,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no';

			window.open(gplus_url, 'Share', settings);
		}

	}).call(this);

});
