app.controller('runDetailTabCtrl', function($scope,$stateParams) {
	console.log($stateParams.item_id);
	var stastoPie = echarts.init(document.getElementById('stastoPie'));
	var option_stastoPie = {
		    title:{
		        text:"2016年5月11日XXX辅机机启停统计",
		        textStyle:{
		            fontSize:12
		        }
		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		     color:['#5793f3','grey'],
		    legend: {
		        orient: 'vertical',
		        x: 'right',
		        data:['运行','停止']
		    },
		    series: [
		        {
		            name:'运行时间',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:18, name:'运行'},
		                {value:4, name:'停止'},
		               
		            ]
		        }
		    ]
		};
	stastoPie.setOption(option_stastoPie);
});