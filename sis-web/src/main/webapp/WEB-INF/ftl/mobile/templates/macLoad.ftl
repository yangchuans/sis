<ion-view view-title="机组负荷">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-nav-buttons side="right">
     	 <select style="background-color: #387ef5;border-color: transparent;color: white;">
	      <option selected="selected">#1机组</option>
	      <option>#2机组</option>
	      <option>#3机组</option>
	    </select>
    </ion-nav-buttons>
    <ion-content >
    	  <div class="tabs-striped tabs-top tabs-background-positive tabs-color-light">
		      <div id="chackActive2"  class="tabs tabs-select-viewtype" style="margin-top:-88px;">
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
	     	 <div id="hourloadChart"></div>
	     	 <div class="content has-header ionic-pseudo" style="margin-top: -74px;">
			      <div class="list" >
				        <a class="item item-icon-left" >
				          <i class="icon  ion-android-arrow-dropdown-circle" style="color: #5793f3;font-size: 24px;"></i>
				         	 当前负荷
				          <span class="item-note" style="color: #5793f3;">
				           11.2
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-arrow-up-a" style="color: #5793f3;font-size: 24px;"></i>
				         	最高负荷
				          <span class="item-note" style="color: #5793f3;"> 
				            23.4
				          </span>
				        </a>
				        <a class="item item-icon-left " >
				          <i class="icon ion-arrow-down-a" style="color: #5793f3;font-size: 24px;"></i>
				          	最低负荷
				          <span class="item-note" style="color: #5793f3;">
				           8
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon ion-pie-graph" style="color: #5793f3;font-size: 21px;"></i>
				         	&nbsp负荷率&nbsp
				          <span class="item-note" style="color: #5793f3;">
				            92%
				          </span>
				        </a>
			      </div>
	    	  </div>
	     </div>
    	 <div class="dayViewDom" ng-show="showViewIndex==1">
	     	 <div id="dayloadChart"></div>
	     	 <div class="content has-header ionic-pseudo" style="margin-top: -74px;">
			      <div class="list" >
				        <a class="item item-icon-left" >
				          <i class="icon  ion-android-arrow-dropdown-circle" style="color: #5793f3;font-size: 24px;"></i>
				         	 当前负荷
				          <span class="item-note" style="color: #5793f3;">
				           630
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-arrow-up-a" style="color: #5793f3;font-size: 24px;"></i>
				         	最高负荷
				          <span class="item-note" style="color: #5793f3;"> 
				            688
				          </span>
				        </a>
				        <a class="item item-icon-left " >
				          <i class="icon ion-arrow-down-a" style="color: #5793f3;font-size: 24px;"></i>
				          	最低负荷
				          <span class="item-note" style="color: #5793f3;">
				           408
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon ion-pie-graph" style="color: #5793f3;font-size: 21px;"></i>
				         	&nbsp负荷率&nbsp
				          <span class="item-note" style="color: #5793f3;">
				            81%
				          </span>
				        </a>
			      </div>
	    	  </div>
	     </div>
	      <div class="monthViewDom" ng-show="showViewIndex==2">
	     	 <div id="monthloadChart"></div>
	     	 <div class="content has-header ionic-pseudo" style="margin-top: -74px;">
			      <div class="list" >
				        <a class="item item-icon-left" >
				          <i class="icon  ion-android-arrow-dropdown-circle" style="color: #5793f3;font-size: 24px;"></i>
				         	 当前负荷
				          <span class="item-note" style="color: #5793f3;">
				           1530
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-arrow-up-a" style="color: #5793f3;font-size: 24px;"></i>
				         	最高负荷
				          <span class="item-note" style="color: #5793f3;"> 
				            1688
				          </span>
				        </a>
				        <a class="item item-icon-left " >
				          <i class="icon ion-arrow-down-a" style="color: #5793f3;font-size: 24px;"></i>
				          	最低负荷
				          <span class="item-note" style="color: #5793f3;">
				           1508
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon ion-pie-graph" style="color: #5793f3;font-size: 21px;"></i>
				         	&nbsp负荷率&nbsp
				          <span class="item-note" style="color: #5793f3;">
				            90%
				          </span>
				        </a>
			      </div>
	    	  </div>
	     </div>
	    
    </ion-content>
</ion-view>