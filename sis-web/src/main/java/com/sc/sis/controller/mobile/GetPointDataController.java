package com.sc.sis.controller.mobile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sc.rtdb.PointData;
import com.sc.sis.service.GetRealTimeDBDataService;


@Controller
@RequestMapping(value="/GetPointDataController")
public class GetPointDataController {
	
	@Autowired
	private GetRealTimeDBDataService getRealTimeDBDataService;

	private static  final Logger log = Logger.getLogger(GetPointDataController.class);
	
	@RequestMapping(value="/getOnePointData")
    public void getOnePointData(String pointName,Model model){
		Map<String,Double> map = new HashMap<>();
		PointData data = null;
		try {
			data = getRealTimeDBDataService.SC_GetRTPoint(pointName);
		} catch (Exception e) {
			model.addAttribute("code", "0");
			model.addAttribute("data", data);
			model.addAttribute("msg", "请求失败！");
			log.error("请求单点："+pointName+" 的数据失败！",e);
			return;
		}
		map.put(pointName, data.getValue());
		model.addAttribute("code", "1");
		model.addAttribute("data", map);
		model.addAttribute("msg", "请求成功！");
    }
	/**
	 * 
	 * @param pointNames 点名数组
	 * @param model
	 */
	
	@RequestMapping(value="/getManyPointData")
    public void getManyPointData(String[] pointNames,Model model){
		Map<String,Double> map = new HashMap<>();
		List<PointData> pointDataList = new ArrayList<>();
		try {
			for(String p : pointNames){
				pointDataList.add(getRealTimeDBDataService.SC_GetRTPoint(p));
			}
			
		} catch (Exception e) {
			model.addAttribute("code", "0");
			model.addAttribute("data", pointDataList);
			model.addAttribute("msg", "请求失败！");
			log.error("请求多点："+pointNames+" 的数据失败！",e);
			return;
		}
		if(null!=pointDataList){
			for(PointData point : pointDataList){
				map.put(point.getPoint(), (double)(Math.round(point.getValue()*10)/10.0));
			}
		}
		model.addAttribute("code", "1");
		model.addAttribute("data", map);
		model.addAttribute("msg", "请求成功！");
    }
	
