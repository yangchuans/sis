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

//        /* 获取单点秒时标实时数据  */
//        PointData data1 = dao.SC_GetRTPoint("DCS1.GEMW");
//        if (data1.getRetValue() != 0) {
//            System.out.println("SC_GetRTPoint 获取单点秒时标实时数据  错误");
//        }
//        
//        System.out.println("获取单点秒时标实时数据: " + data1.getRetValue() + ", " + data1.getPoint() 
//                + ", " + data1.getValue() + ", " + data1.getTime() + ", " + data1.getMsec() + ", " 
//                + data1.getStatus());
//        
//        /* 获取单点毫秒时标实时数据 */
//        data1 = dao.SC_GetRTPointFull("DCS1.1");
//        if (data1.getRetValue() != 0) {
//            System.out.println("SC_GetRTPoint 获取单点毫秒时标实时数据 错误");
//        }
//        
//        System.out.println("获取单点毫秒时标实时数据: " + data1.getRetValue() + ", " +data1.getPoint() 
//                + ", " + data1.getValue() + ", " + data1.getTime()
//                + ", " + data1.getMsec() + ", " + data1.getStatus());

        /* 获取多个点秒时标实时数据 */
        String[] points =
                new String[] {"Plant_pwGen", "DCS1.GEMW", "DCS2.GEMW"};
        ArrayList<PointData> datas = dao.SC_GetRTPoint(points);           
        for (PointData data : datas) {
            if (data.getRetValue() != 0) {
                System.out.println("SC_GetRTPoint 获取多个点秒时标实时数据 错误");
            }
            
            System.out.println("获取多个点秒时标实时数据: " + data.getRetValue() + ", " + data.getPoint() 
                    + ", " + data.getValue() + ", " + data.getTime()
                    + ", " + data.getMsec() + ", " + data.getStatus());

        }
        
