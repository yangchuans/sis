<ion-tabs class="tabs-icon-bottom tabs-positive tabs-dark">
    <ion-tab title="首页" icon="ion-home" href="#/tab/home">
        <ion-nav-view name="home-tab"></ion-nav-view>
    </ion-tab>
    <ion-tab title="监控数据" icon="ion-clipboard" ui-sref="tabs.monitorData">
        <ion-nav-view name="monitorData-tab"></ion-nav-view>
    </ion-tab>
    <ion-tab title="设置" icon="ion-ios-cog" href="#/tab/setting">
        <ion-nav-view name="setting-tab"></ion-nav-view>
    </ion-tab>
</ion-tabs>
