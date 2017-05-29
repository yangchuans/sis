<#include "/common/macro.ftl" />
<html ng-app="ionicApp">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
        <base href="<@spring.url '/'/>"/>
        <title>sis</title>
        <link type="text/css" href="common/ionic/css/ionic.min.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/common.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/tabs.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/home.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/macLoad.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/ecoInd.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/powerInd.css" rel="stylesheet">
        <link type="text/css" href="extend/lcalender/lcalender.css" rel="stylesheet">
        <link type="text/css" href="css/mobile/envInd.css" rel="stylesheet">
        <style type="text/css">
            body {
                cursor: url('images/finger.png'), auto;
            }
        </style>
    </head>
  <body>
  	   <ion-nav-view></ion-nav-view>
  </body>
  
  <script type="text/javascript" src="common/ionic/js/ionic.bundle.min.js"></script>
  <script type="text/javascript" src="common/jquery/jquery-1.8.3.min.js"></script>
  <script type="text/javascript" src="extend/echarts/echarts.min.js"></script>
  <script type="text/javascript" src="extend/moment/moment.min.js"></script>
  <script type="text/javascript" src="extend/leoweather/jquery.leoweather.min.js"></script>
  <script type="text/javascript" src="extend/circles/circles.js"></script>
  <script type="text/javascript" src="extend/lcalender/lcalender.min.js"></script>
  
  <script type="text/javascript" src="js/mobile/pointlist.js"></script>
  <script type="text/javascript" src="js/mobile/main.js"></script>
  <script type="text/javascript" src="js/mobile/templates/tabs.js"></script>
  <script type="text/javascript" src="js/mobile/templates/home.js"></script>
  <script type="text/javascript" src="js/mobile/templates/macLoad.js"></script>
  <script type="text/javascript" src="js/mobile/templates/ecoInd.js"></script>
  <script type="text/javascript" src="js/mobile/templates/powerInd.js"></script>
  <script type="text/javascript" src="js/mobile/templates/auxMacMonitor.js"></script>
  <script type="text/javascript" src="js/mobile/templates/profesMonitor.js"></script>
  <script type="text/javascript" src="js/mobile/templates/envInd.js"></script>
  <script type="text/javascript" src="js/mobile/templates/prodInfo.js"></script>
   <script type="text/javascript" src="js/mobile/templates/runDetail.js"></script>
</html>
