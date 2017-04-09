<ion-view view-title="机组负荷">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-content >
    	  <div class="tabs-striped tabs-top tabs-background-positive tabs-color-light">
		      <div class="tabs tabs-select-viewtype" style="margin-top:-88px;">
			        <a class="tab-item active" ng-click="changeViewType('hour',0)">
			      	          按时统计
			        </a>
			        <a class="tab-item" ng-click="changeViewType('day',1)">
			        	  按日统计
			        </a>
			        <a class="tab-item " ng-click="changeViewType('month',2)">
			        	  按月统计
			        </a>
		      </div>
	     </div>
	     <div class="hourViewDom" ng-show="showViewIndex==0">
	     	 按时统计
	     	 <div id="hourloadChart"></div>
	     </div>
    	 <div class="dayViewDom" ng-show="showViewIndex==1">
	     	 按日统计
	     	 <div id="dayloadChart"></div>
	     </div>
	      <div class="monthViewDom" ng-show="showViewIndex==2">
	     	 按月统计
	     	 <div id="monthloadChart"></div>
	     </div>
    </ion-content>
</ion-view>