<#include "/common/macro.ftl" />
<html ng-app="ionicApp">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
        <base href="<@spring.url '/'/>"/>
        <title>导航</title>
        <link type="text/css" href="common/ionic/css/ionic.min.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/common.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/home.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/ecoInd.css" rel="stylesheet">
        <style type="text/css">
            body {
                cursor: url('images/finger.png'), auto;
            }
        </style>
    </head>
    <body >
        <!-- 页头 -->
        <ion-nav-bar class="bar-positive bar-header bar-dark">
            <!-- 回退按钮 -->
            <ion-nav-back-button></ion-nav-back-button>
        </ion-nav-bar>
        <!-- 视图区域 模板内容将被插入此处-->
        <ion-nav-view></ion-nav-view>
  </body>
  <script type="text/javascript" src="common/ionic/js/ionic.bundle.min.js"></script>
  <script type="text/javascript" src="extend/echarts/echarts.min.js"></script>
  <script type="text/javascript" src="js/mobile/main.js"></script>
  <script type="text/javascript" src="js/mobile/templates/home.js"></script>
  <script type="text/javascript" src="js/mobile/templates/ecoInd.js"></script>
  <script type="text/javascript" src="js/mobile/templates/powerInd.js"></script>
  <script type="text/javascript" src="js/mobile/templates/auxMacMonitor.js"></script>
  <script type="text/javascript" src="js/mobile/templates/profesMonitor.js"></script>
</html>
