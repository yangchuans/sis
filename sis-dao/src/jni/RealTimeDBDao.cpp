#include "stdafx.h"

#include <stdlib.h>
#include <jni.h>

#include "com_sc_rtdb_RealTimeDBDao.h"
#include "SC_define.h"

int SC_InitialEnv(char *sIP, unsigned int port, char *sUserName, char *sPassword);
void SC_UninitialEnv();

int SC_CheckServiceStatus();

int SC_GetRTPoint(const char *szPoint, double *pdValue, long *ptTime, unsigned short *pusStatus);
int SC_GetRTPointFull(const char *szPoint, double *pdValue, long *ptTime, unsigned short *pusMsec, 
	unsigned short *pusStatus);
int SC_GetRTPoints(unsigned short nCount, char *szPoint[], unsigned short nPointNameLen, double *pdValueList, 
	long *ptTimeList, unsigned short *pusStatusList);
int SC_GetRTPointsFull(unsigned short nCount, char *szPoint[], unsigned short nPointNameLen, 
	double *pdValueList, long *ptTimeList, unsigned short *pusMsecList, unsigned short *pusStatusList);

BOOL APIENTRY DllMain(HMODULE hModule,
	DWORD  ul_reason_for_call,
	LPVOID lpReserved
	)
{
	switch (ul_reason_for_call)
	{
	case DLL_PROCESS_ATTACH:
	case DLL_THREAD_ATTACH:
	case DLL_THREAD_DETACH:
	case DLL_PROCESS_DETACH:
		break;
	}
	return TRUE;
}


JNIEXPORT jint JNICALL Java_com_sc_rtdb_RealTimeDBDao_HelloWorld
(JNIEnv *, jobject)
{
	return 10;
}


JNIEXPORT jint JNICALL Java_com_sc_rtdb_RealTimeDBDao_SC_1InitialEnv
(JNIEnv *env, jobject, jstring ip, jshort port, jstring username, jstring password)
{
	const char *c_ip = env->GetStringUTFChars(ip, false);
	const char *c_username = env->GetStringUTFChars(username, false);
	const char *c_password = env->GetStringUTFChars(password, false);

	int result = SC_InitialEnv((char *)c_ip, port, (char *)c_username, (char *)c_password);

	env->ReleaseStringUTFChars(ip, c_ip);
	env->ReleaseStringUTFChars(username, c_username);
	env->ReleaseStringUTFChars(password, c_password);

	return result;

}

JNIEXPORT void JNICALL Java_com_sc_rtdb_RealTimeDBDao_SC_1UninitialEnv
(JNIEnv *, jobject)
{
	SC_UninitialEnv();
}

JNIEXPORT jint JNICALL Java_com_sc_rtdb_RealTimeDBDao_SC_1CheckServiceStatus
(JNIEnv *, jobject)
{
	return SC_CheckServiceStatus();
}


JNIEXPORT jobject JNICALL Java_com_sc_rtdb_RealTimeDBDao_SC_1GetRTPoint__Ljava_lang_String_2
(JNIEnv *env, jobject, jstring point)
{
	const char *c_point = env->GetStringUTFChars(point, false);

	double value = 0;
	long time = 0;
	unsigned short status = 0;

	int result = SC_GetRTPoint((char *)c_point, &value, &time, &status);

	jclass pointDataCls = env->FindClass("com/sc/rtdb/PointData");
	jmethodID constructorMID = env->GetMethodID(pointDataCls, "<init>", "(ILjava/lang/String;JDSS)V");	

	// 一定要执行long long 和 double 强转
	//构造一个对象，调用该类的构造函数，并且传递参数 
	jobject pointObj = env->NewObject(pointDataCls, constructorMID, result, point, (long long)time, (double)value, 0, status);  

	env->ReleaseStringUTFChars(point, c_point);

	return pointObj;


}

JNIEXPORT jobject JNICALL Java_com_sc_rtdb_RealTimeDBDao_SC_1GetRTPointFull__Ljava_lang_String_2
(JNIEnv *env, jobject, jstring point)
{
	const char *c_point = env->GetStringUTFChars(point, false);

	double value = 0;
	long time = 0;
	unsigned short msec = 0;
	unsigned short status = 0;

	int result = SC_GetRTPointFull((char *)c_point, &value, &time, &msec, &status);

	jclass pointDataCls = env->FindClass("com/sc/rtdb/PointData");
	jmethodID constructorMID = env->GetMethodID(pointDataCls, "<init>", "(ILjava/lang/String;JDSS)V");

	// 一定要执行long long 和 double 强转
	//构造一个对象，调用该类的构造函数，并且传递参数 
	jobject pointObj = env->NewObject(pointDataCls, constructorMID, result, point, (long long)time, (double)value, msec, status);

	env->ReleaseStringUTFChars(point, c_point);

	return pointObj;
}

