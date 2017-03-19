app.controller('powerIndTabCtrl', function($scope) {
	 var monthPowerChart = echarts.init(document.getElementById('monthPowerChart'));
     var colors = ['#5793f3', 'purple', '#675bba'];
     var option_monthPowerChart = {
    		    title:{
    		        text:"月电量统计图",
    		        textStyle:{
    		            fontSize:14,
    		        }
    		    },
    		    color: colors,
    		    tooltip: {
    		        trigger: 'axis',
    		        axisPointer : {            
    		            type : 'shadow'       
    		        }
    		    },
    		    grid: {
    		        right: '20%',
    		        top:"22%"
    		    },
    		    legend: {
    		        data:['计划完成率','负荷率','发电量'],
    		        top:"5%"
    		    },
    		    xAxis: [
    		        {
    		            type: 'category',
    		            axisTick: {
    		                alignWithLabel: true
    		            },
    		            data: ['16/01','16/02','16/03','16/04','16/05','16/06','16/07','16/08','16/09','16/11','16/12','17/01']
    		        }
    		    ],
    		    yAxis: [
    		        {
    		            type: 'value',
    		            name: '计划完成率',
    		            min: 0,
    		            max: 100,
    		            offset: 0,
    		            position: 'right',
    		            axisLine: {
    		                lineStyle: {
    		                    color: colors[0]
    		                }
    		            },
    		            axisLabel: {
    		                formatter: '{value} %'
    		            }
    		        },
    		        {
    		            type: 'value',
    		            name: '负荷率',
    		            min: 0,
    		            max: 100,
    		            position: 'right',
    		            offset: 50,
    		            axisLine: {
    		                lineStyle: {
    		                    color: colors[1]
    		                }
    		            },
    		            axisLabel: {
    		                formatter: '{value} %'
    		            }
    		        },
    		        {
    		            type: 'value',
    		            name: '发电量(Mkwh)',
    		            position: 'left',
    		            axisLine: {
    		                lineStyle: {
    		                    color: colors[2]
    		                }
    		            }
    		        }
    		    ],
    		    dataZoom: [
    		        {
    		            show: true,
    		            start: 10,
    		            end: 100
    		        },
    		        {
    		            type: 'inside',
    		            start: 94,
    		            end: 100
    		        }
    		    ],
    		    series: [
    		    	  {
    		              name:'计划完成率',
    		              type:'line',
    		              yAxisIndex: 1,
    		               smooth:true,
    		              data:[20, 49, 70, 42, 65, 76, 56, 62, 62, 20, 64, 76]
    		          },
    		          {
    		              name:'负荷率',
    		              type:'line',
    		               smooth:true,
    		              yAxisIndex: 2,
    		              data:[17, 29, 28, 32, 45, 56, 76, 82, 70, 30, 74, 83]
    		          },
    		          {
    		              name:'发电量',
    		               smooth:true,
    		              type:'bar',
    		              yAxisIndex: 0,
    		              data:[20, 22, 33, 45, 63, 82, 73, 84, 60, 65, 86, 62]
    		          }
    		    ]
    		};
     monthPowerChart.setOption(option_monthPowerChart);
});
