$(function(){
	
	var portfolio = [
		{ 
<<<<<<< HEAD
			caption: "New York Times Hack",
			url: "",
			alt: "NYT Screenshot",
			data_target: "#NYTScreenshot",
			img: "./images/nyt-screenshot.jpg"
		},
		{ 
=======
>>>>>>> feature/sliding-info-box
			caption: "About Me Page",
			url: "http://codepen.io/drewdrewthis/full/BozPGe/",
			alt: "About Me",
			data_target: "",
			img: "./images/aboutme-screenshot.jpg"
		},
		{ 
			caption: "Who Said? Quiz Game",
			url: "http://drewdrewthis.github.io/fewd-who-said-quiz/",
			alt: "Who Said? Quiz",
			data_target: "",
			img: "./images/quiz-screenshot.jpg"
		},
		{ 
			caption: "Shopping List App",
			url: "http://drewdrewthis.github.io/fewd-shopping-list/",
			alt: "Shopping List App",
			data_target: "",
			img: "./images/shopping-list-screenshot.jpg"
		},
		{ 
			caption: "YouTube API Project",
			url: "http://drewdrewthis.github.io/Thinkful-Tube-Project/",
			alt: "YouTube API Project",
			data_target: "",
			img: "./images/thinkful-tube-screenshot.jpg"
		},
		{ 
			caption: "Hot or Cold Game",
			url: "http://drewdrewthis.github.io/fewd-hot-or-cold/",
			alt: "Hot or Cold Game",
			data_target: "",
			img: "./images/hot-or-cold-screenshot.jpg"
		},
		{ 
<<<<<<< HEAD
			caption: "Who Said? Quiz Game",
			url: "http://drewdrewthis.github.io/fewd-who-said-quiz/",
			alt: "Who Said? Quiz",
			data_target: "",
			img: "./images/quiz-screenshot.jpg"
=======
			caption: "New York Times Hack",
			url: "",
			alt: "NYT Screenshot",
			data_target: "#NYTScreenshot",
			img: "./images/nyt-screenshot.jpg"
>>>>>>> feature/sliding-info-box
		},
		{ 
			caption: "Karma Clone",
			url: "http://codepen.io/drewdrewthis/full/BozPGe/",
			alt: "Karma Clone",
			data_target: "",
<<<<<<< HEAD
			img: "./images/shopping-list-screenshot.jpg"
=======
			img: "./images/karma-clone-screenshot.jpg"
>>>>>>> feature/sliding-info-box
		},
		{ 
			caption: "Streetfighter Game",
			url: "http://drewdrewthis.github.io/jquery-streetfighter/main.html",
			alt: "Streetfighter Game",
			data_target: "",
			img: "./images/streetfighter-screenshot.jpg"
		},
		{ 
			caption: "Shh.. <em>FizzBuzz</em>",
			url: "",
			alt: "FizzBuzz",
			data_target: "#FizzBuzz",
			img: "./images/fizzbuzz.jpg"
		}
	]

	function buildPort() {
		$.each(portfolio, function(index, portItem) {
			var html = '<a id="' + portItem.id + 
				'"class="port-item port-image col-sm-4 col-lg-3 col-xs-12" ' + 
				'href="' + portItem.url + 
				'"alt="' + portItem.alt + '" data-toggle="modal" data-target="' + 
				portItem.data_target + '" style="background-image:url(' +
				portItem.img + ');" target="_blank">\
					<div class="fig-caption">' + portItem.caption + 
					'</div>\
				</a>';

			$('.portfolio').append(html);
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
		}
		else {
			$('.intro-section').css({"background-color": "white" });
			$('.disco-ball').hide();	
		}

	});

	$('#portfolio').on("click", function(){
		$('#prog-info-box').toggleClass('no-width');
		$('#port-box').toggleClass('full-width');
	});

	buildPort();
	resizeDiv();
	$.backstretch('./images/city-bg-lq.jpg');
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

