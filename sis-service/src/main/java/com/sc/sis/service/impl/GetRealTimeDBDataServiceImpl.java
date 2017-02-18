package com.sc.sis.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sc.rtdb.PointData;
import com.sc.sis.dao.GetRealTimeDBDataDao;
import com.sc.sis.service.GetRealTimeDBDataService;
@Service
public class GetRealTimeDBDataServiceImpl implements GetRealTimeDBDataService {
	
	@Autowired
	GetRealTimeDBDataDao realTimeDBDataDao;

	@Override
	public int SC_InitialEnv(String serverIp, short serverPort, String username, String password) {
		return realTimeDBDataDao.SC_InitialEnv(serverIp, serverPort, username, password);
	}

	@Override
	public void SC_UninitialEnv() {
		realTimeDBDataDao.SC_UninitialEnv();
	}

	@Override
	public int SC_CheckServiceStatus() {
		return realTimeDBDataDao.SC_CheckServiceStatus();
	}

	@Override
	public PointData SC_GetRTPoint(String point) {
		return realTimeDBDataDao.SC_GetRTPoint(point);
	}

	@Override
	public PointData SC_GetRTPointFull(String point) {
		return realTimeDBDataDao.SC_GetRTPointFull(point);
	}

	@Override
	public ArrayList<PointData> SC_GetRTPoint(String[] points) {
		return realTimeDBDataDao.SC_GetRTPoint(points);
	}

	@Override
	public ArrayList<PointData> SC_GetRTPointFull(String[] points) {
		return realTimeDBDataDao.SC_GetRTPointFull(points);
	}
	
	
}
