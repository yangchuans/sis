<ion-view view-title="重要辅机状态">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-content>
    	  <div class="datePick">
    		<div style="float:left;width:20%;margin-top:5px;" ng-click="addDate(-1)">
    			<i class="icon  ion-chevron-left" style="color: white;font-size: 24px;float: right;"></i>
    		</div>
    		<div style="float:left;width:60%;">
    			<input id="now1" type="text" readonly="" placeholder="2016-05-11" data-lcalendar="2016-05-11,2016-05-11" class="white"
    			style="width:100%;background: #5793f3;height:30px;margin-left: 34%;color：white;" ng-model="queryDate" ng-change="changeDate()" />
    		</div>
    		<div style="float:left;width:20%;margin-top:5px;" ng-click="addDate(1)">
    			<i class="icon  ion-chevron-right" style="color: white;font-size: 24px;float: left;"></i>
    		</div>
    	</div>
    	<div class="row row-head responsive-break" style="background:#5793f3">
		      <div class="col col-50" >
		        <div class="col-item row-head-item" >辅机名称</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item row-head-item">设备状态</div>
		      </div>
		      <div class="col col-30" >
		        <div class="col-item row-head-item">运行时间(h)</div>
		      </div>
	    </div>
	    <div class="row row-body responsive-break" ng-repeat="point in dataList track by $index">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">{{point.name}}</div>
		      </div>
		      <div class="col col-20" > 
		        <i ng-class="{'结束': 'icon  ion-ionic status_blue', '未结束': 'icon  ion-ionic status_red'}[point.status]" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">{{point.time}}</div>
		      </div>
	   </div>
    </ion-content>
</ion-view>
