var  options = {
	hashTracking: false, //模态框打开状态下刷新页面会不会关闭模态框
    closeOnOutsideClick:false //模态框打开状态下点击模态框以外的部分会不会关闭模态框
};
var instOfEdit = $('[data-remodal-id=editModal]').remodal(options);
pageApp.controller('pointDataManageCtrl',function($scope,$timeout) {
	$scope.pointList=[];
	$scope.commitObj={};
	//分页查询用户列表的回调函数
	$("#callBackPager").pagination({
	    total: 15,
	    firstBtnText: '首页',
	    lastBtnText: '尾页',
	    prevBtnText: '上一页',
	    nextBtnText: '下一页',
	    showInfo: true,
	    showJump: true,
	    jumpBtnText:'跳转',
	    showPageSizes: true,
	    pageSizeItems:[15,20,30],
	    infoFormat: '显示第{start} ~ {end}条，共{total}条',
    	remote: {
            url: 'pointDataManage_pc/pagePointData',
            pageParams: function(data){
                return {
                	startColumn:data.pageIndex<0 ? 0 : data.pageIndex* data.pageSize,		//请求参数，当前页数，索引从0开始
                	rowMax:data.pageSize,		//请求参数，每页数量
                	pointName: $("#queryPointName").val() //自定义请求参数
                };
            },
            totalName: 'pageCount',    				//指定返回数据的总数据量的字段名
            success: function (result, pageIndex) {
            	$timeout(function(){
            		$scope.pointList=result.pointList;
            	},100)
            }
        }  
	});
	//查询按钮
	$scope.queryPointList=function(){
		$("#callBackPager").pagination('remote');
	}
	//新增按钮
	$scope.AddPointInfo=function(){
		$scope.commitObj={};
		$("#pointName").val("");
		$("#unit").val("");
		$("#remark").val("");
		$("#editFlag").hide();
		$("#addFlag").show();
		$("#pointName").removeAttr("disabled");
		instOfEdit.open();
	}
	//编辑按钮
	$scope.EditPointInfo=function(index){
		var commitObj = JSON.parse(JSON.stringify($scope.pointList[index]));
		$("#pointName").val(commitObj.pointName);
		$("#unit").val(commitObj.unit);
		$("#remark").val(commitObj.remark);
		$scope.commitObj.id=commitObj.id;
		$("#editFlag").show();
		$("#addFlag").hide();
		$("#pointName").attr("disabled","disabled");
		instOfEdit.open();
	}
	//新增时判断点名是否重复
	$scope.JudgePointNameHasExists=function(pointName){
		var hasExist = false;
		$.ajax({
			url : "pointDataManage_pc/JudgePointNameHasExists.json",
			data : {pointName:pointName},
			type : "POST",
			async : false,
			success : function(data) {
				hasExist = data.hasExsts;
			}
		});
		if(hasExist){
			layer.tips('点名重复', '#pointName', {tips: [1, '#333']});
			return true;
		}
	}
	//保存前判空
	$scope.checkParams=function(){
		if(!$scope.commitObj.pointName){
			layer.tips('点名不能为空', '#pointName', {tips: [1, '#333']});
			return true;
		}
		if(!$scope.commitObj.unit){
			layer.tips('单位不能为空', '#unit', {tips: [1, '#333']});
			return true;
		}
		return false;
	}
	//保存按钮
	$("#updatePointInfo").on("click",function(){
		$scope.commitObj.pointName = $("#pointName").val();
		$scope.commitObj.unit = $("#unit").val();
		$scope.commitObj.remark = $("#remark").val();
		if($scope.checkParams()){
			return;
		}
		if($scope.JudgePointNameHasExists( $("#pointName").val())){
			return;
		}
		var url = "pointDataManage_pc/addPointData";
		if($scope.commitObj.id){
			url = "pointDataManage_pc/updatePointData";
		}
		$.ajax({
            type: "POST",
            data: JSON.stringify($scope.commitObj),
            url: url,
            contentType: 'application/json;charset=UTF-8',
            dataType: 'json',
            success: function(data) {
                if (data.success) {
                	$("#callBackPager").pagination('remote');
                	instOfEdit.close();
                	swal({
                        title: "成功",
                        text: "保存点名信息成功",
                        type: "success",
                        timer: 1500
                    }); 
                }
            },
            error: function() {
                swal({
                    title: "错误",
                    text: "保存点名信息失败！",
                    type: "error",
                    timer: 1500
                });
            }
        });
		$scope.commitObj={};
	});
	//按下回车查询
    $(function() {
        document.onkeydown = function(e) {
            var ev = document.all ? window.event : e;
            if (ev.keyCode == 13) {
            	$scope.queryPointList(); // 触发查询
            }
        }
    });
});