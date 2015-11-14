$(function(){
	
	var portfolio = [
		{ 
			caption: "About Me Page",
			url: "http://codepen.io/drewdrewthis/full/BozPGe/",
			alt: "About Me",
			data_target: "",
			img: "./images/aboutme-screenshot.png"
		},
		{ 
			caption: "Who Said? Quiz Game",
			url: "http://drewdrewthis.github.io/fewd-who-said-quiz/",
			alt: "Who Said? Quiz",
			data_target: "",
			img: "./images/quiz-screenshot.png"
		},
		{ 
			caption: "Shopping List App",
			url: "http://drewdrewthis.github.io/fewd-shopping-list/",
			alt: "Shopping List App",
			data_target: "",
			img: "./images/shopping-list-screenshot.png"
		},
		{ 
			caption: "YouTube API Project",
			url: "http://drewdrewthis.github.io/Thinkful-Tube-Project/",
			alt: "YouTube API Project",
			data_target: "",
			img: "./images/thinkful-tube-screenshot.png"
		},
		{ 
			caption: "Hot or Cold Game",
			url: "http://drewdrewthis.github.io/fewd-hot-or-cold/",
			alt: "Hot or Cold Game",
			data_target: "",
			img: "./images/hot-or-cold-screenshot.png"
		},
		{ 
			caption: "New York Times Hack",
			url: "",
			alt: "NYT Screenshot",
			data_target: "#NYTScreenshot",
			img: "./images/nyt-screenshot.png"
		},
		{ 
			caption: "Karma Clone",
			url: "http://codepen.io/drewdrewthis/full/BozPGe/",
			alt: "Karma Clone",
			data_target: "",
			img: "./images/karma-clone-screenshot.jpg"
		},
		{ 
			caption: "Streetfighter Game",
			url: "http://drewdrewthis.github.io/jquery-streetfighter/main.html",
			alt: "Streetfighter Game",
			data_target: "",
			img: "./images/streetfighter-screenshot.png"
		},
		{ 
			caption: "FizzBuzz",
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
				portItem.img + ');">\
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
	}

	buildPort();
	resizeDiv();
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