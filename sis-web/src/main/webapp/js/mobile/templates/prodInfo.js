app.controller('prodInfoTabCtrl', function($scope) {
	$scope.showViewIndex = 0;
	$scope.changeViewType=function(type,itemIndex){
		$(".tabs-select-viewtype").children(".active").removeClass("active");
		$($(".tabs-select-viewtype").children()[itemIndex]).addClass("active");
		$scope.showViewIndex=itemIndex;
	}
	var productPie = echarts.init(document.getElementById('productPie'));
	var option_productPie = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} kwh ({d}%)"
	    },
	    color:['#675bba','#5793f3'],
	    series : [
	        {
	            name: '发电量',
	            type: 'pie',
	            radius : '74%',
	            center: ['50%', '60%'],
	            data:[
	              
	                {value:735, name:'#2机组'},
	                {value:1548, name:'#1机组'}
	            ],
	            label: {
	                normal: {
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	productPie.setOption(option_productPie);
});
