package com.sc.sis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/")
public class RouteController {
	
	@RequestMapping(value="/")
    public String index(Model model){
        return "mobile/main";
    }
	@RequestMapping(value="templates/tabs")
    public String templates_tabs(Model model){
        return "mobile/templates/tabs";
    }
	@RequestMapping(value="templates/home")
    public String templates_home(Model model){
        return "mobile/templates/home";
    }
	@RequestMapping(value="templates/setting")
    public String templates_setting(Model model){
        return "mobile/templates/setting";
    }
	@RequestMapping(value="templates/monitorData")
    public String templates_monitorData(Model model){
        return "mobile/templates/monitorData";
    }
	@RequestMapping(value="templates/dataDetail")
    public String templates_dataDetail(Model model){
        return "mobile/templates/dataDetail";
    }
}
