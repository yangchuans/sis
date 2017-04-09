app.controller('HomeTabCtrl', function($scope) {
	$('#demo').leoweather({format:'<i class="icon-{图标}">{气温}℃</i><p>{城市}<span>|</span>{天气}<span>|</span>{风向}{风级}级</p>'});
	var colors = [
		 ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917']
	],circles = [],circles1=[];
	for (var i = 1; i <= 4; i++) {
		var child = document.getElementById('circles-' + i),
		percentage = i==1?80:60,
		circle = Circles.create({
			id:         child.id,
			value:      percentage,
			radius:     getWidth(),
			width:      15,
			colors:     colors[i - 1]
		});
		if(i<=2){
			circles.push(circle);
		}else{
			circles1.push(circle);
		}
	}
	window.onresize = function(e) {
		for (var i = 0; i < circles.length; i++) {
			circles[i].updateRadius(getWidth());
			circles1[i].updateRadius(getWidth());
		}
	};
	function getWidth() {
		return window.innerWidth / 5;
	}
});
