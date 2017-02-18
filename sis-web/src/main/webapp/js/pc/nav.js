var pageApp = angular.module("pageApp",['localytics.directives']);
pageApp.factory('userInfo', function() {
	  return {
		  userName: "未登录",
		  hasLogin: false
	  }
});
pageApp.controller('NavCtrl',function($scope,$timeout,userInfo) {
	$scope.menuList=[
	  	{
	  		name:"首页",
	  		link:"index",
	  		key:"index",
	  		children:[]
	  	},
	    {
	   	 name:"点名管理",
	  		link:"pointDataManage_pc/toPage",
	  		key:"pointDataManage_pc",
	  		children:[]
	    }
	];
//	//取用户信息
//	if(!userInfo.hasLogin){
//		 $.ajax({
//	            type: "GET",
//	            url: "/getCurrentUserInfo",
//	            dataType: 'json',
//	            success: function(data) {
//	                if (data.success) {
//	                	userInfo.userName=data.userInfo.loginName;
//	                	userInfo.hasLogin=true;
//	                	$timeout(function(){
//	                		$scope.userInfo=userInfo;
//	                	},100);
//	                }else{
//	                	console.log(data);
//	                }
//	            },
//	            error: function() {
//	            	console.log("取用户信息失败！");
//	            }
//	        });
//	}
//	$.ajax({
//        type: "GET",
//        url: "/getUserMenuController/getMenu",
//        dataType: 'json',
//        success: function(data) {
//            var menus=JSON.parse(data.menus);
//            $scope.menuList=menus;
//        },
//        error: function() {
//        	console.log("取用户拥有的菜单失败！");
//        }
//    });
	$scope.liActive=function(key){
		return pageKey==key;
	};
	//获取浏览器窗口高度windowHeight，将body的子container的高度设置为（windowHeight-50）
	var bodyHeight=($(window).height()-50)+"px";
	$("body>.container").css("height",bodyHeight)
	//窗口大小变化时刷新页面
	$(window).resize(function() {
		location.reload();
	});
});

