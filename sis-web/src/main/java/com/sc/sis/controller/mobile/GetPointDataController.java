package com.sc.sis.controller.mobile;

import java.util.List;

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
		PointData data = getRealTimeDBDataService.SC_GetRTPoint(pointName);
		log.info(data);
    }
	
	@RequestMapping(value="/getManyPointData")
    public void getManyPointData(String[] pointNames,Model model){
		List<PointData> pointDataList = getRealTimeDBDataService.SC_GetRTPoint(pointNames);
		log.info(pointDataList);
    }

}
