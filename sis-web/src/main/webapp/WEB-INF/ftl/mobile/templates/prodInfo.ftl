<ion-view view-title="生产信息">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-nav-buttons side="right" >
     	 <select style="background-color: #387ef5;border-color: transparent;color: white;" id="curMacPoint" ng-model="curMacPoint" ng-change="changeMac()" ng-show="showViewIndex==1">
	      <option value="1">#1机组</option>
	      <option value="2">#2机组</option>
	    </select>
    </ion-nav-buttons>
    <ion-content >
    	<div class="tabs-striped tabs-top tabs-background-positive tabs-color-light">
		      <div id="chackActive1" class="tabs tabs-select-viewtype" style="margin-top:-50px;">
			        <a class="tab-item active" ng-click="changeViewType('hour',0)">
			      	      生产信息
			        </a>
			        <a class="tab-item" ng-click="changeViewType('day',1)">
			        	指标列表
			        </a>
		      </div>
	     </div>
	     <div style="width:100%" ng-show="showViewIndex==0">
	     	 <div id="productPie" style="width:100%;height:370px;"></div>
		     <div class="row row-head responsive-break" style="background:#5793f3;margin-top: 20px;">
			      <div class="col col-40" >
			        <div class="col-item row-head-item" >机组编号</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item row-head-item">#1机</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item row-head-item">#2机</div>
			      </div>
			       <div class="col col-20 " >
			        <div class="col-item row-head-item">合计</div>
			      </div>
		   </div>
		   <div class="row row-body responsive-break">
			      <div class="col col-40" >
			        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">年发电量累计(kwh)</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item">{{yearProductInfo_mac1}}</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item ">{{yearProductInfo_mac2}}</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item ">{{yearProductInfo_all}}</div>
			      </div>
		   </div>
		   <div class="row row-body responsive-break">
			      <div class="col col-40" >
			        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">月发电量累计(kwh)</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item">{{monthProductInfo_mac1}}</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item ">{{monthProductInfo_mac2}}</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item">{{monthProductInfo_all}}</div>
			      </div>
		   </div>
		   <div class="row row-body responsive-break">
			      <div class="col col-40" >
			        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">日发电量累计(kwh)</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item">{{dayProductInfo_mac1}}</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item ">{{dayProductInfo_mac2}}</div>
			      </div>
			      <div class="col col-20" >
			        <div class="col-item" >{{dayProductInfo_all}}</div>
			      </div>
		   </div>
	    </div>
	    <div style="width:100%;display: inline-block;margin-top: 24px;" ng-show="showViewIndex==1">
	    	<div class="content has-header ionic-pseudo" style="margin-top: -20px;">
			      <div class="list" >
				        <a class="item item-icon-left" >
				          <i class="icon  ion-ios-flask" style="color: #5793f3;font-size: 24px;"></i>
				         	主气温度  |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				           {{point_proInfo_1}}KPa
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-ios-speedometer" style="color: #5793f3;font-size: 24px;"></i>
				         	主气压力  |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          {{point_proInfo_2}}MPA
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-ios-flask" style="color: #5793f3;font-size: 24px;"></i>
				         	再热温度  |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          	{{point_proInfo_3}}℃
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-ios-speedometer" style="color: #5793f3;font-size: 24px;"></i>
				         	再热气压  |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          	{{point_proInfo_4}}MPA
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-ios-flask" style="color: #5793f3;font-size: 24px;"></i>
				         	给水温度  |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          	{{point_proInfo_5}}℃
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-ios-albums-outline" style="color: #5793f3;font-size: 24px;"></i>
				         	 &nbsp;&nbsp; 真空 &emsp;|
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          	{{point_proInfo_6}}KPA
				          </span>
				        </a>
				        <a class="item item-icon-left" >
				          <i class="icon  ion-ios-flask" style="color: #5793f3;font-size: 24px;"></i>
				         	排烟温度 |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          	{{point_proInfo_7}}℃
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon  ion-ios-flask" style="color: #5793f3;font-size: 24px;"></i>
				         	送风温度 |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          	{{point_proInfo_8}}℃
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon   ion-paintbucket" style="color: #5793f3;font-size: 24px;"></i>
				         	锅炉效率 |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          	{{point_proInfo_9}}%
				          </span>
				        </a>
				         <a class="item item-icon-left" >
				          <i class="icon   ion-paintbucket" style="color: #5793f3;font-size: 24px;"></i>
				         	散热损失 |
				          <span class="item-note" style="color: #5793f3;font-size: larger;">
				          	{{point_proInfo_10}}%
				          </span>
				        </a>
			      </div>
	    	  </div>
	    </div>
    </ion-content>
</ion-view>
