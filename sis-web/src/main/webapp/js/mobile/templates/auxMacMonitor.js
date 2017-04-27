app.controller('auxMacMonitorTabCtrl', function($scope,$state) {
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
});
