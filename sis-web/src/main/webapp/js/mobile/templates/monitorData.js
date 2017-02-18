app.controller('MonitorDataTabCtrl', function($scope) {
      console.log('MonitorDataTabCtrl页面');
      //var aboutScope=parent.angular.element('[ng-controller=AboutTabCtrl]').scope();
      //console.log(aboutScope.about);
      $scope.fact_id="1212";
      $scope.other_id="333";
      $scope.linkArr=[
        {fact_id:1212,other_id:5678,icon_class:"icon ion-ios-person"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-wifi"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-card"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-home"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-ios-person"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-ios-person"},
        {fact_id:1212,other_id:5678,icon_class:"icon ion-ios-person"}
      ];
});
