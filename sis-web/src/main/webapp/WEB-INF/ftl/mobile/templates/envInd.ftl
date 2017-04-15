<ion-view view-title="环保指标">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-content>
    	<div class="datePick">
    		<div style="float:left;width:20%;margin-top:5px;">
    			<i class="icon  ion-chevron-left" style="color: white;font-size: 24px;float: right;"></i>
    		</div>
    		<div style="float:left;width:60%;">
    			<input id="now" type="text" readonly="" placeholder="2016-05-11" data-lcalendar="2016-05-11,2016-05-11" 
    			style="width:100%;background: #5793f3;height:30px;margin-left: 34%;color：white;" ng-model="queryDate" ng-change="dateChage()" />
    		</div>
    		<div style="float:left;width:20%;margin-top:5px;">
    			<i class="icon  ion-chevron-right" style="color: white;font-size: 24px;float: left;"></i>
    		</div>
    	</div>
    </ion-content>
</ion-view>
