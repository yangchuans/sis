<#include "/common/macro.ftl" />
<!DOCTYPE html>
<html>
<head>
	<title>SIS APP后台管理</title>
	<script type="text/javascript" >
		var pageKey="index";
	</script>
	<#include "/pc/header.ftl" />
</head>
<body ng-app="pageApp">
	<#include "/pc/nav.ftl" />
    <div class="container" ng-controller="indexCtrl" >
		<div class="row text-center" style="position:relative;height:40%;">
    		<h1 style="position:absolute;bottom:0;width: 100%;">欢迎使用SIS APP后台管理系统</h1>
    	</div>
    	<div class="row text-center" style="position:relative;height:60%;">
    		<ul class="header-nav" style="list-style: none;">
		          <li><a href="javascript:void(0);" style="text-decoration: none;cursor: default;"><b>service issuer</b> : SIS </a></li>
		          <li style="margin-left:191px;"><a style="text-decoration: none;cursor: default;" href="javascript:void(0);"><b>email</b> : yangchuans@aliyun.com</a></li>
		    </ul>
    	</div>
    </div>
</body>
<script type="text/javascript" src="js/pc/index.js"></script>
</html>