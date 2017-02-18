package com.sc.sis.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sc.sis.dao.PointDataDao;
import com.sc.sis.mapper.PointDataMapper;
import com.sc.sis.model.PointData;
import com.sc.sis.model.PointDataExample;
@Component
public class PointDataDaoImpl implements PointDataDao{
	
	@Autowired
	PointDataMapper pointMapper;
	
	@Override
	public List<PointData> getPintDataListByExample(PointDataExample example) {
		return pointMapper.selectByExample(example);
	}

}
