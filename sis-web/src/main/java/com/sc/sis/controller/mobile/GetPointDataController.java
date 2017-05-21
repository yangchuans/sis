package com.sc.sis.controller.mobile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
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
	
	@RequestMapping(value="/getManyPointData")
    public void getManyPointData(String[] pointNames,Model model){
		Map<String,Double> map = new HashMap<>();
		List<PointData> pointDataList = null;
		try {
			pointDataList = getRealTimeDBDataService.SC_GetRTPoint(pointNames);
		} catch (Exception e) {
			model.addAttribute("code", "0");
			model.addAttribute("data", pointDataList);
			model.addAttribute("msg", "请求失败！");
			log.error("请求多点："+pointNames+" 的数据失败！",e);
			return;
		}
		if(null!=pointDataList){
			for(PointData point : pointDataList){
				map.put(point.getPoint(), point.getValue());
			}
		}
		model.addAttribute("code", "1");
		model.addAttribute("data", map);
		model.addAttribute("msg", "请求成功！");
    }
	
	 /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的插入值，时间格式是UTC时间。 */
	@RequestMapping(value="/getHistInterpUTC")
    public void getHistInterpUTC(String points, long timeStart, long timeEnd,
            long timePeriod,Model model){
		List<PointData> pointDataList = getRealTimeDBDataService.SC_GetHistInterpUTC(points, timeStart, timeEnd, timePeriod);
		if(null!=pointDataList){
			for(PointData pointData : pointDataList){
				//System.out.println(pointData);
			}
		}
	}

}
