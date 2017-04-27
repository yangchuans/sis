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
    			style="width:100%;background: #5793f3;height:30px;margin-left: 34%;color：white;" ng-model="queryDate" ng-change="dateChage()" />
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
		      <div class="col col-20" >
		        <div class="col-item row-head-item">运行时间</div>
		      </div>
		      <div class="col col-10" >
		      </div>
	    </div>
	    <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">机组</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_blue" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">12h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)">
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">磨煤机</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_blue" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">18.7h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)">
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">给水泵</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_red" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">24h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)">
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">引风机</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_blue" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">24h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)" >
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">排粉机</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_red" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">16.4h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)" >
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">循环泵</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_blue" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">18.3h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)">
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">一次风机</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_blue" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">22.5h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)" >
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">送风机</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_red" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">24h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)">
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">凝结泵</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_red" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">24h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)">
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-50" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">脱硫浆液泵</div>
		      </div>
		      <div class="col col-20" > 
		        <i class="icon  ion-ionic status_blue" style="font-size: 24px;float: left;"></i>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">14h</div>
		      </div>
		      <div class="col col-10" ng-click="viewDeail(1)">
		        <i class="icon  ion-ios-arrow-right" style="font-size: 24px;float: left;"></i>
		      </div>
	   </div>
    </ion-content>
</ion-view>
