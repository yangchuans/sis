<ion-view view-title="电量指标">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-content >
    	 <div class="tabs-striped tabs-top tabs-background-positive tabs-color-light">
		      <div class="tabs tabs-select-viewtype" style="margin-top:-45px;">
			        <a class="tab-item active" ng-click="changeViewType('hour',0)">
			      	         发电量
			        </a>
			        <a class="tab-item" ng-click="changeViewType('day',1)">
			        	 负荷率
			        </a>
			        <a class="tab-item " ng-click="changeViewType('month',2)">
			        	计划完成率
			        </a>
		      </div>
	     </div>
	     <div class="prod" ng-show="showViewIndex==0" style="width:100%;margin-top: 60px; display: inline-block;">
	     	 <div id="hourProChart" style="width:100%;height:350px;margin-top:-20px;"></div>
	     	 <div id="dayProChart"style="width:100%;height:350px;margin-top:-75px;"></div>
	     </div>
	     <div class="prod" ng-show="showViewIndex==1" style="width:100%;margin-top: 60px; display: inline-block;">
	     	 <div id="hourLoadRateChart" style="width:100%;height:350px;margin-top:-20px;"></div>
	     	 <div id="dayLoadRateChart"style="width:100%;height:350px;margin-top:-75px;"></div>
	     </div>
	      <div class="prod" ng-show="showViewIndex==2" style="width:100%;margin-top: 60px; display: inline-block;">
	     	 <div id="hourCompRateChart" style="width:100%;height:350px;margin-top:-20px;"></div>
	     	 <div id="dayCompRateChart"style="width:100%;height:350px;margin-top:-75px;"></div>
	     </div>
    </ion-content>
</ion-view>
