app.controller('auxMacMonitorTabCtrl', function($scope,$state,$interval) {
	var calendar = new LCalendar();
    calendar.init({
        'trigger': '#now1', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });
    $scope.dateChage=function(){
    	console.log($("#now1").val());
    }
    $scope.addDate=function(plusVal){
    	console.log(plusVal);
    	var rst;
    	if($("#now1").val()){
    		rst=moment($("#now1").val()).add(plusVal, 'days').format("YYYY-MM-DD");
    	}else if($("#now1").attr("placeholder")){
    		rst=moment($("#now1").attr("placeholder")).add(plusVal, 'days').format("YYYY-MM-DD");
    	}
    	$('#now1').attr('placeholder',rst);
    	$('#now1').val(rst);
    }
    $scope.viewDeail = function(itemId){
    	$state.go('tabs.runDetail', {item_id: itemId});
    };
    $scope.loadData=function(){
    	var points = [];
    	for(var i=53;i<=100;i++){
    		var str = "point"+i;
			points=points.concat(globalPoints[str]);
    	}
    	var timeStr = $("#now1").attr("placeholder")
    	if(!timeStr){
    		return;
    	}
    	var timeStart =moment(timeStr+" 00:00:00").unix();
    	var timeEnd = moment(timeStr+" 23:59:59").unix();
    	var timePeriod=24*3600;
    	$.ajax({
			type: "GET",
			url: "GetPointDataController/GetPointsOneDayData?points="+points+"&timeStart="+timeStart+"&timeEnd="+timeEnd+"&timePeriod="+timePeriod,
			success: function(data){
				if(data.code="1"){
					var dataMap = data.data;
					for(var j=53;j<=100;j++){
						var str = "point_auxInfo_"+i;
						var pointStr =  "point"+j;
						$scope[str]=dataMap[globalPoints[pointStr]];
						i++;
					}
					$scope.$apply();
					console.log(dataMap);
				}else{
					console.log(data.msg)
				}
			},
			error: function(){
				console.log("请求生产信息数据异常！")
			}
		});
    }
    $interval(function(){
    	$scope.loadData();
    },2000);
});
