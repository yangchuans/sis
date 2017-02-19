package com.sc.sis.controller.pc;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.sc.sis.model.PointData;
import com.sc.sis.model.PointDataExample;
import com.sc.sis.service.PointDataService;

@Controller
@RequestMapping(value="/pointDataManage_pc")
public class PointDataManageController {
	
	private final static Logger LOGGER = LoggerFactory.getLogger(PointDataManageController.class);

	@Autowired
	PointDataService pointService;
	
	@RequestMapping(value="/toPage") 
	public String toPage(Model model){
		return "pc/pointDataManage";
	}
	@RequestMapping(value="/pagePointData") 
	public void pagePointData(Model model,
			@RequestParam(defaultValue = "0", required = true) Integer startColumn,
			@RequestParam(defaultValue = "20", required = true) Integer rowMax,
			@RequestParam(defaultValue = "", required = false) String pointName){
		PointDataExample exam = new PointDataExample();
		if(StringUtils.isNotBlank(pointName)){
			exam.createCriteria().andPointNameLike("%"+pointName+"%");
		}
		Long count  = pointService.countPointDataByExample(exam);
		List<PointData> pointList = pointService.getPintDataListByExampleAndPage(pointName, startColumn, rowMax); 
		model.addAttribute("pointList", pointList);
		model.addAttribute("pageCount", count);
		model.addAttribute("success", true);
	}
	@RequestMapping(value="/addPointData") 
	public void addPointData(Model model,@RequestBody PointData point ){
		Integer id = -1;
		try{
			id = pointService.insertPointData(point);
		}catch (Exception e) {
			LOGGER.error("保存点名失败！",e);
		}
		if(id<0){
			LOGGER.error("保存点名失败！");
			model.addAttribute("success", false);
		}else{
			model.addAttribute("success", true);
		}
	}
	@RequestMapping(value="/updatePointData") 
	public void updatePointData(Model model,@RequestBody PointData point ){
		try{
			pointService.updatePointDataByPrimaryKey(point);
		}catch (Exception e) {
			model.addAttribute("success", false);
			LOGGER.error("保存点名失败！",e);
		}
		model.addAttribute("success", true);
	}
	@RequestMapping(value="/JudgePointNameHasExists") 
	public void JudgePointNameHasExists(Model model,String pointName){
		if(StringUtils.isBlank(pointName)){
			model.addAttribute("hasExsts", false);
		}else{
			PointDataExample exam = new PointDataExample();
			exam.createCriteria().andPointNameEqualTo(pointName);
			model.addAttribute("hasExsts", pointService.countPointDataByExample(exam)>0);
		}
	}
	
}
