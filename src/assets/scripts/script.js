$(function(){

	var imageFolder = "./dist/images/";
	
	var portfolio = [
		{ 
			title: "About Me Page",
			tech: "HTML/CSS, Design, Photoshop",
			url: "http://codepen.io/drewdrewthis/full/BozPGe/",
			alt: "About Me",
			data_target: "",
			img: "./dist/images/aboutme-screenshot.jpg",
			show: true
		},
		{ 
			title: "Winegardner & Hammons",
			tech: "HTML5/CSS3/JS, Wordpress/PHP, jQuery, Gulp, Sass",
			url: "http://whhotelgroup.com/",
			alt: "Winegardner & Hammons",
			data_target: "",
			img: "./dist/images/whhotels.jpg",
			show: true,
			category: 'client-work'
		},
		{ 
			title: "CleanHTML Web App",
			tech: "HTML/CSS/JS, jQuery, Design",
			url: "http://drewdrewthis.github.io/clean-html/",
			alt: "CleanHTML Web App",
			data_target: "",
			img: "./dist/images/cleanhtml.png",
			show: true
		},
		{ 
			title: "JS Snake Game (WIP)",
			tech: "HTML5/LESS/JS, jQuery-Mobile, Grunt, Karma-Jasmine",
			url: "http://drewdrewthis.github.io/snake-game/",
			alt: "Snake Game",
			data_target: "",
			img: "./dist/images/snake-screenshot.png",
			show: true
		},
		{ 
			title: "Who Said? Quiz Game",
			tech: "HTML/CSS/JS, jQuery, jQuery-UI, JSON, Design",
			url: "http://drewdrewthis.github.io/fewd-who-said-quiz/",
			alt: "Who Said? Quiz",
			data_target: "",
			img: "./dist/images/quiz-screenshot.jpg",
			show: true
		},
		{ 
			title: "Tweet Your Reps!",
			tech: "HTML/CSS/JS, jQuery, Google Civics API, Twitter API, JSON, Design, Illustrator",
			url: "http://drewdrewthis.github.io/tweet-your-reps",
			alt: "Tweet Your Reps",
			data_target: "",
			img: "./dist/images/tweet-ss.jpg",
			show: true
		},
		{ 
			title: "Shopping List App",
			tech: "HTML/CSS/JS, jQuery, Design",
			url: "http://drewdrewthis.github.io/fewd-shopping-list/",
			alt: "Shopping List App",
			data_target: "",
			img: "./dist/images/shopping-list-screenshot.jpg",
			show: true
		},
		{ 
			title: "YouTube API Project",
			tech: "HTML/CSS/JS, jQuery, YouTube API",
			url: "http://drewdrewthis.github.io/Thinkful-Tube-Project/",
			alt: "YouTube API Project",
			data_target: "",
			img: "./dist/images/thinkful-tube-screenshot.jpg",
			show: true
		},
		{ 
			title: "Hot or Cold Game",
			tech: "JavaScript, jQuery",
			url: "http://drewdrewthis.github.io/fewd-hot-or-cold/",
			alt: "Hot or Cold Game",
			data_target: "",
			img: "./dist/images/hot-or-cold-screenshot.jpg",
			show: true,
			category: 'fun-work'
		},
		{
			title: "New York Times Hack",
			tech: "Thinkful Project: DOM Manipulation Project",
			url: "",
			alt: "NYT Screenshot",
			data_target: "#NYTScreenshot",
			img: "./dist/images/nyt-screenshot.jpg",
			show: false
		},
		{ 
			title: "Karma Clone",
			tech: "Thinkful Project: Clone of Existing Website HTML/CSS",
			url: "http://drewdrewthis.github.io/fewd_landing_page_clone",
			alt: "Karma Clone",
			data_target: "",
			img: "./dist/images/shopping-list-screenshot.jpg",
			img: "./dist/images/karma-clone-screenshot.jpg",
			show: false
		},
		{ 
			title: "Streetfighter Game",
			tech: "JavaScript",
			url: "http://drewdrewthis.github.io/jquery-streetfighter/main.html",
			alt: "Streetfighter Game",
			data_target: "",
			img: "./dist/images/streetfighter-screenshot.jpg",
			show: true,
			category: 'fun-work'
		},
		{ 
			title: "Shh.. <em>FizzBuzz</em>",
			tech: "HTML, JavaScript",
			url: "",
			alt: "FizzBuzz",
			data_target: "#FizzBuzz",
			img: "./dist/images/fizzbuzz.jpg",
			show: true,
			category: 'fun-work'
		}
	]

	function buildPort() {
		$.each(portfolio, function(index, portItem) {

			if(!portItem.show) {
				return;
			}

			var html = '<a id="' + portItem.id + 
				'"class="port-item port-image col-sm-4 col-lg-3 col-xs-12" ' + 
				'href="' + portItem.url + 
				'"alt="' + portItem.alt + '" data-toggle="modal" data-target="' + 
				portItem.data_target + '" style="background-image:url(' +
				portItem.img + ');" target="_blank">\
					<div class="fig-caption"><span>' + portItem.title + 
						'</span><p class="fig-tech">' + (portItem.tech || "")+ 
						'</p>\
					</div>\
				</a>';


			switch (portItem.category) {
				case 'client-work':
					$('#client-work').append(html);
					break;
				case 'fun-work':
					$('#fun-work').append(html);
					break;
				default:
					$('#main-port').append(html);
					break;
			}
			
		});
	};

	function loadFizzBuzz() {

		$.ajax({
			url: "http://drewdrewthis.github.io/FizzBuzz/script.js",
			dataType: "script",
			success: success
		});
	};

	function randomColor() {
        var r = Math.floor(Math.random() * (255 - 0)),
        	g = Math.floor(Math.random() * (255 - 0)),
        	b = Math.floor(Math.random() * (255 - 0)),
        	a = .7;
        var color = 'rgba('+r+','+g+','+b+','+a+')';
        
        return color;
    };


	$('.disco-mode input[type="checkbox"]').on('click', function() {

		var changeColor = function() {
			if($('.disco-mode input[type="checkbox"]').prop("checked")) {
				var color = randomColor();
				$('.intro-section').css({"background-color": color });
			}
			setTimeout(changeColor, 100);	
		};

		if($('.disco-mode input[type="checkbox"]').prop("checked")) {
			changeColor();
			$('.disco-ball').show();	
			$('.lead-in h1').text("the meaning of life is to disco.");
		}
		else {
			$('.lead-in h1').text("the meaning of life is to create.");
			$('.intro-section').css({"background-color": "white" });
			$('.disco-ball').hide();	
		}

	});

	function scrollPast(target, element, newClass) {
		
		var top = $(target).offset().top - 100,
			bottom = top + $(target).height();
		console.log(target);
		console.debug(top);
		console.log($(target).height());
		console.debug(bottom);

		if(top <= $(window).scrollTop() && $(window).scrollTop() <= bottom) {
		    $(element).addClass(newClass);
		}
		else {
			$(element).removeClass(newClass);
		}
	};

	
    $(window).scroll(function() { 
    	clearTimeout( $.data( this, "scrollTimer" ) );
    	$.data(this, 'scrollTimer', setTimeout(function() {

    		scrollPast('#about', '#triangle-left', 'triangle-move');
    		scrollPast(".intro-section", "#home-menu-item a", 'active');
    		scrollPast("#portfolio", "#portfolio-menu-item a", 'active');
    		scrollPast("#about", "#about-menu-item a", 'active');

    	}, 1));
    });



	buildPort();
	resizeDiv();
	$.backstretch('./dist/images/city-bg-lq.jpg');

	//Sets initial scroll classes 
	scrollPast('#about', '#triangle-left', 'triangle-move');
	scrollPast(".intro-section", "#home-menu-item a", 'active');
	scrollPast("#portfolio", "#portfolio-menu-item a", 'active');
	scrollPast("#about", "#about-menu-item a", 'active');
});

window.onresize = function(event) {
	resizeDiv();
};

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	modalH = vph*.7;
	$('.maxHeight').css({'height': modalH + 'px'});
};

