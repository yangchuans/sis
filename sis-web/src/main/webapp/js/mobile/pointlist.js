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
//#1FGD净烟气O2浓度	%
globalPoints.point36="FW.10HTA60CQ103";
//#1FGD净烟气NOX浓度	mg/m3
globalPoints.point37="FW.10HTA60CQ103";
//#1FGD净烟气NOX浓度	mg/m3
globalPoints.point37="FW.10HTA60CQ103";
//#1FGD净烟气NOX浓度	mg/m3
globalPoints.point37="FW.10HTA60CQ103";

globalPoints.point38="FW.10HTA30CQ104";

globalPoints.point39="FW.10HTA50CQ101";

globalPoints.point40="FW.10HTA60CQ101";

globalPoints.point41="FW.10HTA60CQ102";

globalPoints.point42="FW.10HTA60CQ103";

globalPoints.point43="FW.10HTA60CQ104";

globalPoints.point44="FW.20HTA30CQ101";

globalPoints.point45="FW.20HTA30CQ102";

globalPoints.point46="FW.20HTA30CQ103"
	
	
globalPoints.point47="FW.20HTA30CQ104"
globalPoints.point48="FW.20HTA50CQ101"
globalPoints.point49="FW.20HTA60CQ101"
globalPoints.point50="FW.20HTA60CQ102"
globalPoints.point51="FW.20HTA60CQ103"
globalPoints.point52="FW.20HTA60CQ104"
globalPoints.point53="DCS1.10HFC10AJ001ZS"
globalPoints.point54="DCS1.10HFC20AJ001ZS"
globalPoints.point55="DCS1.10HFC30AJ001ZS"
globalPoints.point56="DCS1.10HFC40AJ001ZS"
globalPoints.point57="DCS1.10HFC50AJ001ZS"
globalPoints.point58="DCS1.10HFC60AJ001ZS"
globalPoints.point59="DCS1.10HLB30AN001ZS"
globalPoints.point60="DCS1.10HLB40AN001ZS"
globalPoints.point61="DCS1.10HNC10AN001ZS"
globalPoints.point62="DCS1.10HNC20AN001ZS"
globalPoints.point63="DCS1.10HLB10AN001ZS"
globalPoints.point64="DCS1.10HLB20AN001ZS"
globalPoints.point65="DCS2.20HFC10AJ001ZS"
globalPoints.point66="DCS2.20HFC20AJ001ZS"
globalPoints.point67="DCS2.20HFC30AJ001ZS"
globalPoints.point68="DCS2.20HFC40AJ001ZS"
globalPoints.point69="DCS2.20HFC50AJ001ZS"
globalPoints.point70="DCS2.20HFC60AJ001ZS"
globalPoints.point71="DCS2.20HLB30AN001ZS"
globalPoints.point72="DCS2.20HLB40AN001ZS"
globalPoints.point73="DCS2.20HNC10AN001ZS"
globalPoints.point74="DCS2.20HNC20AN001ZS"
globalPoints.point75="DCS2.20HLB10AN001ZS"
globalPoints.point76="DCS2.20HLB20AN001ZS"
globalPoints.point77="DCS1.10HFC10AJ001RT"
globalPoints.point78="DCS1.10HFC20AJ001RT"
globalPoints.point79="DCS1.10HFC30AJ001RT"
globalPoints.point80="DCS1.10HFC40AJ001RT"
globalPoints.point81="DCS1.10HFC50AJ001RT"
globalPoints.point82="DCS1.10HFC60AJ001RT"
globalPoints.point83="DCS1.10HLB30AN001RT"
globalPoints.point84="DCS1.10HLB40AN001RT"
globalPoints.point85="DCS1.10HNC10AN001RT"
globalPoints.point86="DCS1.10HNC20AN001RT"
globalPoints.point87="DCS1.10HLB10AN001RT"
globalPoints.point88="DCS1.10HLB20AN001RT"
globalPoints.point89="DCS2.20HFC10AJ001RT"
globalPoints.point90="DCS2.20HFC20AJ001RT"
globalPoints.point91="DCS2.20HFC30AJ001RT"
globalPoints.point92="DCS2.20HFC40AJ001RT"
globalPoints.point93="DCS2.20HFC50AJ001RT"
globalPoints.point94="DCS2.20HFC60AJ001RT"
globalPoints.point95="DCS2.20HLB30AN001RT"
globalPoints.point96="DCS2.20HLB40AN001RT"
globalPoints.point97="DCS2.20HNC10AN001RT"
globalPoints.point98="DCS2.20HNC20AN001RT"
globalPoints.point99="DCS2.20HLB10AN001RT"
globalPoints.point100="DCS2.20HLB20AN001RT"



	
globalPoints.point101="FW.10HTA60CQ101OT"
globalPoints.point102="FW.10HTA60CQ103OT"
globalPoints.point103="FW.10HTA60CQ104OT"
globalPoints.point104="FW.20HTA60CQ101OT"
globalPoints.point105="FW.20HTA60CQ103OT"
globalPoints.point106="FW.20HTA60CQ104OT"
globalPoints.point107="FW.10HTA60CQ101OS"
globalPoints.point108="FW.10HTA60CQ103OS"
globalPoints.point109="FW.10HTA60CQ104OS"
globalPoints.point110="FW.20HTA60CQ101OS"
globalPoints.point111="FW.20HTA60CQ103OS"
globalPoints.point112="FW.20HTA60CQ104OS"













