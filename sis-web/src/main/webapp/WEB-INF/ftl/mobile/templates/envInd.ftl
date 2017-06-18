<ion-view view-title="环保指标">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-content>
    	<div class="datePick">
    		<div style="float:left;width:20%;margin-top:5px;" ng-click="addDate(-1)">
    			<i class="icon  ion-chevron-left" style="color: white;font-size: 24px;float: right;"></i>
    		</div>
    		<div style="float:left;width:60%;">
    			<input id="now" type="text" readonly="" placeholder="2016-05-11" data-lcalendar="2016-05-11,2016-05-11" class="white" 
    			style="width:100%;background: #5793f3;color:white;height:30px;margin-left: 34%;color：white;" ng-model="queryDate" ng-change="changeDate()" />
    		</div>
    		<div style="float:left;width:20%;margin-top:5px;" ng-click="addDate(1)">
    			<i class="icon  ion-chevron-right" style="color: white;font-size: 24px;float: left;"></i>
    		</div>
    	</div>
    	<div class="row row-head responsive-break" style="background:#5793f3">
		      <div class="col col-50" >
		        <div class="col-item row-head-item" >环保指标</div>
		      </div>
		      <div class="col col-30" >
		        <div class="col-item row-head-item">超限时间(h)</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item row-head-item">状态</div>
		      </div>
		      <!--
		       <div class="col col-20 " >
		        <div class="col-item row-head-item">负责人</div>
		      </div>
		      -->
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-60" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 145px;">1#SO2浓度</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">{{envPoint101}}</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item" ng-class="{'结束': 'font-green', '未结束': 'font-warning'}[envPoint107]">{{envPoint107}}</div>
		      </div>
		      
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-60" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 145px;">1#NOX浓度</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">{{envPoint102}}</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item " ng-class="{'结束': 'font-green', '未结束': 'font-warning'}[envPoint108]">{{envPoint108}}</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-60" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 145px;">1#烟尘浓度（湿电后）</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">{{envPoint103}}</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item " ng-class="{'结束': 'font-green', '未结束': 'font-warning'}[envPoint109]">{{envPoint109}}</div>
		      </div>
	   </div>
	    <div class="row row-body responsive-break">
		      <div class="col col-60" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 145px;">2#SO2浓度</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">{{envPoint104}}</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item " ng-class="{'结束': 'font-green', '未结束': 'font-warning'}[envPoint110]">{{envPoint110}}</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-60" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 145px;">2#NOX浓度</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">{{envPoint105}}</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item " ng-class="{'结束': 'font-green', '未结束': 'font-warning'}[envPoint111]">{{envPoint111}}</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-60" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 145px;">2#烟尘浓度（湿电后）</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">{{envPoint106}}</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item " ng-class="{'结束': 'font-green', '未结束': 'font-warning'}[envPoint112]">{{envPoint112}}</div>
		      </div>
	   </div>
    </ion-content>
</ion-view>
