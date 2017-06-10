package com.sc.sis.dao.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;

import org.joda.time.DateTime;
import org.joda.time.Days;

import com.sc.rtdb.PointData;
import com.sc.rtdb.RealTimeDBDao;

public class GetHistDataTest {
	
	public static void main(String[] args) throws ParseException {
//		 RealTimeDBDao dao = new RealTimeDBDao();
//
//         int ret = dao.SC_InitialEnv("123.56.243.15", (short) 5656, "sa", "sa");
//
//         if (ret != 0) {
//            System.out.println("SC_InitialEnv 错误");
//         }else{
//        	 System.out.println("初始化成功！");
//         }
//         String points = "DCS1.GEMW";
//         Long timeEnd = System.currentTimeMillis()/1000;
//         Long timeStart = timeEnd - 3600 * 24 * 7l;
//         Long timePeriod = 24*3600l;
//         String timeFomaterStr="yyyy-MM-dd HH:mm:ss";
//         System.out.println("currentTimeMillis="+System.currentTimeMillis());
//         System.out.println("points="+points+" timeStart="+timeStart+" timeEnd="+timeEnd+" timePeriod="+timePeriod);
//         List<PointData> pointDataList = dao.SC_GetHistSnapUTC(points, timeStart, timeEnd, timePeriod);
//         //List<PointData> pointDataList = dao.SC_GetHistInterpUTC(points, timeStart, timeEnd, timePeriod);
//         Map<String,String> time_Val = new HashMap<>();
//		 if(null!=pointDataList){
//			for(PointData pointData : pointDataList){
//				DateTime time  = new DateTime(pointData.getTime()*1000);
//				String timeStr = time.toString(timeFomaterStr);
//				time_Val.put(timeStr, String.valueOf(Math.round(pointData.getValue()*100)/100.0));
//				System.out.println(timeStr+"-->"+time_Val.get(timeStr));
//			}
//		 }
//		 String [] arr = new String[] {"DCS1.GEMW","DCS2.GEMW"};
//		 List<PointData> data = dao.SC_GetRTPoint(arr);
////		 PointData data = dao.SC_GetRTPoint("DCS1.GEMW");
//		 System.out.println(data);
////		DateTime sTime = DateTime.now();
////		sTime = sTime.plusHours(1);
////		System.out.println(System.currentTimeMillis());
////		System.out.println(System.currentTimeMillis()-24*3600000);
////		System.out.println(24*3600000);
////		System.out.println(new DateTime(0));
//		 List<PointData> maxData = dao.SC_GetHistMaxUTC("DCS1.GEMW", timeStart, timeEnd, timeEnd-timeStart);
//		 System.out.println(maxData);
		//System.out.println(System.currentTimeMillis());
		
//		Date date = new Date();
//		SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd");
//		SimpleDateFormat f1 = new SimpleDateFormat("yyyy-01-01");
////		
//		
//		String ss = "2017-06-10";
//		Date dd = null;
//		dd = f.parse(ss);
//		
//		String firstDayOfThisYear = f1.format(ss);
//		
//		System.out.println(dd+"    "+firstDayOfThisYear);
		
//		DateTime now = DateTime.now();
//		
//		String firstDayOfThisYear = now.toString("yyyy-01-01");
//		
//		DateTime firstDayOfThisYearDate = new DateTime(firstDayOfThisYear);
//		
//		int day = Days.daysBetween(firstDayOfThisYearDate, now).getDays();
		
		//System.out.println(day);
		
//		long nowMills = Date.UTC(2016, 6, 10, 0, 0, 0);
//		
//		long firstNills = Date.UTC(2016, 1, 1, 0, 0, 0);
//		System.out.println((nowMills-firstNills)/(1000*3600*24));
		
		
	}
	
		
}
