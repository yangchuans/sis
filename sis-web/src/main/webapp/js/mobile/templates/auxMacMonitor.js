app.controller('auxMacMonitorTabCtrl', function($scope,$state,$interval) {
	var calendar = new LCalendar();
    calendar.init({
        'trigger': '#now1', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });
    $scope.dataList = [];
    var pointNameList=[
    	"#1磨煤机A",
    	"#1磨煤机B",
    	"#1磨煤机C",
    	"#1磨煤机D",
    	"#1磨煤机E",
    	"#1磨煤机F",
    	"#1送风机A",
    	"#1送风机B",
    	"#1引风机A",
    	"#1引风机B",
    	"#1一次风机A",
    	"#1一次风机B",
    	"#2磨煤机A",
    	"#2磨煤机B",
    	"#2磨煤机C",
    	"#2磨煤机D",
    	"#2磨煤机E",
    	"#2磨煤机F",
    	"#2送风机A",
    	"#2送风机B",
    	"#2引风机A",
    	"#2引风机B",
    	"#2一次风机A",
    	"#2一次风机B"
    ];
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
    $("#now1").val(moment().format("YYYY-MM-DD"));
    $("#now1").attr("placeholder",moment().format("YYYY-MM-DD"));
    $scope.viewDeail = function(itemId){
    	$state.go('tabs.runDetail', {item_id: itemId});
    };
    $scope.loadData=function(timeStr){
    	var points = [];
    	for(var i=53;i<=100;i++){
    		var str = "point"+i;
			points=points.concat(globalPoints[str]);
    	}
    	if(!timeStr){
    		return;
    	}
    	var timeStart =moment(timeStr+" 00:00:00").unix();
    	var timeEnd = moment(timeStr+" 23:59:59").unix();
    	var timePeriod=24*3600;
    	$.ajax({
			type: "GET",
			url: "GetPointDataController/getManyPointHistAvgUTC?points="+points+"&timeStart="+timeStart+"&timeEnd="+timeEnd+"&timePeriod="+timePeriod,
			success: function(data){
				if(data.code="1"){
					var dataMap = data.data;
					$scope.dataList = [];
					for(var i=53;i<=76;i++){
							var obj={};
							obj.name=pointNameList[i-53];
							obj.status = dataMap[globalPoints["point"+i]]==1?"未结束":"结束";
							obj.time = dataMap[globalPoints["point"+(i+24)]];
							$scope.dataList.push(obj);
					}
					$scope.$apply();
					console.log(dataMap);
				}else{
					console.log(data.msg)
				}
			},
			error: function(){
				console.log("请求辅机状态信息数据异常！")
			}
		});
    }
    $scope.loadData($("#now1").attr("placeholder"));
    var autoRefresh;
    //自动刷新
    autoRefresh = $interval(function(){
		 $scope.loadData($("#now1").attr("placeholder"));
	 }, 20000);
    $scope.changeDate=function(){
    	if($("#now1").val()){
    		$("#now1").attr("placeholder",$("#now1").val())
    	}
		 $scope.stopAutoRefresh();
		 autoRefresh = $interval(function(){
			 $scope.loadData($("#now1").attr("placeholder"));
		 }, 20000);
	}
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
