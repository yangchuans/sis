var app = angular.module('ionicApp', ['ionic'])
app.config(function($stateProvider, $urlRouterProvider) {
    //所有页面跳转的路由配置
    $stateProvider
       .state('tabs', {
           url: "/tab",
           abstract: true,
           templateUrl: "templates/tabs",
       })
       .state('tabs.home', {
           url: "/home",
           views: {
             'home-tab': {
               templateUrl: "templates/home",
               controller:"HomeTabCtrl"
             }
           }
       })
       .state('tabs.setting', {
           url: "/setting",
           views: {
             'setting-tab': {
               templateUrl: "templates/setting",
               controller: 'SettingTabCtrl'
             }
           }
       })
       .state('tabs.monitorData', {
           url: "/monitorData",
           views: {
             'monitorData-tab': {
               templateUrl: "templates/monitorData",
               controller: 'MonitorDataTabCtrl'
             }
           }
       })
       .state('tabs.dataDetail', {
           url: "/dataDetail/:fact_id/:other_id",
           views: {
             'monitorData-tab': {
               templateUrl: "templates/dataDetail",
               controller: 'DataDetailTabCtrl'
             }
           }
       });
    //在配置（状态配置和when()方法）中没有找到url的任何匹配默认到home页
    $urlRouterProvider.otherwise("/tab/home");
});