	 /**
	  * 取历史数据函数，获取在一段时间范围内存储于历史服务的点的插入值，
	  * 时间格式是UTC时间。
	  */
	@RequestMapping(value="/getHistInterpUTC")
    public void getHistInterpUTC(String point, long timeStart, long timeEnd,
            					long timePeriod,String type,Model model){
		if(StringUtils.isBlank(point)||StringUtils.isBlank(type)){
			model.addAttribute("success", false);
			model.addAttribute("msg", "points="+point+" type="+type);
			return;
		}
		if(timeEnd<timeStart){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timeStart>timeEnd");
			return;
		}
		if(timePeriod<0){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timePeriod="+timePeriod);
			return;
		}
		
		List<PointData> pointDataList = null;
		try {
			pointDataList = getRealTimeDBDataService.SC_GetHistAvgUTC(point, timeStart, timeEnd, timePeriod);
		} catch (Exception e) {
			log.error("SC_GetHistAvgUTC失败！points="+point, e);
		}
		
		String timeFomaterStr="";
		switch(type){
		   	case "hour" : timeFomaterStr="HH:00"; break;
		   	case "day"  : timeFomaterStr="MM-dd"; break;
		   	case "month": timeFomaterStr="MM";    break;
		   	default :
		   		model.addAttribute("success", false);
				model.addAttribute("messsage", "type类型位置："+type);
		   		return ;
		}
		Map<String,String> time_Val = new LinkedHashMap<>();
		if(null!=pointDataList && !pointDataList.isEmpty()){
			for(PointData pointData : pointDataList){
				if(0!=pointData.getTime()){
					DateTime time  = new DateTime(pointData.getTime()*1000);
					String timeStr = time.toString(timeFomaterStr);
					time_Val.put(timeStr, String.valueOf(Math.round(pointData.getValue()*100)/100.0));
					log.info(time+"-> "+pointData.getValue());
				}
			}
			
		}else{
			DateTime startTime = new DateTime(timeStart);
			DateTime endTime = new DateTime(timeEnd);
			DateTime sTime = new DateTime(startTime);
			while(sTime.isBefore(endTime)){
				time_Val.put(sTime.toString(timeFomaterStr), "-");
				switch(type){
				   	case "hour" : sTime = sTime.plusHours(1);  break;
				   	case "day"  : sTime = sTime.plusDays(1);   break;
				   	case "month": sTime = sTime.plusMonths(1); break;
				}
				
			}
			
		}
		model.addAttribute("data",time_Val);
		model.addAttribute("success", true);
		model.addAttribute("msg", "获取数据成功！");
	}
	/**
	 * 获取最大值最小值和符负荷率
	 * @param point
	 * @param pointPer
	 * @param timeStart
	 * @param timeEnd
	 * @param timePeriod
	 * @param type
	 * @param model
	 */
	@RequestMapping(value="/GetHistMaxMinAndPerUTC")
    public void GetHistMaxMinAndPerUTC(String point,String pointPer, long timeStart, long timeEnd,
            					long timePeriod,String type,Model model){
		if(StringUtils.isBlank(point)||StringUtils.isBlank(type)){
			model.addAttribute("success", false);
			model.addAttribute("msg", "point="+point+" type="+type);
			return;
		}
		if(timeEnd<timeStart){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timeStart>timeEnd");
			return;
		}
		if(timePeriod<0){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timePeriod="+timePeriod);
			return;
		}
		Map<String,String> dataMap = new HashMap<>();
		List<PointData> maxPointDataList = null;
		List<PointData> minPointDataList = null;
		PointData perPointData = null;
		PointData curPointData = null;
		try {
			maxPointDataList=getRealTimeDBDataService.SC_GetHistMaxUTC(point, timeStart, timeEnd, timeEnd-timeStart);
			minPointDataList=getRealTimeDBDataService.SC_GetHistMinUTC(point, timeStart, timeEnd, timeEnd-timeStart);
			perPointData=getRealTimeDBDataService.SC_GetRTPoint(pointPer);
			curPointData=getRealTimeDBDataService.SC_GetRTPoint(point);
		} catch (Exception e) {
			log.info("GetHistMaxUTC失败！",e);
		}
		if(null!=maxPointDataList && !maxPointDataList.isEmpty()){
			dataMap.put("max", String.valueOf(Math.round(maxPointDataList.get(0).getValue()*100)/100.0));
		}else{
			dataMap.put("max", "-");
		}
		if(null!=minPointDataList && !minPointDataList.isEmpty()){
			dataMap.put("min", String.valueOf(Math.round(minPointDataList.get(0).getValue()*100)/100.0));
		}else{
			dataMap.put("min", "-");
		}
		if(null!=perPointData){
			dataMap.put("per",String.valueOf(Math.round(perPointData.getValue()*100)/100.0)+"%");
		}else{
			dataMap.put("per", "-");
		}
		if(null!=curPointData){
			dataMap.put("cur",String.valueOf(Math.round(curPointData.getValue()*100)/100.0));
		}else{
			dataMap.put("cur", "-");
		}
		model.addAttribute("data", dataMap);
		model.addAttribute("success", true);
		model.addAttribute("msg", "timePeriod="+timePeriod);
	}
	@RequestMapping(value="/GetPointsOneDayData")
    public void GetPointsOneDayData(String[] points, long timeStart, long timeEnd,
            					long timePeriod,Model model){
		if(null==points || points.length<1){
			model.addAttribute("success", false);
			model.addAttribute("msg", "points="+points);
			return;
		}
		if(timeEnd<timeStart){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timeStart>timeEnd");
			return;
		}
		if(timePeriod<0){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timePeriod="+timePeriod);
			return;
		}
		Map<String,String > dataMap = new HashMap<>();
		for(String point:points){
			List<PointData> pointDataList = null;
			try {
				pointDataList = getRealTimeDBDataService.SC_GetHistInterpUTC(point, timeStart, timeEnd, timePeriod);
			} catch (Exception e) {
				log.error("SC_GetHistInterpUTC失败！points="+point, e);
			}
			if(null!=pointDataList && !pointDataList.isEmpty()){
				dataMap.put(point, String.valueOf(Math.round(pointDataList.get(0).getValue()*100)/100.0));
			}else{
				dataMap.put(point,"-");
			}
		}
		model.addAttribute("data", dataMap);
		model.addAttribute("success", true);
		model.addAttribute("msg", "timePeriod="+timePeriod);
	}
	@RequestMapping(value="/getManyPointHistAvgUTC")
    public void getManyPointHistAvgUTC(String[] points, long timeStart, long timeEnd,long timePeriod,Model model){
		if(null==points||1>points.length){
			model.addAttribute("success", false);
			model.addAttribute("msg", "points="+points);
			return;
		}
		if(timeEnd<timeStart){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timeStart>timeEnd");
			return;
		}
		if(timePeriod<0){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timePeriod="+timePeriod);
			return;
		}
		Map<String,String> time_Val = new LinkedHashMap<>();
		for(String point : points){
			List<PointData> pointDataList = null;
			try {
				pointDataList = getRealTimeDBDataService.SC_GetHistAvgUTC(point, timeStart, timeEnd, timePeriod);
			} catch (Exception e) {
				log.error("SC_GetHistInterpUTC失败！points="+point, e);
			}
			if(null!=pointDataList && !pointDataList.isEmpty()){
				PointData pointData = pointDataList.get(0);
				time_Val.put(point, String.valueOf(Math.round(pointData.getValue()*100)/100.0));
			}else{
				time_Val.put(point,"无数据");
			}
		}
		model.addAttribute("data",time_Val);
		model.addAttribute("success", true);
		model.addAttribute("msg", "获取数据成功！");
	}
	@RequestMapping(value="/getHistAvgUTCByType")
    public void getHistAvgUTCByType(String point, long timeStart, long timeEnd,
            					long timePeriod,String type,Model model){
		if(StringUtils.isBlank(point)||StringUtils.isBlank(type)){
			model.addAttribute("success", false);
			model.addAttribute("msg", "points="+point+" type="+type);
			return;
		}
		if(timeEnd<timeStart){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timeStart>timeEnd");
			return;
		}
		if(timePeriod<0){
			model.addAttribute("success", false);
			model.addAttribute("msg", "timePeriod="+timePeriod);
			return;
		}
		
		List<PointData> pointDataList = null;
		try {
			pointDataList = getRealTimeDBDataService.SC_GetHistAvgUTC(point, timeStart, timeEnd, timePeriod);
		} catch (Exception e) {
			log.error("getHistAvgUTCByType失败！points="+point, e);
		}
		
		String timeFomaterStr="";
		switch(type){
		   	case "day"  : timeFomaterStr="MM-dd"; break;
		   	case "month": timeFomaterStr="yy-MM";    break;
		 	case "year"  : timeFomaterStr="yyyy"; break;
		   	default :
		   		model.addAttribute("success", false);
				model.addAttribute("messsage", "type类型位置："+type);
		   		return ;
		}
		Map<String,String> time_Val = new LinkedHashMap<>();
		if(null!=pointDataList && !pointDataList.isEmpty()){
			for(PointData pointData : pointDataList){
				if(0!=pointData.getTime()){
					DateTime time  = new DateTime(pointData.getTime()*1000);
					String timeStr = time.toString(timeFomaterStr);
					time_Val.put(timeStr, String.valueOf(Math.round(pointData.getValue()*100)/100.0));
					log.info(time+"-> "+pointData.getValue());
				}
			}
			
		}else{
			DateTime startTime = new DateTime(timeStart);
			DateTime endTime = new DateTime(timeEnd);
			DateTime sTime = new DateTime(startTime);
			while(sTime.isBefore(endTime)){
				time_Val.put(sTime.toString(timeFomaterStr), "-");
				switch(type){
				   	case "day"  : sTime = sTime.plusDays(1);   break;
				   	case "month": sTime = sTime.plusMonths(1); break;
				   	case "year": sTime = sTime.plusYears(1); break;
				}
				
			}
			
		}
		model.addAttribute("data",time_Val);
		model.addAttribute("success", true);
		model.addAttribute("msg", "获取数据成功！");
	}
}
