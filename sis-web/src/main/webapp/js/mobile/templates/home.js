app.controller('HomeTabCtrl', function($scope) {
	$('#demo').leoweather({format:'<i class="icon-{图标}">{气温}℃</i><p>{城市}<span>|</span>{天气}<span>|</span>{风向}{风级}级</p>'});
	var allFacLoad = echarts.init(document.getElementById('allFacLoad'));
	var allFacEco = echarts.init(document.getElementById('allFacEco'));
	var mac1= echarts.init(document.getElementById('mac1'));
	var mac2= echarts.init(document.getElementById('mac2'));
	var option_mac1 = {
		series : [
			{
	            type: 'gauge',
	            min: 50,
	            max: 320,
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
	            data:[{value: 150}]
	        }
		]
	}; 
	var option_mac2 = {
	    series: [
	    	{
	            type: 'gauge',
	            min: 50,
	            max: 320,
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
	            data:[{value: 170}],
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
	            min: 50,
	            max: 500,
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
	            data:[{value: 320}]
	        }
		]
	};
	var option_allFacEco={
	    series: [
	    	{
	            type: 'gauge',
	            min: 100,
	            max: 800,
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
	            data:[{value: 400}],
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
//	var colors = [
//		 ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917']
//	],circles = [],circles1=[];
//	for (var i = 1; i <= 4; i++) {
//		var child = document.getElementById('circles-' + i),
//		percentage = i==1?80:60,
//		circle = Circles.create({
//			id:         child.id,
//			value:      percentage,
//			radius:     getWidth(),
//			width:      15,
//			colors:     colors[i - 1]
//		});
//		if(i<=2){
//			circles.push(circle);
//		}else{
//			circles1.push(circle);
//		}
//	}
//	window.onresize = function(e) {
//		for (var i = 0; i < circles.length; i++) {
//			circles[i].updateRadius(getWidth());
//			circles1[i].updateRadius(getWidth());
//		}
//	};
//	function getWidth() {
//		return window.innerWidth / 5;
//	}
	
	
	
});
