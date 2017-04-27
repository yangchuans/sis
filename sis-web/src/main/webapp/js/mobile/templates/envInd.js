app.controller('envIndTabCtrl', function($scope) {
	var calendar = new LCalendar();
    calendar.init({
        'trigger': '#now', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });
    $scope.dateChage=function(){
    	console.log($("#now").val());
    }
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
});