package com.sc.rtdb;

import java.util.ArrayList;

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

}
