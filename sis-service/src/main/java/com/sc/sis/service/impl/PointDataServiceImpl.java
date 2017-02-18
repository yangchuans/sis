package com.sc.sis.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
