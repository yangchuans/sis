app.controller('DataDetailTabCtrl', function($scope,$stateParams) {
	  var homeChart = echarts.init(document.getElementById('homeChart'));
	  var option = {
	        title: {
	            text: '测试数据'
	        },
	        tooltip: {},
	        legend: {
	            data:['销量']
	        },
	        xAxis: {
	            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	        },
	        yAxis: {},
	        series: [{
	            name: '销量',
	            type: 'line',
	            data: [5, 20, 36, 10, 10, 20]
	        }]
	    };
	    homeChart.setOption(option);
});
