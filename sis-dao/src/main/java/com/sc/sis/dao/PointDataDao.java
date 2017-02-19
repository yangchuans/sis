package com.sc.sis.dao;

import java.util.List;

import com.sc.sis.model.PointData;
import com.sc.sis.model.PointDataExample;

public interface PointDataDao {
	/**
	 * 根据Example获取点名列表
	 */
	List<PointData> getPintDataListByExample(PointDataExample example);
	/**
	 * 分页获取点名列表
	 */
	List<PointData> getPintDataListByExampleAndPage(String pointName,Integer startColumn,Integer rowMax);
	
	/**
	 * 根据Example获取点名总数
	 * @return
	 */
	Long countPointDataByExample(PointDataExample example);
	
	/**
	 * 新增点名
	 */
	Integer insertPointData(PointData point);
	/**
	 * 编辑点名
	 */
	Integer updatePointDataByPrimaryKey(PointData point);
}
