var app = angular.module('ionicApp', ['ionic'])
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
           views: {
             'tabs': {
               templateUrl: "templates/home",
               controller:"HomeTabCtrl"
             }
           }
       })
       .state('tabs.macLoad', {     				//首页
           url: "/macLoad",
           views: {
             'tabs': {
               templateUrl: "templates/macLoad",
               controller:"MacLoadTabCtrl"
             }
           }
       })
       .state('tabs.ecoInd', {					//经济指标
           url: "/ecoInd",
           views: {
             'tabs': {
               templateUrl: "templates/ecoInd",
               controller: 'ecoIndTabCtrl'
             }
           }
       })
       .state('tabs.envInd', {					//环保指标
           url: "/envInd",
           views: {
             'tabs': {
               templateUrl: "templates/envInd",
               controller: 'envIndTabCtrl'
             }
           }
       })
       .state('tabs.prodInfo', {					//环保指标
           url: "/prodInfo",
           views: {
             'tabs': {
               templateUrl: "templates/prodInfo",
               controller: 'prodInfoTabCtrl'
             }
           }
       })
       .state('tabs.powerInd', {		        //电量指标
           url: "/powerInd",
           views: {
             'tabs': {
               templateUrl: "templates/powerInd",
               controller: 'powerIndTabCtrl'
             }
           }
       })
        .state('tabs.auxMacMonitor', {		    //辅机监控
           url: "/auxMacMonitor",
           views: {
             'tabs': {
               templateUrl: "templates/auxMacMonitor",
               controller: 'auxMacMonitorTabCtrl'
             }
           }
       })
       .state('tabs.runDetail', {		    //辅机监控
           url: "/runDetail/:iterm_id",
           views: {
             'tabs': {
               templateUrl: "templates/runDetail",
               controller: 'runDetailTabCtrl'
             }
           }
       })
       .state('tabs.profesMonitor', {			//专业监视
           url: "/profesMonitor",
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
