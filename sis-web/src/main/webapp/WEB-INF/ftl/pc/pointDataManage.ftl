<#include "/common/macro.ftl" />
<!DOCTYPE html>
<html>
<head>
	<title>SIS APP后台管理</title>
	<script type="text/javascript" >
		var pageKey="pointDataManage_pc";
	</script>
	<#include "/pc/header.ftl" />
	<style type="text/css">
		.query_row{
            margin-top:20px;
        }
        .modal_row{
            margin-top: 30px;
            width: 75%;
            margin-left: auto;
            margin-right: auto;
        }
        .glyphicon-asterisk{
            color: red;
        }
        .layer_foot_row{
            margin-top: 23px;
            width: 40%;
            margin-left: auto;
            margin-right: auto;
        }
	</style>
</head>
<body ng-app="pageApp">
	<#include "/pc/nav.ftl" />
    <div class="container" ng-controller="pointDataManageCtrl" >
    	<div class="row query_row">
    		 <div class="col-sm-4">
                   <button type="button" class="btn btn-sm btn-info glyphicon glyphicon-file"
		                ng-click="AddPointInfo()">
		                	新建点名
		           </button>
             </div>
             <div class="col-sm-4"></div>
             <div class="col-sm-4">
                  <div class="input-group" style="width:100%;">
                      <input type="text" class="form-control" placeholder="输入点名,回车查询" ng-model="queryPointName" id="queryPointName">
                  </div>
             </div>
        </div>
    	<!-- 列表栏 -->
        <div class="row query_row">
              <table class="table">
                  <thead>
                    <tr>
                      <th>点名</th>
                      <th>单位</th>
                      <th>备注</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody valign="middle">
                    <tr ng-repeat="item in pointList track by $index">
                      <td>{{item.pointName}}</td>
                      <td>{{item.unit}}</td>
                      <td>{{item.remark}}</td>
                      <td>
                        <button style="padding: 3px 6px;" class="btn btn-danger btn-sm glyphicon glyphicon-edit" ng-click="EditPointInfo($index)">编辑</button>
                      </td>
                    </tr>
                  </tbody>
              </table>
        </div>
        <!-- 分页插件 -->
      	<div id="callBackPager" class="m-pagination"></div>
      	<!-- 新增/编辑点名模态框 -->
	    <div class="remodal" data-remodal-id="editModal" >
	        <button data-remodal-action="close" class="remodal-close"></button>
	        <h3 id="editFlag">编辑点名信息</h3>
	        <h3 id="addFlag">新增点名</h3>
	        <hr>
	        <div class="row modal_row">
	            <div class="input-group input-group-sm">
	                <span class="input-group-addon" style="top:-1px;"><span class="glyphicon glyphicon-asterisk"></span>&emsp;点名</span>
	                <input type="text" class="form-control" ng-model="commitObj.pointName" id="pointName">
	            </div>
	        </div>
	        <div class='row modal_row'>
	            <div class="input-group input-group-sm">
	                <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span>&emsp;单位</span>
	                <input type="text" class="form-control" ng-model="commitObj.unit" id="unit">
	            </div>
	        </div>
	        <div class='row modal_row'>
	            <div class="input-group input-group-sm">
	                <span class="input-group-addon">&emsp;&emsp;备注</span>
	                <input type="text" class="form-control" ng-model="commitObj.remark" id="remark">
	            </div>
	        </div>
	        <hr>
	        <div class="row ">
	            <button data-remodal-action="cancel" class="remodal-cancel" id="cancel">放弃</button>
	            <button  class="remodal-confirm" id="updatePointInfo" ng-click="SavaPointData">保存</button>
	        </div>
	    </div>
    </div>
</body>
<script type="text/javascript" src="js/pc/pointDataManage.js"></script>
</html>