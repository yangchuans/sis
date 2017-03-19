app.controller('HomeTabCtrl', function($scope) {
	var todayloadChart = echarts.init(document.getElementById('todayloadChart'));
	var option_todayloadChart = {
		    title:{
		        text:"今日机组负荷趋势图",
		        textStyle:{
		            fontSize:12
		        }
		        
		    },
		    color:  ['#5793f3', 'purple', '#675bba'],
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		        right: '2%',
		        left: '10%'
		    },
		    
		    legend: {
		    	top:"3%",
		        data:['#1机组','#2机组']
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
		            name: '负荷(mwh)',
		            position: 'left',
		        }
		    ],
		    series: [
		       
		        {
		            name:'#1机组',
		            type:'line',
		            data:[2.6, 5.9, 9.0, 26.4, 28.7, 30.7, 35.6, 35.2, 28.7, 18.8, 6.0, 2.3,2.6, 5.9, 9.0, 26.4, 28.7, 30.7, 35.6, 32.2, 28.7, 18.8, 6.0, 2.3]
		        },
		        {
		            name:'#2机组',
		            type:'line',
		            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
		        }
		    ]
		};
	todayloadChart.setOption(option_todayloadChart);
});
