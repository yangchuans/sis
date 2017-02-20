app.controller('MonitorDataTabCtrl', function($scope) {
      console.log('MonitorDataTabCtrl页面');
      //var aboutScope=parent.angular.element('[ng-controller=AboutTabCtrl]').scope();
      //console.log(aboutScope.about);
      $scope.fact_id="1212";
      $scope.other_id="333";
      $scope.linkArr=[
        {fact_id:1212,other_id:5678,icon_class:"icon ion-nuclear","text":"机组监视画面"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-nuclear","text":"辅网监视画面"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-nuclear","text":"脱硝监视画面"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-ios-pulse","text":"电量采集"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-ios-cloud-upload","text":"上传测点"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-podium","text":"自动报表"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-social-buffer","text":"高级模块"}
      ];
});
