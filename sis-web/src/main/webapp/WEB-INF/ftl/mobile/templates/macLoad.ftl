<ion-view view-title="机组负荷">
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
				          <span id="hourCurLoad" class="item-note" style="color: #5793f3;">
				          {{hourLoad.cur}}
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-arrow-up-a" style="color: #5793f3;font-size: 24px;"></i>
				         	最高负荷
				          <span class="item-note" style="color: #5793f3;"> 
				            {{hourLoad.max}}
				          </span>
				        </a>
				        <a class="item item-icon-left " >
				          <i class="icon ion-arrow-down-a" style="color: #5793f3;font-size: 24px;"></i>
				          	最低负荷
				          <span class="item-note" style="color: #5793f3;">
				          {{hourLoad.min}}
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon ion-pie-graph" style="color: #5793f3;font-size: 21px;"></i>
				         	&nbsp负荷率&nbsp
				          <span class="item-note" style="color: #5793f3;">
				           {{hourLoad.per}}
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
				          {{dayLoad.cur}}
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-arrow-up-a" style="color: #5793f3;font-size: 24px;"></i>
				         	最高负荷
				          <span class="item-note" style="color: #5793f3;"> 
				           {{dayLoad.max}}
				          </span>
				        </a>
				        <a class="item item-icon-left " >
				          <i class="icon ion-arrow-down-a" style="color: #5793f3;font-size: 24px;"></i>
				          	最低负荷
				          <span class="item-note" style="color: #5793f3;">
				           {{dayLoad.min}}
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon ion-pie-graph" style="color: #5793f3;font-size: 21px;"></i>
				         	&nbsp负荷率&nbsp
				          <span class="item-note" style="color: #5793f3;">
				           {{dayLoad.per}}
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
				           {{monthLoad.cur}}
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-arrow-up-a" style="color: #5793f3;font-size: 24px;"></i>
				         	最高负荷
				          <span class="item-note" style="color: #5793f3;"> 
				            {{monthLoad.max}}
				          </span>
				        </a>
				        <a class="item item-icon-left " >
				          <i class="icon ion-arrow-down-a" style="color: #5793f3;font-size: 24px;"></i>
				          	最低负荷
				          <span class="item-note" style="color: #5793f3;">
				           {{monthLoad.min}}
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon ion-pie-graph" style="color: #5793f3;font-size: 21px;"></i>
				         	&nbsp负荷率&nbsp
				          <span class="item-note" style="color: #5793f3;">
				            {{monthLoad.per}}
				          </span>
				        </a>
			      </div>
	    	  </div>
	     </div>
	    
    </ion-content>
</ion-view>