app.controller('MacLoadTabCtrl', function($scope,$interval ) {
	$scope.showViewIndex = 0;
	$scope.showViewType="hour";
	$scope.hour={};
	$scope.curMacPoint="1";
	$scope.changeViewType=function(type,itemIndex){
		var s=[0,1,2];
		$($("#chackActive2").children()[itemIndex]).addClass("active");
		for(var i = 0;i<s.length;i++){
			if(i!=itemIndex){
				$($("#chackActive2").children()[i]).removeClass("active");
			}
		}
		$scope.showViewIndex=itemIndex;
		switch (itemIndex) {
			case 0:
				$scope.showViewType="hour";
				break;
			case 1:
				$scope.showViewType="day";
				break;
			case 2:
				$scope.showViewType="month";
				break;
			default:
				break;
		}
		$scope.loadData(globalPoints.point2,$scope.showViewType,globalPoints.point4);
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
		            data: []
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
		            data:[],
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
		            data: []
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
		            data:[],
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
	            data: []
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
	            data:[],
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
	
	
	//定时刷新数据
	$scope.loadData = function(point,type,pointPer){
		var now = moment();
		var nowYearStr = now.format("YYYY-01-01 00:00:00");
		var nowMonthStr = now.format("YYYY-MM-01 00:00:00");
		var nowDayStr = now.format("YYYY-MM-DD 00:00:00");
		var timeEnd=now.unix();
		var timeStart;
		var timePeriod;
		switch (type) {
			case "hour":
				timeStart = moment(nowDayStr).unix(); 
				timePeriod = 3600;
				break;
			case "day":
				timeStart = moment(nowMonthStr).unix();
				timePeriod = 24*3600;
				break;
			case "month":
				timeStart = moment(nowYearStr).unix();
				timePeriod = 30*24*3600;
				break;
			default:
				break;
		}
		console.log("type="+type+" timeStart="+timeStart+" timeEnd="+timeEnd);
		//查询历史数据
		$.ajax({
			type: "GET",
			url: "GetPointDataController/getHistInterpUTC?point="+point+"&timeStart="+timeStart+"&timeEnd="+timeEnd+"&timePeriod="+timePeriod+"&type="+type,
			success: function(data){
				if(data.success){
					switch (type) {
						case "hour":
							option_hourloadChart.series[0].data=Object.values(data.data);
							option_hourloadChart.xAxis[0].data=Object.keys(data.data);
							hourloadChart.setOption(option_hourloadChart,true);
							break;
						case "day":
							option_dayloadChart.series[0].data=Object.values(data.data);
							option_dayloadChart.xAxis[0].data=Object.keys(data.data);
							dayloadChart.setOption(option_dayloadChart,true);
							break;
						case "month":
							option_monthloadChart.series[0].data=Object.values(data.data);
							option_monthloadChart.xAxis[0].data=Object.keys(data.data);
							monthloadChart.setOption(option_monthloadChart,true);
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
		//查询实时值，最大值，最小值和负荷率
		$.ajax({
			type: "GET",
			url: "GetPointDataController/GetHistMaxMinAndPerUTC?point="+point+"&timeStart="+timeStart+"&timeEnd="+timeEnd+"&timePeriod="+timePeriod+"&type="+type+"&pointPer="+pointPer,
			success: function(data){
				if(data.success){
						var retData = data.data;
						if(!retData){
							retData.cur="-";
							retData.min="-";
							retData.max="-";
							retData.per="-";
						}
						switch (type) {
							case "hour":
								$scope.hourLoad=retData;
								break;
							case "day":
								$scope.dayLoad=retData;
								break;
							case "month":
								$scope.monthLoad=retData;
								break;
							default:
								break;
						}
						$scope.$apply();
					console.log(data.data)
				}else{
					console.log(data.msg)
				}
			},
			error: function(){
				console.log("请求查询实时值，最大值，最小值和负荷率数据异常！")
			}
		});
	};
	
	$scope.loadData(globalPoints.point2,$scope.showViewType,globalPoints.point4);
	
	$scope.changeMac=function(){
		 $scope.stopAutoRefresh();
		 $scope.curMacPoint=$("#curMacPoint").val();
		 autoRefresh = $interval(function(){
		    	switch ($scope.curMacPoint) {
					case "1":
						$scope.loadData(globalPoints.point2,$scope.showViewType,globalPoints.point4);
						break;
					case "2":
						$scope.loadData(globalPoints.point3,$scope.showViewType,globalPoints.point5);
						break;
					
					default:
						break;
				}
		    }, 1000);
	}
	var autoRefresh;
    //自动刷新
    autoRefresh = $interval(function(){
    	switch ($scope.curMacPoint) {
			case "1":
				$scope.loadData(globalPoints.point2,$scope.showViewType,globalPoints.point4);
				break;
			case "2":
				$scope.loadData(globalPoints.point3,$scope.showViewType,globalPoints.point5);
				break;
			
			default:
				break;
		}
    }, 1000);
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