var app = angular.module('ionicApp', ['ionic'])
app.config(function($stateProvider, $urlRouterProvider) {
    //所有页面跳转的路由配置
    $stateProvider
       .state('tabs', {
           url: "/tab",
           abstract: true,
           templateUrl: "templates/tabs",
       })
       .state('tabs.home', {     				//首页
           url: "/home",
           views: {
             'home-tab': {
               templateUrl: "templates/home",
               controller:"HomeTabCtrl"
             }
           }
       })
       .state('tabs.ecoInd', {					//经济指标
           url: "/ecoInd",
           views: {
             'ecoInd-tab': {
               templateUrl: "templates/ecoInd",
               controller: 'ecoIndTabCtrl'
             }
           }
       })
       .state('tabs.powerInd', {		        //电量指标
           url: "/powerInd",
           views: {
             'powerInd-tab': {
               templateUrl: "templates/powerInd",
               controller: 'powerIndTabCtrl'
             }
           }
       })
        .state('tabs.auxMacMonitor', {		    //辅机监控
           url: "/auxMacMonitor",
           views: {
             'auxMacMonitor-tab': {
               templateUrl: "templates/auxMacMonitor",
               controller: 'auxMacMonitorTabCtrl'
             }
           }
       })
       .state('tabs.profesMonitor', {			//专业监视
           url: "/profesMonitor",
           views: {
             'profesMonitor-tab': {
               templateUrl: "templates/profesMonitor",
               controller: 'profesMonitorTabCtrl'
             }
           }
       });
    //在配置（状态配置和when()方法）中没有找到url的任何匹配默认到home页
    $urlRouterProvider.otherwise("/tab/home");
});
