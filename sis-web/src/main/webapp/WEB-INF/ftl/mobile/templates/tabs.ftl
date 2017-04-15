<ion-side-menus>
    <ion-pane ion-side-menu-content>
        <ion-nav-bar class="bar-positive nav-title-slide-ios7">
          <ion-nav-back-button class="button-clear"><i class="icon ion-chevron-left"></i> 返回</ion-nav-back-button>
        </ion-nav-bar>
        <ion-nav-view name="tabs" animation="slide-left-right"></ion-nav-view>
    </ion-pane>
    <ion-side-menu side="left">
        <header class="bar bar-header bar-positive">
           <h1 class="title">功能列表</h1>
        </header>
        <ion-content class="has-header">
           <ion-list>
             	<ion-item nav-clear menu-close href="#/tab/home">
             		<p><i class="icon ion-home"></i> 首页</p>
             	</ion-item>
             	<ion-item nav-clear menu-close href="#/tab/macLoad">
             		<p><i class="icon ion-ios-pulse-strong"></i><span  style="margin-left:1px;">机组负荷</span></p>
             	</ion-item>
             	<ion-item nav-clear menu-close href="#/tab/prodInfo">
             		<p><i class="icon ion-clipboard"></i><span  style="margin-left:1px;">生产信息</span></p>
             	</ion-item>
             	<!--
        		<ion-item nav-clear menu-close href="#/tab/ecoInd">
        			<p><i class="icon ion-leaf"></i> 经济指标</p>
        		</ion-item>
        		-->
        		<ion-item nav-clear menu-close href="#/tab/envInd">
        			<p><i class="icon  ion-trash-b"></i></i><span style="margin-left:8px;">环保指标</span></p>
        		</ion-item>
        		<ion-item nav-clear menu-close href="#/tab/powerInd">
        			<p><i class="icon ion-battery-charging"></i> 电量指标</p>
        		</ion-item>
        		<ion-item nav-clear menu-close href="#/tab/auxMacMonitor">
        			<p><i class="icon ion-speedometer"></i> 辅机监控</p>
        		</ion-item>
        		<!--
        		<ion-item nav-clear menu-close href="#/tab/profesMonitor">
        			<p><i class="icon ion-stats-bars"></i> 专业监视</p>
        		</ion-item>  
        		--> 	
           </ion-list>
        </ion-content>
     </ion-side-menu>
</ion-side-menus>