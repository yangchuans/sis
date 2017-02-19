package com.sc.sis.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sc.sis.dao.PointDataDao;
import com.sc.sis.model.PointData;
import com.sc.sis.model.PointDataExample;
import com.sc.sis.service.PointDataService;

@Service
public class PointDataServiceImpl implements PointDataService {
	
	@Autowired
	PointDataDao poiontDao;
	
	@Override
	public List<PointData> getPintDataListByExample(PointDataExample example) {
		return poiontDao.getPintDataListByExample(example);
	}

	@Override
	public List<PointData> getPintDataListByExampleAndPage(String pointName, Integer startColumn, Integer rowMax) {
		return poiontDao.getPintDataListByExampleAndPage(pointName, startColumn, rowMax);
	}

	@Override
	public Long countPointDataByExample(PointDataExample example) {
		return poiontDao.countPointDataByExample(example);
	}

	@Override
	@Transactional
	public Integer insertPointData(PointData point) {
		return poiontDao.insertPointData(point);
	}

	@Override
	@Transactional
	public Integer updatePointDataByPrimaryKey(PointData point) {
		return poiontDao.updatePointDataByPrimaryKey(point);
	}

}
