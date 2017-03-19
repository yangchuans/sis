package com.sc.sis.controller.mobile;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/")
public class RouteController {
	
	@RequestMapping(value="/")
    public String root(Model model){
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
	@RequestMapping(value="templates/ecoInd")
    public String templates_ecoInd(Model model){
        return "mobile/templates/ecoInd";
    }
	@RequestMapping(value="templates/powerInd")
    public String templates_powerInd(Model model){
        return "mobile/templates/powerInd";
    }
	@RequestMapping(value="templates/auxMacMonitor")
    public String templates_auxMacMonitor(Model model){
        return "mobile/templates/auxMacMonitor";
    }
	@RequestMapping(value="templates/profesMonitor")
    public String templates_profesMonitor(Model model){
        return "mobile/templates/profesMonitor";
    }
	
	//---------------------------PC端
	@RequestMapping(value="/index")
    public String index(Model model){
        return "pc/index";
    }
}
