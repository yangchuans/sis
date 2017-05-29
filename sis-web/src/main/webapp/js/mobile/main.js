var app = angular.module('ionicApp', ['ionic']);
app.config(function($stateProvider, $urlRouterProvider) {
    //所有页面跳转的路由配置
    $stateProvider
       .state('tabs', {
           url: "/tab",
           abstract: true,
           templateUrl: "templates/tabs",
           controller: 'TabsCtrl'
       })
       .state('tabs.home', {     				//首页
           url: "/home",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/home",
               controller:"HomeTabCtrl"
             }
           }
       })
       .state('tabs.macLoad', {     				//首页
           url: "/macLoad",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/macLoad",
               controller:"MacLoadTabCtrl"
             }
           }
       })
       .state('tabs.ecoInd', {					//经济指标
           url: "/ecoInd",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/ecoInd",
               controller: 'ecoIndTabCtrl'
             }
           }
       })
       .state('tabs.envInd', {					//环保指标
           url: "/envInd",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/envInd",
               controller: 'envIndTabCtrl'
             }
           }
       })
       .state('tabs.prodInfo', {					//环保指标
           url: "/prodInfo",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/prodInfo",
               controller: 'prodInfoTabCtrl'
             }
           }
       })
       .state('tabs.powerInd', {		        //电量指标
           url: "/powerInd",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/powerInd",
               controller: 'powerIndTabCtrl'
             }
           }
       })
        .state('tabs.auxMacMonitor', {		    //辅机监控
           url: "/auxMacMonitor",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/auxMacMonitor",
               controller: 'auxMacMonitorTabCtrl'
             }
           }
       })
       .state('tabs.runDetail', {		    //辅机监控
           url: "/runDetail/:iterm_id",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/runDetail",
               controller: 'runDetailTabCtrl'
             }
           }
       })
       .state('tabs.profesMonitor', {			//专业监视
           url: "/profesMonitor",
           cache:'false',
           views: {
             'tabs': {
               templateUrl: "templates/profesMonitor",
               controller: 'profesMonitorTabCtrl'
             }
           }
       });
    //在配置（状态配置和when()方法）中没有找到url的任何匹配默认到home页
    $urlRouterProvider.otherwise("/tab/home");

});
