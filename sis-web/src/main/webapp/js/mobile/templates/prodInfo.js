app.controller('prodInfoTabCtrl', function($scope,$interval) {
	$scope.showViewIndex = 0;
	$scope.curMacPoint="1";
	$scope.changeViewType=function(type,itemIndex){
		var s=[0,1,2];
		$($("#chackActive1").children()[itemIndex]).addClass("active");
		for(var i = 0;i<s.length;i++){
			if(i!=itemIndex){
				$($("#chackActive1").children()[i]).removeClass("active");
			}
		}
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
	                {value:1548, name:'#1机组'},
	                {value:735, name:'#2机组'}
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
	
	$scope.loadData_producInfo = function(){
		var points= [];
		for(var i=6;i<=14;i++){
			var str = "point"+i;
			points[i-6]=globalPoints[str];
		}
		$.ajax({
			type: "GET",
			url: "GetPointDataController/getManyPointData?pointNames="+points+","+points,
			success: function(data){
				if(data.code="1"){
					var dataMap = data.data;
					
					$scope.dayProductInfo_mac1 = dataMap[globalPoints.point6];
					$scope.dayProductInfo_mac2 = dataMap[globalPoints.point7];
					$scope.dayProductInfo_all = dataMap[globalPoints.point8];
					
					$scope.monthProductInfo_mac1 = dataMap[globalPoints.point9];
					$scope.monthProductInfo_mac2 = dataMap[globalPoints.point10];
					$scope.monthProductInfo_all = dataMap[globalPoints.point11];
					
					$scope.yearProductInfo_mac1 = dataMap[globalPoints.point12];
					$scope.yearProductInfo_mac2 = dataMap[globalPoints.point13];
					$scope.yearProductInfo_all = dataMap[globalPoints.point14];
					
					$scope.$apply();
					option_productPie.series[0].data[0].value=$scope.dayProductInfo_mac1;
					option_productPie.series[0].data[1].value=$scope.dayProductInfo_mac2;
					productPie.setOption(option_productPie,true);
				}else{
					console.log(data.msg)
				}
			},
			error: function(){
				console.log("请求生产信息数据异常！")
			}
		});
	}
	$scope.loadData_producInfo(); 
	$scope.changeMac=function(){
		 $scope.curMacPoint=$("#curMacPoint").val();
		 $scope.loadData_listOfInd($scope.curMacPoint);
	}
	$scope.loadData_listOfInd=function(macIndex){
		var points=new Array();
		for(var i=15;i<=34;i++){
			if(($scope.curMacPoint=="1" && i%2==1)
				||($scope.curMacPoint=="2" && i%2==0)){
				var str = "point"+i;
				points=points.concat(globalPoints[str]);
			}
		}
		$.ajax({
			type: "GET",
			url: "GetPointDataController/getManyPointData?pointNames="+points,
			success: function(data){
				if(data.code="1"){
					var dataMap = data.data;
					var i=1;
					for(var j=15;j<=34;j++){
						var str = "point_proInfo_"+i;
						if((macIndex=="1" && j%2==1)
							||(macIndex=="2" && j%2==0)){
							var pointStr =  "point"+j;
							$scope[str]=dataMap[globalPoints[pointStr]];
							i++;
						}
					}
					$scope.$apply();
				}else{
					console.log(data.msg)
				}
			},
			error: function(){
				console.log("请求生产信息数据异常！")
			}
		});
		
	}
	$scope.loadData_listOfInd($scope.curMacPoint);
	
	var autoRefresh;
    //自动刷新
    autoRefresh = $interval(function(){
    	$scope.loadData_producInfo();
    	$scope.loadData_listOfInd($scope.curMacPoint);
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
