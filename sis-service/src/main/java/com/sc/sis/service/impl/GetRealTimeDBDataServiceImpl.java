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

	@Override
	public PointData SC_GetHistPoint(String point, long time, short msec) {
		return realTimeDBDataDao.SC_GetHistPoint(point, time, msec);
	}

	@Override
	public ArrayList<PointData> SC_GetHistPoints(String[] points, long time, short msec) {
		return realTimeDBDataDao.SC_GetHistPoints(points, time, msec);
	}

	@Override
	public ArrayList<PointData> SC_GetHistRawUTC(String point, long timeStart, short timeStartMilli, long timeEnd,
			short timeEndMilli) {
		return realTimeDBDataDao.SC_GetHistRawUTC(point, timeStart, timeStartMilli, timeEnd, timeEndMilli);
	}

	@Override
	public ArrayList<PointData> SC_GetHistSnapUTC(String point, long timeStart, long timeEnd, long timePeriod) {
		return realTimeDBDataDao.SC_GetHistSnapUTC(point, timeStart, timeEnd, timePeriod);
	}

	@Override
	public ArrayList<PointData> SC_GetHistAvgUTC(String point, long timeStart, long timeEnd, long timePeriod) {
		return realTimeDBDataDao.SC_GetHistAvgUTC(point, timeStart, timeEnd, timePeriod);
	}

	@Override
	public ArrayList<PointData> SC_GetHistMaxUTC(String point, long timeStart, long timeEnd, long timePeriod) {
		return realTimeDBDataDao.SC_GetHistMaxUTC(point, timeStart, timeEnd, timePeriod);
	}

	@Override
	public ArrayList<PointData> SC_GetHistMinUTC(String point, long timeStart, long timeEnd, long timePeriod) {
		return realTimeDBDataDao.SC_GetHistMinUTC(point, timeStart, timeEnd, timePeriod);
	}

	@Override
	public ArrayList<PointData> SC_GetHistInterpUTC(String points, long timeStart, long timeEnd, long timePeriod) {
		return realTimeDBDataDao.SC_GetHistInterpUTC(points, timeStart, timeEnd, timePeriod);
	}
	
	
}
