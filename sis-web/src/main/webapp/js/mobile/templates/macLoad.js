app.controller('MacLoadTabCtrl', function($scope) {
	$scope.showViewIndex = 0;
	$scope.changeViewType=function(type,itemIndex){
		$(".tabs-select-viewtype").children(".active").removeClass("active");
		$($(".tabs-select-viewtype").children()[itemIndex]).addClass("active");
		$scope.showViewIndex=itemIndex;
	}
	var hourloadChart = echarts.init(document.getElementById('hourloadChart'));
	var dayloadChart = echarts.init(document.getElementById('dayloadChart'));
	var monthloadChart = echarts.init(document.getElementById('monthloadChart'));
	var option_hourloadChart = {
		    color:  ['#5793f3', 'purple', '#675bba'],
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		        right: '2%',
		        left: '2%',
		        top:"12%",
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisTick: {
		                alignWithLabel: true
		            },
		            data: ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            position: 'left',
		        }
		    ],
		    series: [
		        {
		            name:'#1机组',
		            type:'line',
		            data:[12.0, 12.2, 13.3, 14.5, 16.3, 17.2, 20.3, 23.4, 23.0, 16.5, 12.0, 8,12, 12.2, 13.3, 14.5, 16.3, 10.2, 12.3, 13.4, 13.0, 12.5, 11.8, 11.2],
		            markPoint: {
		                symbol:"pin",
		                data: [
		                    {type: 'max', name: '最大值'},
		                    {type: 'min', name: '最小值'}
		                ],
		            },
		            showSymbol :false,
		            areaStyle: {normal: {color:"#5793f3"}},
		        }
		    ]
		};
	var option_dayloadChart = {
		    color:  ['#5793f3', 'purple', '#675bba'],
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		        right: '2%',
		        left: '2%',
		        containLabel: true
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisTick: {
		                alignWithLabel: true
		            },
		            data: ['4-1','4-1','4-3','4-4','4-5','4-6','4-7','4-8','4-9','4-10','4-11','4-12','4-13','4-14','4-15']
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            position: 'left',
		        }
		    ],
		    series: [
		        {
		            name:'#1机组',
		            type:'line',
		            data:[570, 580, 600, 408, 654, 640, 688, 625, 648, 609, 610, 612, 613, 634, 630],
		            markPoint: {
		                symbol:"pin",
		                data: [
		                    {type: 'max', name: '最大值'},
		                    {type: 'min', name: '最小值'}
		                ],
		            },
		            showSymbol :false,
		            areaStyle: {normal: {color:"#5793f3"}},
		        }
		    ]
		};
	var option_monthloadChart = {
	    color:  ['#5793f3', 'purple', '#675bba'],
	    tooltip: {
	        trigger: 'axis'
	    },
	    grid: {
	        right: '2%',
	        left: '2%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {
	                alignWithLabel: true
	            },
	            data: ['15-01','15-02','15-03','15-04','15-05','15-06','15-07','15-08','15-09','15-010','15-011','15-012','16-01','16-02','16-03']
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            position: 'left',
	        }
	    ],
	    series: [
	        {
	            name:'#1机组',
	            type:'line',
	            data:[1570, 1580, 1600, 1408, 1654, 1640, 1688, 1625, 1648, 1609, 1610, 1512, 1513, 1534, 1530],
	            markPoint: {
	                symbol:"pin",
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ],
	            },
	            showSymbol :false,
	            areaStyle: {normal: {color:"#5793f3"}},
	        }
	    ]
	};
	hourloadChart.setOption(option_hourloadChart);
	dayloadChart.setOption(option_dayloadChart);
	monthloadChart.setOption(option_monthloadChart);
});