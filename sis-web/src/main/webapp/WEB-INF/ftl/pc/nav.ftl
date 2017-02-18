<div id="NavBar" ng-controller="NavCtrl" class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
	        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	        </button>
	        <a class="navbar-brand hidden-sm" href="javascript:void(0);" style="color:white;">SIS后台管理</a>
        </div>
        <div class="navbar-collapse collapse" role="navigation">
	        <ul class="nav navbar-nav">
	            <li class="dropdown" ng-repeat="(indexAll, item) in menuList" ng-class="{true: 'active', false: 'inactive'}[liActive(item.key)]">
			        <a href="{{item.link}}" class="dropdown-toggle " data-toggle="dropdown" ng-if="item.children.length>0" ng-cloak>
			        	<i class="{{item.iconClass}}" ng-cloak></i>
			        	{{item.name}}
			        	<span class="caret" ng-if="item.children.length>0"></span>
			        </a>
			        <a href="{{item.link}}" class="dropdown-toggle " ng-if="item.children.length<1" ng-cloak>
			        	<i class="{{item.iconClass}}" ng-cloak></i>
			        	{{item.name}}
			        	<span class="caret" ng-if="item.children.length>0"></span>
			        </a>
			        <ul class="dropdown-menu" role="menu" ng-if="item.children.length>0">
			            <li ng-repeat="it in item.children track by $index" ng-cloak>
			            	<a href="{{it.link}}" class="" ng-cloak><i class="{{it.iconClass}}" ng-cloak></i>&emsp;{{it.name}}</a>
			            </li>
			        </ul>
	            </li>
	        </ul>
	        <ul class="nav navbar-nav navbar-right hidden-sm">
	            <li ng-show="userInfo.hasLogin==true">
	            	<a class="" ng-cloak>用户名：{{userInfo.userName}}</a>
	            	<li id="logout"><a href="logout"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span><span>退出</span></a></li> 
	            </li>
	        </ul>
        </div>
    </div>
</div>