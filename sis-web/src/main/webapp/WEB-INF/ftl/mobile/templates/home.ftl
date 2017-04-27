<ion-view view-title="首页">
	<ion-nav-buttons side="left">
        <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    </ion-nav-buttons>
    <ion-content >
       <div class="leoweatherDom">
       		<div id="demo"></div>
       </div>
       <div class="allFacView" style="width:100%;height:200px;margin-top: 6px;">
       		<div id="allFacLoad" style="width:50%;height:100%;float: left;"> </div>
       		<div id="allFacEco" style="width:50%;height:100%;float: left;"> </div>
       </div>
       <div class="circleDesc">
			<p>
				<span style="margin-left: 20px;color:white;">全厂实时负荷(MW)</span>
				<span style="margin-left: 50px;color:white;">全厂实时电量(Wkwh)</span>
			</p>
		</div>
       <div class="macGroupView" style="width:100%;height:200px;margin-top: 6px;">
       		<div id="mac1" style="width:50%;height:100%;float: left;"> </div>
       		<div id="mac2" style="width:50%;height:100%;float: left;"> </div>
       </div>
       <div class="circleDesc">
			<p>
				<span style="margin-left: 20px;color:white;">#1机组实时负荷(MW)</span>
				<span style="margin-left: 40px;color:white;">#2机组实时负荷(MW)</span>
			</p>
		</div>
       <!--
       <div id="canvas">
			<div class="circle" id="circles-1"></div>
			<div class="circle" id="circles-2"></div>
		</div>
		<div class="circleDesc">
			<p>
				<span style="margin-left: 20px;color:white;">全厂实时负荷(MW)</span>
				<span style="margin-left: 50px;color:white;">全厂实时电量(Wkwh)</span>
			</p>
		</div>
		<div id="canvas2">
			<div class="circle" id="circles-3"></div>
			<div class="circle" id="circles-4"></div>
		</div>
		<div class="circleDesc">
			<p>
				<span style="margin-left: 20px;color:white;">#1机组实时负荷(MW)</span>
				<span style="margin-left: 40px;color:white;">#2机组实时负荷(MW)</span>
			</p>
		</div>
		-->
    </ion-content>
</ion-view>
