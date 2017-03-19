app.controller('ecoIndTabCtrl', function($scope) {
	 var unitEconomyChart = echarts.init(document.getElementById('unitEconomyChart'));
	 var totalPowerChart = echarts.init(document.getElementById('totalPowerChart'));
	 var takeCoalChart = echarts.init(document.getElementById('takeCoalChart'));
	 var option_unitEconomyChart = {
        title: {
            text: '机组经济性评估',
            textStyle:{
            	fontSize:14,
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            
                type : 'shadow'      
            }
        },
        grid:{
        	 left: 44,
        	 right:40
        },
        xAxis: {
            data: ["四号","五号","六号","七号","八号","九号"],
            name:"机组"
        },
        yAxis: {
            splitLine: {
                show: false
            },
            name:"供电煤耗(g/kwh)"
        },
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                label:"经济性良好",
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                label:"经济性中等",
                color: '#ffde33'
            }, {
                gt: 100,
                label:"经济性较差",
                color: '#c23531'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: '发电总功率',
            type: 'bar',
            data: [90,25,200,80,40,115],
            label:{
                normal:{
                    show:true,
                    position:"top"
                }
            },
            markLine: {
                silent: true,
                data: [{
                    yAxis: 50
                }, {
                    yAxis: 100
                }]
            }
        }
    };
	unitEconomyChart.setOption(option_unitEconomyChart);
	var option_totalPowerChart={
		series : [
			{
	            type: 'gauge',
	            min: 0,
	            max: 220,
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
	            data:[{value: 40, name: '发电总功率（MW）'}]
	        }
		]
	};
	setInterval(function () {
		option_totalPowerChart.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
	    totalPowerChart.setOption(option_totalPowerChart, true);
	},2000);
	var option_takeCoal={
	    series: [
	    	{
	            type: 'gauge',
	            min: 0,
	            max: 220,
	            radius: '100%',
	            startAngle:135,
	            endAngle:-135,
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
	            data:[{value: 40, name: '供电煤耗（g/kwh）'}]
	        }
	    ]
	};
	setInterval(function () {
		option_takeCoal.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
		takeCoalChart.setOption(option_takeCoal, true);
	},2000);
});
