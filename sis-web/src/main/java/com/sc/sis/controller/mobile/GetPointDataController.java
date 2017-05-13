package com.sc.sis.controller.mobile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sc.rtdb.PointData;
import com.sc.sis.service.GetRealTimeDBDataService;

@Controller
@RequestMapping(value="/GetPointDataController")
public class GetPointDataController {
	
	@Autowired
	GetRealTimeDBDataService getRealTimeDBDataService;
	
	@Value("#{points['points.point1']}")
	private String testPointName;
	
	@RequestMapping(value="/getPointList")
    public void getPointList(Model model){
		PointData data = getRealTimeDBDataService.SC_GetRTPoint(testPointName);
		System.out.println(data);
    }

}
