app.controller('HomeTabCtrl', function($scope,$interval) {
	$('#demo').leoweather({format:'<i class="icon-{图标}">{气温}℃</i><p>{城市}<span>|</span>{天气}<span>|</span>{风向}{风级}级</p>'});
	var allFacLoad = echarts.init(document.getElementById('allFacLoad'));
	var allFacEco = echarts.init(document.getElementById('allFacEco'));
	var mac1= echarts.init(document.getElementById('mac1'));
	var mac2= echarts.init(document.getElementById('mac2'));
	var option_mac1 = {
		series : [
			{
	            type: 'gauge',
	            min: 0,
	            max: 660,
	            radius: '100%',
	            startAngle:315,
	            endAngle:-315,
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 10
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                length: 12,        // 属性length控制线长
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    color: 'auto'
	                }
	            },
	            splitLine: {           // 分隔线
	                length: 10,         // 属性length控制线长
	                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                    color: 'auto'
	                }
	            },
	            title : {
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontSize: 12,
	                },
	                offsetCenter: ["20%", '-30%'],   
	            },
	            detail:{
	                textStyle:{
	                    fontSize:20
	                }
	            },
	            pointer: {
	                width:4
	            },
	            axisLine:{
                   lineStyle:{
                        color: [[1, '#5793f3']],
                        width:10
                   },
                },
	            data:[{value: 0}]
	        }
		]
	}; 
	var option_mac2 = {
	    series: [
	    	{
	            type: 'gauge',
	            min: 0,
	            max: 660,
	            radius: '100%',
	            startAngle:135,
	            endAngle:-135,
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 5
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                length: 12,        // 属性length控制线长
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    color: 'auto'
	                }
	            },
	            splitLine: {           // 分隔线
	                length: 10,         // 属性length控制线长
	                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                    color: 'auto'
	                }
	            },
	            title : {
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontSize: 12,
	                },
	                offsetCenter: ["-10%", '-30%'],  
	            },
	            pointer: {
	                width:4
	            },
	            detail:{
	                textStyle:{
	                    fontSize:20
	                }
	            },
	            data:[{value: 0}],
	            axisLine:{
	               lineStyle:{
	                    color: [[1, '#5793f3']],
	                    width:10
	               },
	            },
	        }
	    ]
	};
	var option_allFacLoad={
		series : [
			{
	            type: 'gauge',
	            min: 0,
	            max: 1320,
	            radius: '100%',
	            startAngle:315,
	            endAngle:-315,
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 10
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                length: 12,        // 属性length控制线长
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    color: 'auto'
	                }
	            },
	            splitLine: {           // 分隔线
	                length: 10,         // 属性length控制线长
	                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                    color: 'auto'
	                }
	            },
	            title : {
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontSize: 12,
	                },
	                offsetCenter: ["20%", '-30%'],   
	            },
	            detail:{
	                textStyle:{
	                    fontSize:20
	                }
	            },
	            pointer: {
	                width:4
	            },
	            axisLine:{
                   lineStyle:{
                        color: [[1, '#5793f3']],
                        width:10
                   },
                },
	            data:[{value: 0}]
	        }
		]
	};
	var option_allFacEco={
	    series: [
	    	{
	            type: 'gauge',
	            min: 0,
	            max: 3168,
	            radius: '100%',
	            startAngle:135,
	            endAngle:-135,
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 5
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                length: 12,        // 属性length控制线长
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    color: 'auto'
	                }
	            },
	            splitLine: {           // 分隔线
	                length: 10,         // 属性length控制线长
	                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                    color: 'auto'
	                }
	            },
	            title : {
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontSize: 12,
	                },
	                offsetCenter: ["-10%", '-30%'],  
	            },
	            pointer: {
	                width:4
	            },
	            detail:{
	                textStyle:{
	                    fontSize:20
	                }
	            },
	            data:[{value: 0}],
	            axisLine:{
	               lineStyle:{
	                    color: [[1, '#5793f3']],
	                    width:10
	               },
	            },
	        }
	    ]
	};
	allFacLoad.setOption(option_allFacLoad);
	allFacEco.setOption(option_allFacEco);
	mac1.setOption(option_mac1);
	mac2.setOption(option_mac2);
	//定时刷新数据
	$scope.loadData = function(){
		$.ajax({
			type: "GET",
			url: "GetPointDataController/getManyPointData?pointNames="+globalPoints.point1+","+globalPoints.point2+","+globalPoints.point3+","+globalPoints.point8,
			success: function(data){
				if(data.code="1"){
					$scope.points = data.data;
					option_allFacLoad.series[0].data[0].value=$scope.points[globalPoints.point1];
					option_allFacEco.series[0].data[0].value = $scope.points[globalPoints.point8];
					option_mac1.series[0].data[0].value=$scope.points[globalPoints.point2];
					option_mac2.series[0].data[0].value=$scope.points[globalPoints.point3];
					
					allFacLoad.setOption(option_allFacLoad,true);
					allFacEco.setOption(option_allFacEco,true);
					mac1.setOption(option_mac1,true);
					mac2.setOption(option_mac2,true);
				}else{
					console.log(data.msg)
				}
			},
			error: function(){
				console.log("请求首页数据异常！")
			}
		});
	};
	$scope.loadData();
	var autoRefresh;
    //自动刷新
    autoRefresh = $interval($scope.loadData, 5000);
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
