$(function(){
	
	var portfolio = [
		{ 
			caption: "New York Times Hack",
			url: "",
			alt: "NYT Screenshot",
			data_target: "#NYTSCreenshot",
			img: "./images/nyt-screenshot.png"
		},
		{ 
			caption: "About Me Page",
			url: "http://codepen.io/drewdrewthis/full/BozPGe/",
			alt: "About Me",
			data_target: "",
			img: "./images/aboutme-screenshot.png"
		},
		{ 
			caption: "Karma Clone",
			url: "http://codepen.io/drewdrewthis/full/BozPGe/",
			alt: "Karma Clone",
			data_target: "",
			img: "./images/karma-clone-screenshot.jpg"
		}
	]

	function buildPort() {
		$.each(portfolio, function(index, portItem) {
			var html = '<a id="' + portItem.id + 
				'"class="port-item port-image col-md-4 col-lg-3 col-xs-12" ' + 
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

	buildPort();
});