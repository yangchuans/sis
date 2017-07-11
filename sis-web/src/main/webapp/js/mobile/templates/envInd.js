app.controller('envIndTabCtrl', function($scope,$interval) {
	var calendar = new LCalendar();
    calendar.init({
        'trigger': '#now', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });
    $scope.addDate=function(plusVal){
    	console.log(plusVal);
    	var rst;
    	if($("#now").val()){
    		rst=moment($("#now").val()).add(plusVal, 'days').format("YYYY-MM-DD");
    	}else if($("#now").attr("placeholder")){
    		rst=moment($("#now").attr("placeholder")).add(plusVal, 'days').format("YYYY-MM-DD");
    	}
    	$('#now').attr('placeholder',rst);
    	$('#now').val(rst);
    }
    $("#now").val(moment().format("YYYY-MM-DD"));
    $("#now").attr("placeholder",moment().format("YYYY-MM-DD"));
    $scope.loadData = function(timeStr){
    	if(!timeStr){
    		return;
    	}
    	//如果时间是今天就取实时的,否者就取当天最晚时间的（0点）
    	if(!timeStr){
    		return;
    	}
    	var timeStart,timeEnd,timePeriod;
    	if(timeStr==moment().format("YYYY-MM-DD")){
    		timeStart =moment().unix();
        	timeEnd = moment().unix();
    	}else{
    		var tempTime = moment(timeStr).add(1, 'days').unix();
    		timeStart =tempTime;
        	timeEnd = tempTime;
        	
    	}
    	timePeriod=86400;
		var points= new Array();
		for(var i=101;i<=112;i++){
			var str = "point"+i;
			points=points.concat(globalPoints[str]);
		}
    	
		$.ajax({
			type: "GET",
			url: "GetPointDataController/GetPointsOneDayData?points="+points+"&timeStart="+timeStart+"&timeEnd="+timeEnd+"&timePeriod="+timePeriod,
			success: function(data){
				if(data.code="1"){
					var dataMap = data.data;
					for(var i=101;i<=112;i++){
						var str = "point"+i;
						var ScopeStr="envPoint"+i;
						if(i>106){
							if(dataMap[globalPoints[str]]==1){
								$scope[ScopeStr]="未结束";
							}else{
								$scope[ScopeStr]="结束";
							}
						}else{
							$scope[ScopeStr]=dataMap[globalPoints[str]];
						}
					}
					$scope.$apply();
					
				}else{
					console.log(data.msg)
				}
			},
			error: function(){
				console.log("请求环保信息数据异常！")
			}
		});
	}
    $scope.loadData($("#now").attr("placeholder"));
    $scope.changeDate=function(){
    	if($("#now").val()){
    		$("#now").attr("placeholder",$("#now").val());
    	}
		 $scope.stopAutoRefresh();
		 $scope.loadData($("#now").attr("placeholder"));
		 autoRefresh = $interval(function(){
			 $scope.loadData($("#now").attr("placeholder"));
		 }, 5000);
	}
    var autoRefresh;
    //自动刷新
    autoRefresh = $interval(function(){
		 $scope.loadData($("#now").attr("placeholder"));
	 }, 5000);
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