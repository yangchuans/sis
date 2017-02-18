package com.sc.sis.dao;

import java.util.ArrayList;

import com.sc.rtdb.PointData;

public interface GetRealTimeDBDataDao {

    
    /* 初始化  */
    public int SC_InitialEnv(String serverIp, short serverPort, String username, String password);
    
    /* 反初始化 */
    public void SC_UninitialEnv();
    
    public int SC_CheckServiceStatus();
    
    /* 获取单点秒时标实时数据 */
    public PointData SC_GetRTPoint(String point);
    
    /* 获取单点毫秒时标实时数据 */
    public PointData SC_GetRTPointFull(String point);
    
    /* 获取多个点秒时标实时数据 */
    public ArrayList<PointData> SC_GetRTPoint(String[] points);
    
    /* 获取多个点毫秒时标实时数据 */
    public ArrayList<PointData> SC_GetRTPointFull(String[] points);

}
