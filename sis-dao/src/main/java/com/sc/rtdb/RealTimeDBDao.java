package com.sc.rtdb;

import java.util.ArrayList;

// 一定要告诉要杨川，要基于JAVA 1.8 32来编译， 否则C代码有问题，而且原来的数据库接口也调用不起来

/**
 * 所有时间使用UTC时间
 */
public class RealTimeDBDao {

    static {
        System.load("c:\\windows\\jni.dll");
    }

    /* 初始化  */
    public native int SC_InitialEnv(String serverIp, short serverPort, String username, String password);

    /* 反初始化 */
    public native void SC_UninitialEnv();
    
    public native int SC_CheckServiceStatus();

    /* 获取单点秒时标实时数据 */
    public native PointData SC_GetRTPoint(String point);

    /* 获取单点毫秒时标实时数据 */
    public native PointData SC_GetRTPointFull(String point);

    /* 获取多个点秒时标实时数据 */
    public native ArrayList<PointData> SC_GetRTPoint(String[] points);

    /* 获取多个点毫秒时标实时数据 */
    public native ArrayList<PointData> SC_GetRTPointFull(String[] points);

    /* 获取单点某一时间的历史数据 */
    public native PointData SC_GetHistPoint(String point, long time, short msec);

    /* 获取多个点某一时间的历史数据,
     *这个函数在我的测试用例中，返回结果有问题，在C++跟了一下，没有报错，但返回结果就是现在看到的这样 */
    public native ArrayList<PointData> SC_GetHistPoints(String[] points, long time, short msec);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的原始数据序列，时间格式是UTC时间。
     * 这个函数在我的测试用例中，返回结果有问题，在C++跟了一下，报错：-4， 执行失败 */
    public native ArrayList<PointData> SC_GetHistRawUTC(String point, long timeStart, short timeStartMilli,
                                                       long timeEnd, short timeEndMilli);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的快照序列，时间格式是UTC时间。 */
    public native ArrayList<PointData> SC_GetHistSnapUTC(String point, long timeStart, long timeEnd, long timePeriod);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的平均值，时间格式是UTC时间。 */
    public native ArrayList<PointData> SC_GetHistAvgUTC(String point, long timeStart, long timeEnd, long timePeriod);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的最大值，时间格式是UTC时间。 */
    public native ArrayList<PointData> SC_GetHistMaxUTC(String point, long timeStart, long timeEnd, long timePeriod);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的最小值，时间格式是UTC时间。 */
    public native ArrayList<PointData> SC_GetHistMinUTC(String point, long timeStart, long timeEnd, long timePeriod);

    /* 取历史数据函数，获取在一段时间范围内存储于历史服务的点的插入值，时间格式是UTC时间。 */
    public native ArrayList<PointData> SC_GetHistInterpUTC(String points, long timeStart, long timeEnd,
                                                          long timePeriod);
}
