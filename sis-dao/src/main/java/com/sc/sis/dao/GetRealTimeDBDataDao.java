package com.sc.sis.dao;

import java.util.ArrayList;

import com.sc.rtdb.PointData;

public interface GetRealTimeDBDataDao {
    
	 /* 初始化  */
    public int SC_InitialEnv();

    /* 反初始化 */
    public  void SC_UninitialEnv();
    
    public  int SC_CheckServiceStatus();

    /* 获取单点秒时标实时数据 */
    public  PointData SC_GetRTPoint(String point);

    /* 获取单点毫秒时标实时数据 */
    public  PointData SC_GetRTPointFull(String point);

    /* 获取多个点秒时标实时数据 */
    public  ArrayList<PointData> SC_GetRTPoint(String[] points);

    /* 获取多个点毫秒时标实时数据 */
    public  ArrayList<PointData> SC_GetRTPointFull(String[] points);

    /* 获取单点某一时间的历史数据 */
    public  PointData SC_GetHistPoint(String point, long time, short msec);

    /* 获取多个点某一时间的历史数据,
     *这个函数在我的测试用例中，返回结果有问题，在C++跟了一下，没有报错，但返回结果就是现在看到的这样 */
    public  ArrayList<PointData> SC_GetHistPoints(String[] points, long time, short msec);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的原始数据序列，时间格式是UTC时间。
     * 这个函数在我的测试用例中，返回结果有问题，在C++跟了一下，报错：-4， 执行失败 */
    public  ArrayList<PointData> SC_GetHistRawUTC(String point, long timeStart, short timeStartMilli,
                                                       long timeEnd, short timeEndMilli);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的快照序列，时间格式是UTC时间。 */
    public  ArrayList<PointData> SC_GetHistSnapUTC(String point, long timeStart, long timeEnd, long timePeriod);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的平均值，时间格式是UTC时间。 */
    public  ArrayList<PointData> SC_GetHistAvgUTC(String point, long timeStart, long timeEnd, long timePeriod);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的最大值，时间格式是UTC时间。 */
    public  ArrayList<PointData> SC_GetHistMaxUTC(String point, long timeStart, long timeEnd, long timePeriod);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的最小值，时间格式是UTC时间。 */
    public  ArrayList<PointData> SC_GetHistMinUTC(String point, long timeStart, long timeEnd, long timePeriod);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的插入值，时间格式是UTC时间。 */
    public  ArrayList<PointData> SC_GetHistInterpUTC(String points, long timeStart, long timeEnd,
                                                          long timePeriod);

}
