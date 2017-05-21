package com.sc.sis.dao.impl;

import java.util.ArrayList;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.sc.rtdb.PointData;
import com.sc.rtdb.RealTimeDBDao;
import com.sc.sis.dao.GetRealTimeDBDataDao;
import com.sc.sis.pojo.InnitDbEnv;
@Component
public class GetRealTimeDBDataDaoImpl implements GetRealTimeDBDataDao{
	
	
	final Logger log = Logger.getLogger(GetRealTimeDBDataDao.class);
	
	private RealTimeDBDao dao = InnitDbEnv.dao;
	
	
	@Value("#{jdbc['PI.serverIp']}") 
	private String serverIp;
	
	@Value("#{jdbc['PI.serverPort']}") 
	private int serverPort;
	
	@Value("#{jdbc['PI.username']}") 
	private String username;
	
	@Value("#{jdbc['PI.password']}") 
	private String password;
	
	
	
	@Override
	public int SC_InitialEnv() {
		int ret = dao.SC_InitialEnv(serverIp, (short) serverPort,username, password);
		if (ret != 0) {
			log.info("SC_InitialEnv 错误");
	    }
		return ret;
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

	@Override
	public PointData SC_GetHistPoint(String point, long time, short msec) {
		return dao.SC_GetHistPoint(point, time, msec);
	}

	@Override
	public ArrayList<PointData> SC_GetHistPoints(String[] points, long time, short msec) {
		return dao.SC_GetHistPoints( points,  time,  msec);
	}

	@Override
	public ArrayList<PointData> SC_GetHistRawUTC(String point, long timeStart, short timeStartMilli, long timeEnd,
			short timeEndMilli) {
		return dao.SC_GetHistRawUTC(point, timeStart, timeStartMilli, timeEnd, timeEndMilli);
	}

	@Override
	public ArrayList<PointData> SC_GetHistSnapUTC(String point, long timeStart, long timeEnd, long timePeriod) {
		return dao.SC_GetHistSnapUTC(point, timeStart, timeEnd, timePeriod);
	}

	@Override
	public ArrayList<PointData> SC_GetHistAvgUTC(String point, long timeStart, long timeEnd, long timePeriod) {
		return dao.SC_GetHistAvgUTC(point, timeStart, timeEnd, timePeriod);
	}

	@Override
	public ArrayList<PointData> SC_GetHistMaxUTC(String point, long timeStart, long timeEnd, long timePeriod) {
		return dao.SC_GetHistMaxUTC(point, timeStart, timeEnd, timePeriod);
	}

	@Override
	public ArrayList<PointData> SC_GetHistMinUTC(String point, long timeStart, long timeEnd, long timePeriod) {
		return dao.SC_GetHistMinUTC(point, timeStart, timeEnd, timePeriod);
	}

	@Override
	public ArrayList<PointData> SC_GetHistInterpUTC(String points, long timeStart, long timeEnd, long timePeriod) {
		return dao.SC_GetHistInterpUTC(points, timeStart, timeEnd, timePeriod);
	}
}
