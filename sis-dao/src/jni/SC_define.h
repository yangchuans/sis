#pragma once

#ifndef _SC_DEFINE_H__
#define _SC_DEFINE_H__


#define SC_MAX_DATACOUNT  1000	//最大数据个数

#define    SC_QUALITY_BAD             0x00
#define    SC_QUALITY_GOOD            0xC0
#define    SC_QUALITY_UNCERTAIN       0x40
#define    SC_QUALITY_NOT_CONNECTED   0x08
#define    SC_QUALITY_DEVICE_FAILURE  0x0c
#define    SC_QUALITY_SENSOR_FAILURE  0x10
#define    SC_QUALITY_LAST_KNOWN      0x14
#define    SC_QUALITY_COMM_FAILURE    0x18
#define    SC_QUALITY_OUT_OF_SERVICE  0x1C
#define    SC_QUALITY_CONFIG_ERROR    0x04


#define SC_RET_SUCCESS			0		//查询成功
#define SC_RET_PARAERROR		-1		//参数错误
#define SC_RET_ENCERROR			-2		//环境错误
#define SC_RET_TIMEOUT			-3		//超时错误
#define SC_RET_FUNCERROR		-4		//执行失败
#define SC_RET_NOPOINT			-5		//测点无效
#define SC_RET_NODATA			-6		//数据无效
#define SC_RET_EXCEPTION		-7      //异常发生
#define SC_RET_OTHERS			-8      //其他


#endif