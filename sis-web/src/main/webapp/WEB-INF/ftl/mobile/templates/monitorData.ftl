<ion-view view-title="监控数据">
    <ion-content class="padding">
      <div class="list card">
         <a href="#/tab/dataDetail/{{item.fact_id}}/{{item.other_id}}" class="item item-icon-left" ng-repeat="item in linkArr">
            <i class={{item.icon_class}}></i>
            Enter home address
         </a>
     </div>
    </ion-content>
</ion-view>
