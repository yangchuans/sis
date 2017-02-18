package com.sc.sis.dao.test;

import java.util.ArrayList;

import com.sc.rtdb.PointData;
import com.sc.rtdb.RealTimeDBDao;

public class RealTimeDBDaoTest {

    public static void main(String[] args) {

        RealTimeDBDao dao = new RealTimeDBDao();

        int ret = dao.SC_InitialEnv("123.56.243.15", (short) 5656, "sa", "sa");

        // 如果在服务器上执行
        // System.out.println(dao.SC_InitialEnv("127.0.0.1", (short) 5656, "sa", "sa"));
        if (ret != 0) {
            System.out.println("SC_InitialEnv 错误");
        }

        /* 获取单点秒时标实时数据  */
        PointData data1 = dao.SC_GetRTPoint("PT_00017");
        if (data1.getRetValue() != 0) {
            System.out.println("SC_GetRTPoint 获取单点秒时标实时数据  错误");
        }
        
        System.out.println("获取单点秒时标实时数据: " + data1.getRetValue() + ", " + data1.getPoint() 
                + ", " + data1.getValue() + ", " + data1.getTime() + ", " + data1.getMsec() + ", " 
                + data1.getStatus());
        
        /* 获取单点毫秒时标实时数据 */
        data1 = dao.SC_GetRTPointFull("DCS1.1");
        if (data1.getRetValue() != 0) {
            System.out.println("SC_GetRTPoint 获取单点毫秒时标实时数据 错误");
        }
        
        System.out.println("获取单点毫秒时标实时数据: " + data1.getRetValue() + ", " +data1.getPoint() 
                + ", " + data1.getValue() + ", " + data1.getTime()
                + ", " + data1.getMsec() + ", " + data1.getStatus());

        /* 获取多个点秒时标实时数据 */
        String[] points =
                new String[] {"PT_00017", "DCS1.10HAH57CT657", "DCS1.1"};
        ArrayList<PointData> datas = dao.SC_GetRTPoint(points);           
        for (PointData data : datas) {
            if (data.getRetValue() != 0) {
                System.out.println("SC_GetRTPoint 获取多个点秒时标实时数据 错误");
            }
            
            System.out.println("获取多个点秒时标实时数据: " + data.getRetValue() + ", " + data.getPoint() 
                    + ", " + data.getValue() + ", " + data.getTime()
                    + ", " + data.getMsec() + ", " + data.getStatus());

        }
        
        /* 获取多个点毫秒时标实时数据 */
        datas = dao.SC_GetRTPointFull(points);
        for (PointData data : datas) {
            if (data.getRetValue() != 0) {
                System.out.println("SC_GetRTPointFull 获取多个点毫秒时标实时数据 错误");
            }
            
            System.out.println("获取多个点毫秒时标实时数据: " + data.getRetValue() + ", " + data.getPoint() 
                    + ", " + data.getValue() + ", " + data.getTime()
                    + ", " + data.getMsec() + ", " + data.getStatus());

        }

    }
}