//        /* 获取多个点毫秒时标实时数据 */
//        datas = dao.SC_GetRTPointFull(points);
//        for (PointData data : datas) {
//            if (data.getRetValue() != 0) {
//                System.out.println("SC_GetRTPointFull 获取多个点毫秒时标实时数据 错误");
//            }
//            
//            System.out.println("获取多个点毫秒时标实时数据: " + data.getRetValue() + ", " + data.getPoint() 
//                    + ", " + data.getValue() + ", " + data.getTime()
//                    + ", " + data.getMsec() + ", " + data.getStatus());
//
//        }
//
//        /* 获取单点某一时间的历史数据 */
//        PointData PointData1 = dao.SC_GetHistPoint("DCS1.1", 1487862388L, (short) 0);
//        if (PointData1.getRetValue() != 0) {
//            System.out.println("SC_GetHistPoint 获取单点某一时间的历史数据 错误");
//        }
//
//        System.out.println("获取单点某一时间的历史数据: " + PointData1.getRetValue() + ", " +PointData1.getPoint()
//                           + ", " + PointData1.getValue() + ", " + PointData1.getTime()
//                           + ", " + PointData1.getMsec() + ", " + PointData1.getStatus());
//
//        /* 获取多个点某一时间的历史数据 */
//        ArrayList<PointData> PointDatas = dao.SC_GetHistPoints(points, 1485161483L, (short)0);
//        if (PointDatas == null) {
//            System.out.println("SC_GetHistPoints 获取在一段时间范围的原始数据序列 错误");
//        } else {
//            for (PointData data : PointDatas) {
//                if (data.getRetValue() != 0) {
//                    System.out.println("SC_GetRTPointFull 获取多个点某一时间的历史数据 错误");
//                }
//
//                System.out.println("获取多个点某一时间的历史数据: " + data.getRetValue() + ", " + data.getPoint()
//                                   + ", " + data.getValue() + ", " + data.getTime()
//                                   + ", " + data.getMsec() + ", " + data.getStatus());
//
//            }
//        }
//
//
//
//        /* 获取在一段时间范围内存储于历史服务的点的原始数据序列 */
//        PointDatas = dao.SC_GetHistRawUTC("DCS2.10BBA07GS000GH3", 1487862388L, (short)0, 1487862398L, (short)0);
//        if (PointDatas == null) {
//            System.out.println("SC_GetHistRawUTC 获取在一段时间范围的原始数据序列 错误");
//        } else {
//            for (PointData data : PointDatas) {
//                if (data.getRetValue() != 0) {
//                    System.out.println("SC_GetHistRawUTC 获取在一段时间范围的原始数据序列 错误");
//                }
//
//                System.out.println("获取在一段时间范围的原始数据序列: " + data.getRetValue() + ", " + data.getPoint()
//                                   + ", " + data.getValue() + ", " + data.getTime()
//                                   + ", " + data.getMsec() + ", " + data.getStatus());
//
//            }
//        }
//
//        /* 获取在一段时间范围内存的快照序列 */
//        PointDatas = dao.SC_GetHistSnapUTC("DCS2.10BBA07GS000GH3", 1487862388L, 1487862398L, (long)2);
//        if (PointDatas == null) {
//            System.out.println("SC_GetHistSnapUTC 获取在一段时间范围内存的快照序列 错误");
//        } else {
//            for (PointData data : PointDatas) {
//                if (data.getRetValue() != 0) {
//                    System.out.println("SC_GetHistSnapUTC 获取在一段时间范围内存的快照序列 错误");
//                }
//
//                System.out.println("获取在一段时间范围内存的快照序列: " + data.getRetValue() + ", " + data.getPoint()
//                                   + ", " + data.getValue() + ", " + data.getTime()
//                                   + ", " + data.getMsec() + ", " + data.getStatus());
//
//            }
//        }
//
//        /* 获取在一段时间范围内存储于历史服务的点的平均值 */
//        PointDatas = dao.SC_GetHistAvgUTC("DCS2.10BBA07GS000GH3", 1487862388L, 1487862398L, (long)2);
//        if (PointDatas == null) {
//            System.out.println("SC_GetHistAvgUTC 获取在一段时间范围内存的平均值 错误");
//        } else {
//            for (PointData data : PointDatas) {
//                if (data.getRetValue() != 0) {
//                    System.out.println("SC_GetHistAvgUTC 获取在一段时间范围内存的平均值 错误");
//                }
//
//                System.out.println("获取在一段时间范围内存的平均值: " + data.getRetValue() + ", " + data.getPoint()
//                                   + ", " + data.getValue() + ", " + data.getTime()
//                                   + ", " + data.getMsec() + ", " + data.getStatus());
//
//            }
//        }
//
//        /* 获取在一段时间范围内存储于历史服务的点的最大值 */
//        PointDatas = dao.SC_GetHistMaxUTC("DCS2.10BBA07GS000GH3", 1487862388L, 1487862398L, (long)2);
//        if (PointDatas == null) {
//            System.out.println("SC_GetHistMaxUTC 获取在一段时间范围内存的最大值 错误");
//        } else {
//            for (PointData data : PointDatas) {
//                if (data.getRetValue() != 0) {
//                    System.out.println("SC_GetHistMaxUTC 获取在一段时间范围内存的最大值 错误");
//                }
//
//                System.out.println("获取在一段时间范围内存的最大值: " + data.getRetValue() + ", " + data.getPoint()
//                                   + ", " + data.getValue() + ", " + data.getTime()
//                                   + ", " + data.getMsec() + ", " + data.getStatus());
//
//            }
//        }
//
//        /* 获取在一段时间范围内存储于历史服务的点的最小值 */
//        PointDatas = dao.SC_GetHistMinUTC("DCS2.10BBA07GS000GH3", 1487862388L, 1487862398L, (long)2);
//        if (PointDatas == null) {
//            System.out.println("SC_GetHistMinUTC 获取在一段时间范围内存的最小值 错误");
//        } else {
//            for (PointData data : PointDatas) {
//                if (data.getRetValue() != 0) {
//                    System.out.println("SC_GetHistMinUTC 获取在一段时间范围内存的最小值 错误");
//                }
//
//                System.out.println("获取在一段时间范围内存的最小值: " + data.getRetValue() + ", " + data.getPoint()
//                                   + ", " + data.getValue() + ", " + data.getTime()
//                                   + ", " + data.getMsec() + ", " + data.getStatus());
//
//            }
//        }
//
//        /* 获取在一段时间范围内存储于历史服务的点的插入值 */
//        PointDatas = dao.SC_GetHistInterpUTC("DCS2.10BBA07GS000GH3", 1487862388L, 1487862398L, (long)2);
//        if (PointDatas == null) {
//            System.out.println("SC_GetHistInterpUTC 获取在一段时间范围内存的插入值 错误");
//        } else {
//            for (PointData data : PointDatas) {
//                if (data.getRetValue() != 0) {
//                    System.out.println("SC_GetHistInterpUTC 获取在一段时间范围内存的插入值 错误");
//                }
//
//                System.out.println("获取在一段时间范围内存的插入值: " + data.getRetValue() + ", " + data.getPoint()
//                                   + ", " + data.getValue() + ", " + data.getTime()
//                                   + ", " + data.getMsec() + ", " + data.getStatus());
//
//            }
//        }
    }
}
