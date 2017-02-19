package com.sc.sis.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
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
	
	@Override
	public List<PointData> getPintDataListByExampleAndPage(String pointName, Integer startColumn, Integer rowMax) {
		Map<String,Object> map = new HashMap<>();
		if(null==startColumn || null==rowMax){
			return new ArrayList<>();
		}else{
			map.put("startColumn", startColumn);
			map.put("rowMax", rowMax);
		}
		if(StringUtils.isNotBlank(pointName)){
			map.put("pointName", pointName);
		}
		return pointMapper.getPintDataListByExampleAndPage(map);
	}
	
	@Override
	public Long countPointDataByExample(PointDataExample example) {
		return pointMapper.countByExample(example);
	}

	@Override
	public Integer insertPointData(PointData point) {
		pointMapper.insert(point);
		return point.getId();
	}

	@Override
	public Integer updatePointDataByPrimaryKey(PointData point) {
		return pointMapper.updateByPrimaryKey(point);
	}



	

}
