package com.sc.sis.controller.mobile;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sc.rtdb.PointData;
import com.sc.sis.service.GetRealTimeDBDataService;

@Controller
@RequestMapping(value="/IndexController")
public class IndexController {
	@Autowired
	GetRealTimeDBDataService getRealTimeDBDataService;
	
	@Value("#{points['points.point1']}")
	private String AllFacRealLoad;
	
	@Value("#{points['points.point8']}")
	private String AllFacRealElec;
	
	@Value("#{points['points.point2']}")
	private String Mac1RealLoad;
	
	@Value("#{points['points.point3']}")
	private String Mac2RealLoad;
	
	
	
	
	@RequestMapping(value="/getPointList")
    public void getPointList(Model model){
		String []  points =  {AllFacRealLoad,AllFacRealElec,Mac1RealLoad,Mac2RealLoad};
		List<PointData> datas = getRealTimeDBDataService.SC_GetRTPoint(points);
		System.out.println(datas);
    }
}
