app.controller('powerIndTabCtrl', function($scope) {
	$scope.showViewIndex = 0;
	$scope.changeViewType=function(type,itemIndex){
		var s=[0,1,2];
		$($("#chackActive3").children()[itemIndex]).addClass("active");
		for(var i = 0;i<s.length;i++){
			if(i!=itemIndex){
				$($("#chackActive3").children()[i]).removeClass("active");
			}
		}
		$scope.showViewIndex=itemIndex;
	}
	var hourProChart = echarts.init(document.getElementById('hourProChart'));
	var dayProChart = echarts.init(document.getElementById('dayProChart'));
	var hourLoadRateChart = echarts.init(document.getElementById('hourLoadRateChart'));
	var dayLoadRateChart = echarts.init(document.getElementById('dayLoadRateChart'));
	var hourCompRateChart = echarts.init(document.getElementById('hourCompRateChart'));
	var dayCompRateChart = echarts.init(document.getElementById('dayCompRateChart'));
	var option_hourProChart = {
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
	var option_dayProChart = {
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
	            data: ['15-01','15-02','15-03','15-04','15-05','15-06','15-07','15-08','15-09','15-10','15-11','15-12','16-01','16-02','16-03']
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
	var option_hourLoadRateChart = {
	    tooltip: {
	        trigger: 'axis',
	    },
	    color:  ['#5793f3', 'purple', '#675bba'],
	    xAxis:  {
	        type: 'category',
	        boundaryGap: false,
	        data: ['4-1','4-1','4-3','4-4','4-5','4-6','4-7','4-8','4-9','4-10','4-11','4-12','4-13','4-14','4-15']
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            formatter: '{value}%'
	        },
	        axisPointer: {
	            snap: true
	        },
	    },
	    grid: {
	        right: '3.5%',
	        left: '2%',
	        containLabel: true
	    },
	    series: [
	        {
	            name:'负荷率',
	            type:'line',
	            data: [65, 68, 65, 66, 67, 60, 55, 56, 68, 69, 68, 66, 64, 68,70],
	            showSymbol :false,
	            markPoint: {
	                symbol:"pin",
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ],
	            },
			    areaStyle: {normal: {color:"#5793f3"}},
	        }
	        
	    ]
	};
	var option_dayLoadRateChart = {
	    tooltip: {
	        trigger: 'axis',
	    },
	    color:  ['#5793f3', 'purple', '#675bba'],
	    xAxis:  {
	        type: 'category',
	        boundaryGap: false,
	        data:['15-01','15-02','15-03','15-04','15-05','15-06','15-07','15-08','15-09','15-10','15-11','15-12','16-01','16-02','16-03']
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            formatter: '{value} %'
	        },
	        axisPointer: {
	            snap: true
	        },
	    },
	    grid: {
	        right: '3.5%',
	        left: '2%',
	        containLabel: true
	    },
	    series: [
	        {
	            name:'负荷率',
	            type:'line',
	            data: [55, 58, 55, 56, 57, 58, 45, 56, 68, 69, 68, 66, 64, 63,62],
	            showSymbol :false,
	            markPoint: {
	                symbol:"pin",
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ],
	            },
			    areaStyle: {normal: {color:"#5793f3"}},
	        }
	        
	    ]
	};
	var option_hourCompRateChart =  {
		    tooltip: {
		        trigger: 'axis',
		    },
		    color:  ['#5793f3', 'purple', '#675bba'],
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        data: ['4-1','4-1','4-3','4-4','4-5','4-6','4-7','4-8','4-9','4-10','4-11','4-12','4-13','4-14','4-15']
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
		            formatter: '{value}%'
		        },
		        axisPointer: {
		            snap: true
		        },
		    },
		    grid: {
		        right: '3.5%',
		        left: '2%',
		        containLabel: true
		    },
		    series: [
		        {
		            name:'负荷率',
		            type:'line',
		            data: [55, 58, 55, 56, 57, 58, 45, 56, 68, 69, 68, 66, 64, 63,62],
		            showSymbol :false,
		            markPoint: {
		                symbol:"pin",
		                data: [
		                    {type: 'max', name: '最大值'},
		                    {type: 'min', name: '最小值'}
		                ],
		            },
				    areaStyle: {normal: {color:"#5793f3"}},
		        }
		        
		    ]
		};
	var option_dayCompRateChart = {
	    tooltip: {
	        trigger: 'axis',
	    },
	    color:  ['#5793f3', 'purple', '#675bba'],
	    xAxis:  {
	        type: 'category',
	        boundaryGap: false,
	        data:['15-01','15-02','15-03','15-04','15-05','15-06','15-07','15-08','15-09','15-10','15-11','15-12','16-01','16-02','16-03']
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            formatter: '{value} %'
	        },
	        axisPointer: {
	            snap: true
	        },
	    },
	    grid: {
	        right: '3.5%',
	        left: '2%',
	        containLabel: true
	    },
	    series: [
	        {
	            name:'负荷率',
	            type:'line',
	            data: [65, 68, 65, 66, 67, 60, 55, 56, 68, 69, 68, 66, 64, 68,70],
	            showSymbol :false,
	            markPoint: {
	                symbol:"pin",
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ],
	            },
			    areaStyle: {normal: {color:"#5793f3"}},
	        }
	        
	    ]
	};
	hourProChart.setOption(option_hourProChart);
	dayProChart.setOption(option_dayProChart);
	dayLoadRateChart.setOption(option_dayLoadRateChart);
	hourLoadRateChart.setOption(option_hourLoadRateChart);
	dayCompRateChart.setOption(option_dayCompRateChart);
	hourCompRateChart.setOption(option_hourCompRateChart);
});
