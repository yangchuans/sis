package com.sc.sis.dao.impl;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

import com.sc.rtdb.PointData;
import com.sc.rtdb.RealTimeDBDao;
import com.sc.sis.dao.GetRealTimeDBDataDao;
@Component
public class GetRealTimeDBDataDaoImpl implements GetRealTimeDBDataDao{
	
	RealTimeDBDao dao = new RealTimeDBDao();
	
	@Override
	public int SC_InitialEnv(String serverIp, short serverPort, String username, String password) {
		RealTimeDBDao dao = new RealTimeDBDao();
		return dao.SC_InitialEnv(serverIp, serverPort, username, password);
	}

	@Override
	public void SC_UninitialEnv() {
		dao.SC_UninitialEnv();
	}

	@Override
	public int SC_CheckServiceStatus() {
		return dao.SC_CheckServiceStatus();
	}

	@Override
	public PointData SC_GetRTPoint(String point) {
		return dao.SC_GetRTPoint(point);
	}

	@Override
	public PointData SC_GetRTPointFull(String point) {
		return dao.SC_GetRTPointFull(point);
	}

	@Override
	public ArrayList<PointData> SC_GetRTPoint(String[] points) {
		return dao.SC_GetRTPoint(points);
	}

	@Override
	public ArrayList<PointData> SC_GetRTPointFull(String[] points) {
		return dao.SC_GetRTPointFull(points);
	}
}
