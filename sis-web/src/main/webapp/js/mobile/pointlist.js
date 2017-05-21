//#点名列表pointlist
var globalPoints={};
//---------------------------
//#全厂实时负荷   MW
globalPoints.point1="Plant_pwGen";
//#1机组负荷      MW
globalPoints.point2="DCS1.GEMW";
//#2机组负荷	  MW
globalPoints.point3="DCS2.GEMW";
//#1机组负荷率	  %
globalPoints.point4="Per1_percPw";
//#2机组负荷率	  %
globalPoints.point5="Per2_percPw";
//#1发电机出口正向有功日累积	万kWh
globalPoints.point6="D_DL_YX025";
//#2发电机出口正向有功日累积	万kWh
globalPoints.point7="D_DL_YX037";
//#总发电量日累积	万kWh
globalPoints.point8="D_Plant_ZFDL";
//#1发电机出口正向有功月累积	万kWh	
globalPoints.point9="M_DL_YX025";
//#2发电机出口正向有功月累积	万kWh
globalPoints.point10="M_DL_YX037";
//#总发电量月累积	万kWh
globalPoints.point11="M_Plant_ZFDL";
//#1发电机出口正向有功年累积	万kWh
globalPoints.point12="Y_DL_YX025";
//#2发电机出口正向有功年累积	万kWh
globalPoints.point13="Y_DL_YX037";
//#总发电量年累积	万kWh
globalPoints.point14="Y_Plant_ZFDL";
//#1机组主蒸汽温度	℃	
globalPoints.point15="Pub1_tTbnMnStm";
//#2机组主蒸汽温度	℃
globalPoints.point16="Pub2_tTbnMnStm";
//#1机组主汽压力	MPa
globalPoints.point17="Pub1_pTbnMnStm";
//#2机组主汽压力	MPa
globalPoints.point18="Pub2_pTbnMnStm";
//#1机组再热温度	℃
globalPoints.point19="Pub1_tHRht";
//#2机组再热温度	℃
globalPoints.point20="Pub2_tHRht";
//#1机组再热压力	MPa
globalPoints.point21="Pub1_pHRht";
//#2机组再热压力	MPa
globalPoints.point22="Pub2_pHRht";
//#1机组给水温度
globalPoints.point23="Pub1_tFW";
//#2机组给水温度	
globalPoints.point24="Pub2_tFW";
//#1机组真空	bar	
globalPoints.point25="DCS1.10MAG10CP103";
//#2机组真空	bar
globalPoints.point26="DCS2.20MAG10CP103";
//#1机组排烟温度	℃
globalPoints.point27="Pub1_tFlueGas";
//#2机组排烟温度	℃	
globalPoints.point28="Pub2_tFlueGas";
//#1机组送风温度	℃	
globalPoints.point29="Pub1_tFidcl";
//#2机组送风温度	℃
globalPoints.point30="Pub2_tFidcl";
//#1机组锅炉效率	%
globalPoints.point31="Per1_effBlrGB";
//#2机组锅炉效率	%
globalPoints.point32="Per2_effBlrGB";
//#散热损失	%
globalPoints.point33="Per1_hlssDispActl";
//#散热损失	%	
globalPoints.point34="Per2_hlssDispActl";
//#1FGD净烟气SO2浓度	mg/m3
globalPoints.point35="FW.10HTA60CQ101";
//#1FGD净烟气NOX浓度	mg/m3
globalPoints.point36="FW.10HTA60CQ103";
//#2FGD净烟气SO2浓度	mg/m3
globalPoints.point37="FW.20HTA60CQ101";
//#2FGD净烟气NOX浓度	mg/m3
globalPoints.point38="FW.20HTA60CQ103";