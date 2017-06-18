<ion-view view-title="电量指标">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-nav-buttons side="right">
     	 <select style="background-color: #387ef5;border-color: transparent;color: white;" id="curMacPoint" ng-model="curMacPoint" ng-change="changeMac()">
	      <option value="1">#1机组</option>
	      <option value="2">#2机组</option>
	    </select>
    </ion-nav-buttons>
    <ion-content >
    	 <div class="tabs-striped tabs-top tabs-background-positive tabs-color-light">
		      <div id="chackActive3" class="tabs tabs-select-viewtype" style="margin-top:-45px;">
			        <a class="tab-item active" ng-click="changeViewType('hour',0)">
			      	         日累计
			        </a>
			        <a class="tab-item" ng-click="changeViewType('day',1)">
			        	 月累计
			        </a>
			        <a class="tab-item " ng-click="changeViewType('month',2)">
			        	年累计
			        </a>
		      </div>
	     </div>
	     <div class="prod" ng-show="showViewIndex==0" style="width:100%;margin-top: 60px; display: inline-block;">
	     	 <div id="dayProChart"style="width:100%;height:600px;margin-top:0px;"></div>
	     </div>
	     <div class="prod" ng-show="showViewIndex==1" style="width:100%;margin-top: 60px; display: inline-block;">
	     	 <div id="monthProChart"style="width:100%;height:600px;margin-top:0px;"></div>
	     </div>
	      <div class="prod" ng-show="showViewIndex==2" style="width:100%;margin-top: 60px; display: inline-block;">
	     	 <div id="yearProChart"style="width:100%;height:600px;margin-top:0px;"></div>
	     </div>
    </ion-content>
</ion-view>
