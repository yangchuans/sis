app.controller('powerIndTabCtrl', function($scope,$interval) {
	$scope.showViewIndex = 0;
	$scope.curMacPoint="1";
	$scope.showViewType="day";
	$scope.curPoint = globalPoints.point6;
	$scope.changeViewType=function(type,itemIndex){
		var s=[0,1,2];
		$($("#chackActive3").children()[itemIndex]).addClass("active");
		for(var i = 0;i<s.length;i++){
			if(i!=itemIndex){
				$($("#chackActive3").children()[i]).removeClass("active");
			}
		}
		$scope.showViewIndex=itemIndex;
		switch (itemIndex) {
			case 0:
				$scope.showViewType="day";
				$scope.curPoint = $scope.curMacPoint==1?globalPoints.point6:globalPoints.point7;
				break;
			case 1:
				$scope.showViewType="month";
				$scope.curPoint = $scope.curMacPoint==1?globalPoints.point9:globalPoints.point10;
				break;
			case 2:
				$scope.showViewType="year";
				$scope.curPoint = $scope.curMacPoint==12?globalPoints.point6:globalPoints.point13;
				break;
			default:
				break;
		}
	}
	var dayProChart = echarts.init(document.getElementById('dayProChart'));
	var monthProChart = echarts.init(document.getElementById('monthProChart'));
	var yearProChart = echarts.init(document.getElementById('yearProChart'));
	var option_dayProChart = {
	    color:  ['#5793f3', 'purple', '#675bba'],
	    tooltip: {
	        trigger: 'axis'
	    },
	    grid: {
	        right: '3%',
	        left: '2%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {
	                alignWithLabel: true
	            },
	            data: []
	        }
	    ],
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            formatter: '{value}'
	        },
	        axisPointer: {
	            snap: true
	        },
	    },
	    series: [
	        {
	            name:'值',
	            type:'line',
	            data:[],
	            markPoint: {
	                symbol:"pin",
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ],
	                symbolSize:80
	            },
	            showSymbol :false,
	            areaStyle: {normal: {color:"#5793f3"}},
	        }
	    ]
	};
	var option_monthProChart = {
	    color:  ['#5793f3', 'purple', '#675bba'],
	    tooltip: {
	        trigger: 'axis'
	    },
	    grid: {
	        right: '3%',
	        left: '2%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {
	                alignWithLabel: true
	            },
	            data: []
	        }
	    ],
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            formatter: '{value}'
	        },
	        axisPointer: {
	            snap: true
	        },
	    },
	    series: [
	        {
	            name:'值',
	            type:'line',
	            data:[],
	            markPoint: {
	                symbol:"pin",
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ],
	                symbolSize:80
	            },
	            showSymbol :false,
	            areaStyle: {normal: {color:"#5793f3"}},
	        }
	    ]
	};
	var option_yearProChart = {
	    tooltip: {
	        trigger: 'axis',
	    },
	    color:  ['#5793f3', 'purple', '#675bba'],
	    xAxis:  {
	        type: 'category',
	        boundaryGap: false,
	        data: []
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            formatter: '{value}'
	        },
	        axisPointer: {
	            snap: true
	        },
	    },
	    grid: {
	        right: '4%',
	        left: '2%',
	        containLabel: true
	    },
	    series: [
	        {
	            name:'值',
	            type:'line',
	            data: [],
	            showSymbol :false,
	            markPoint: {
	                symbol:"pin",
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ],
	                symbolSize:80
	            },
			    areaStyle: {normal: {color:"#5793f3"}},
	        }
	        
	    ]
	};
	dayProChart.setOption(option_dayProChart);
	monthProChart.setOption(option_monthProChart);
	yearProChart.setOption(option_yearProChart);
	//定时刷新数据
	$scope.loadData = function(point,type){
		var now = moment();
		var nowYearStr = now.format("YYYY-01-01 00:00:00");
		var nowMonthStr = now.format("YYYY-01-01 00:00:00");
		var nowDayStr = now.format("YYYY-MM-01 00:00:00");
		var timeEnd=now.unix();
		var timeStart;
		var timePeriod;
		switch (type) {
			case "day":
				timeStart = moment(nowDayStr).unix();
				timePeriod = 24*3600;
				break;
			case "month":
				timeStart = moment(nowMonthStr).unix();
				timePeriod = 30*24*3600;
				break;
			case "year":
				timeStart = moment(nowYearStr).unix();
				timePeriod = timeEnd-timeStart;
				break;
			default:
				break;
		}
		console.log("type="+type+" timeStart="+timeStart+" timeEnd="+timeEnd+" timePeriod="+timePeriod);
		//查询历史数据
		$.ajax({
			type: "GET",
			url: "GetPointDataController/getHistAvgUTCByType?point="+point+"&timeStart="+timeStart+"&timeEnd="+timeEnd+"&timePeriod="+timePeriod+"&type="+type,
			success: function(data){
				if(data.success){
					switch (type) {
						case "day":
							option_dayProChart.series[0].data=Object.values(data.data);
							option_dayProChart.xAxis[0].data=Object.keys(data.data);
							dayProChart.setOption(option_dayProChart,true);
							break;
						case "month":
							option_monthProChart.series[0].data=Object.values(data.data);
							option_monthProChart.xAxis[0].data=Object.keys(data.data);
							monthProChart.setOption(option_monthProChart,true);
							break;
						case "year":
							option_yearProChart.series[0].data=Object.values(data.data);
							option_yearProChart.xAxis.data=Object.keys(data.data);
							yearProChart.setOption(option_yearProChart,true);
							break;
						default:
							break;
					}
					console.log(data.data)
					console.log(Object.keys(data.data))
				}else{
					console.log(data.msg)
				}
			},
			error: function(){
				console.log("请求历史数据异常！")
			}
		});
	};
	$scope.loadData($scope.curPoint,$scope.showViewType);
	$scope.changeMac=function(){
		 $scope.curMacPoint=$("#curMacPoint").val();
		 switch ($scope.showViewType) {
			case "day":
				$scope.curPoint = $scope.curMacPoint==1?globalPoints.point6:globalPoints.point7;
				break;
			case "month":
				$scope.curPoint = $scope.curMacPoint==1?globalPoints.point9:globalPoints.point10;
				break;
			case "year":
				$scope.curPoint = $scope.curMacPoint==1?globalPoints.point12:globalPoints.point13;
				break;
			default:
				break;
		 }
		 $scope.stopAutoRefresh();
		 autoRefresh = $interval(function(){
			 $scope.loadData($scope.curPoint,$scope.showViewType);
		 }, 5000);
	}
	var autoRefresh;
    //自动刷新
	autoRefresh = $interval(function(){
		 $scope.loadData($scope.curPoint,$scope.showViewType);
	 }, 5000);
    //停止自动刷新
    $scope.stopAutoRefresh = function () {
        if (autoRefresh) {
            $interval.cancel(autoRefresh);
            autoRefresh = null;
        }
    };
    //切换页面时停止自动刷新
    $scope.$on('$stateChangeStart', function (angularEvent, current, previous) {
    	$scope.stopAutoRefresh();
    });
});
