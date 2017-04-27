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
    			style="width:100%;background: #5793f3;color:white;height:30px;margin-left: 34%;color：white;" ng-model="queryDate" ng-change="dateChage()" />
    		</div>
    		<div style="float:left;width:20%;margin-top:5px;" ng-click="addDate(1)">
    			<i class="icon  ion-chevron-right" style="color: white;font-size: 24px;float: left;"></i>
    		</div>
    	</div>
    	<div class="row row-head responsive-break" style="background:#5793f3">
		      <div class="col col-40" >
		        <div class="col-item row-head-item" >环保指标</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item row-head-item">超限时间</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item row-head-item">状态</div>
		      </div>
		       <div class="col col-20 " >
		        <div class="col-item row-head-item">负责人</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">净烟气SOX浓度</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">8:01</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">王力</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">净烟气NOX浓度</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">8:01</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">刘虎</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">后屏第1排第26根管壁</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">9:28</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item font-green">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">李鸿明</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">后屏第1排第5根管壁</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">9:40</div>
		      </div>
		      <div class="col col-20 font-green" >
		        <div class="col-item">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">宋德</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">后屏第9排第6根管壁</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">10:01</div>
		      </div>
		      <div class="col col-20 font-green" >
		        <div class="col-item">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">马群</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">后屏第3排第2根管壁</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">10:31</div>
		      </div>
		      <div class="col col-20 font-green" >
		        <div class="col-item">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">刘洋</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">后屏第7排第4根管壁</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">14:31</div>
		      </div>
		      <div class="col col-20 font-warning" >
		        <div class="col-item">未结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">周建</div>
		      </div>
	   </div>
	    <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">后屏第1排第5根管壁</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">9:40</div>
		      </div>
		      <div class="col col-20 font-green" >
		        <div class="col-item">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">宋德</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">后屏第3排第7根管壁</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">15:01</div>
		      </div>
		      <div class="col col-20 font-green" >
		        <div class="col-item">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">马群</div>
		      </div>
	   </div>
	   <div class="row row-body responsive-break">
		      <div class="col col-40" >
		        <div class="col-item" title="" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 120px;">后屏第7排第7根管壁</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">16:31</div>
		      </div>
		      <div class="col col-20 font-green" >
		        <div class="col-item">结束</div>
		      </div>
		      <div class="col col-20" >
		        <div class="col-item">刘洋</div>
		      </div>
	   </div>
    </ion-content>
</ion-view>
