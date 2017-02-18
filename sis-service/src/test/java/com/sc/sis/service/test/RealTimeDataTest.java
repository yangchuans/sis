package com.sc.sis.service.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.sc.sis.service.GetRealTimeDBDataService;
import com.sc.sis.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class) 
@ContextConfiguration(locations={"classpath*:spring/*.xml"})
public class RealTimeDataTest {
	
	private final static Logger LOGGER = LoggerFactory.getLogger(RealTimeDataTest.class);
	
	@Autowired
	GetRealTimeDBDataService realTimeDBDataService;
	
	@Autowired
	UserService userService;
	
	@Test
	public void testPI(){
		LOGGER.info("------------------------");
		LOGGER.info(realTimeDBDataService.SC_GetRTPoint("PT_00017").toString());
		LOGGER.info("------------------------");
	}
	@Test
	public void testUser(){
		LOGGER.info("------------------------");
		System.out.println(userService.checkUserAuth("sis", "sis"));
		LOGGER.info("------------------------");
	}
}