JNIEXPORT jobject JNICALL Java_com_sc_rtdb_RealTimeDBDao_SC_1GetRTPoint___3Ljava_lang_String_2
(JNIEnv * env, jobject, jobjectArray points)
{
	jsize len = env->GetArrayLength(points);
	char **pointStr = (char **)malloc(len * sizeof(char *));

	unsigned short pointNameMinSize = 128;
	for (int i = 0; i < len; i++)
	{
		jstring jstr = (jstring)env->GetObjectArrayElement(points, i);		
		pointStr[i] = (char *)env->GetStringUTFChars(jstr, false);
		env->DeleteLocalRef(jstr);
		 
	} 

	double *values = (double *) malloc(len * sizeof(double));
	memset(values, 0, len * sizeof(double));

	long *times = (long *)malloc(len * sizeof(long));
	memset(times, 0, len * sizeof(long));

	unsigned short *status = (unsigned short *)malloc(len * sizeof(unsigned short));
	memset(status, 0, len * sizeof(unsigned short));

	double pdValueList[5] = { 0 };
	long ptTimeList[5] = { 0 };
	unsigned short pusStatusList[5] = { 0 };

	jobject retObj = 0;
	int result = SC_GetRTPoints((unsigned short)len, pointStr, pointNameMinSize, values, times, status);
	if (result == 0)
	{
		jclass listCls = env->FindClass("Ljava/util/ArrayList;");//获得ArrayList类引用  
		jmethodID listConstructor = env->GetMethodID(listCls, "<init>", "()V"); //获得得构造函数Id  
		jobject listObj = env->NewObject(listCls, listConstructor); //创建一个Arraylist集合对象  
		//或得Arraylist类中的 add()方法ID，其方法原型为： boolean add(Object object) ;  
		jmethodID listAdd = env->GetMethodID(listCls, "add", "(Ljava/lang/Object;)Z");

		jclass pointDataCls = env->FindClass("com/sc/rtdb/PointData");
		jmethodID constructorMID = env->GetMethodID(pointDataCls, "<init>", "(ILjava/lang/String;JDSS)V");

		for (int i = 0; i < len; i++)
		{
			jstring jstr = (jstring)env->GetObjectArrayElement(points, i);

			// 一定要执行long long 和 double 强转
			//构造一个对象，调用该类的构造函数，并且传递参数 
			jobject pointObj = env->NewObject(pointDataCls, constructorMID, result, jstr, (long long)times[i],
				(double)values[i], (unsigned short)0, (unsigned short)status[i]);
			env->CallBooleanMethod(listObj, listAdd, pointObj);

			env->DeleteLocalRef(jstr);
		}
		 
		retObj = listObj;
	}

	for (int i = 0; i < len; i++)
	{
		jstring jstr = (jstring)env->GetObjectArrayElement(points, i);
		env->ReleaseStringUTFChars(jstr, pointStr[i]);

		env->DeleteLocalRef(jstr);
	}

	free(pointStr);
	free(values);
	free(times);
	free(status);

	return retObj;
}

JNIEXPORT jobject JNICALL Java_com_sc_rtdb_RealTimeDBDao_SC_1GetRTPointFull___3Ljava_lang_String_2
(JNIEnv *env, jobject, jobjectArray points)
{
	jsize len = env->GetArrayLength(points);
	char **pointStr = (char **)malloc(len * sizeof(char *));

	unsigned short pointNameMinSize = 128;
	for (int i = 0; i < len; i++)
	{
		jstring jstr = (jstring)env->GetObjectArrayElement(points, i);
		pointStr[i] = (char *)env->GetStringUTFChars(jstr, false);
		env->DeleteLocalRef(jstr);

	}

	double *values = (double *)malloc(len * sizeof(double));
	memset(values, 0, len * sizeof(double));

	long *times = (long *)malloc(len * sizeof(long));
	memset(times, 0, len * sizeof(long));

	unsigned short *msec = (unsigned short *)malloc(len * sizeof(unsigned short));
	memset(msec, 0, len * sizeof(unsigned short));

	unsigned short *status = (unsigned short *)malloc(len * sizeof(unsigned short));
	memset(status, 0, len * sizeof(unsigned short));

	jobject retObj = 0;
	int result = SC_GetRTPointsFull((unsigned short)len, pointStr, pointNameMinSize, values, times, msec, status);
	if (result == 0)
	{
		jclass listCls = env->FindClass("Ljava/util/ArrayList;");//获得ArrayList类引用  
		jmethodID listConstructor = env->GetMethodID(listCls, "<init>", "()V"); //获得得构造函数Id  
		jobject listObj = env->NewObject(listCls, listConstructor); //创建一个Arraylist集合对象  
		//或得Arraylist类中的 add()方法ID，其方法原型为： boolean add(Object object) ;  
		jmethodID listAdd = env->GetMethodID(listCls, "add", "(Ljava/lang/Object;)Z");

		jclass pointDataCls = env->FindClass("com/sc/rtdb/PointData");
		jmethodID constructorMID = env->GetMethodID(pointDataCls, "<init>", "(ILjava/lang/String;JDSS)V");

		for (int i = 0; i < len; i++)
		{
			jstring jstr = (jstring)env->GetObjectArrayElement(points, i);

			// 一定要执行long long 和 double 强转
			//构造一个对象，调用该类的构造函数，并且传递参数 
			jobject pointObj = env->NewObject(pointDataCls, constructorMID, result, jstr, (long long)times[i],
				(double)values[i], (unsigned short)msec[i], (unsigned short)status[i]);
			env->CallBooleanMethod(listObj, listAdd, pointObj);

			env->DeleteLocalRef(jstr);
		}

		retObj = listObj;
	}

	for (int i = 0; i < len; i++)
	{
		jstring jstr = (jstring)env->GetObjectArrayElement(points, i);
		env->ReleaseStringUTFChars(jstr, pointStr[i]);

		env->DeleteLocalRef(jstr);
	}

	free(pointStr);
	free(values);
	free(times);
	free(status);

	return retObj;
}
