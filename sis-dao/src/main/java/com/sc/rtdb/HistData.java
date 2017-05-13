package com.sc.rtdb;

public class HistData {
    private int retValue = -1;
    String point = "";
    double value = 0;
    long time = 0;
    short msec = 0;
    short status = 0;

    long timeStart = 0;
    long timeEnd = 0;
    long timePeriod = 0;
    short timeStartMilli = 0;
    short timeEndMilli = 0;

    int nQueryReserve = -1;


    HistData() {

    }

    public HistData(int retValue, String point, long time, double value, short msec, short status) {
        this.retValue = retValue;
        this.point = point;
        this.value = value;
        this.time = (long)time;
        this.msec = msec;
        this.status = status;
    }       
    
    public int getRetValue() {
        return retValue;
    }
    public void setRetValue(int retValue) {
        this.retValue = retValue;
    }     
    public String getPoint() {
        return point;
    }
    public void setPoint(String point) {
        this.point = point;
    }
    public double getValue() {
        return value;
    }
    public void setValue(double value) {
        this.value = value;
    }
    public long getTime() {
        return time;
    }
    public void setTime(long time) {
        this.time = time;
    }
    public short getMsec() {
        return msec;
    }
    public void setMsec(short msec) {
        this.msec = msec;
    }
    public short getStatus() {
        return status;
    }
    public void setStatus(short status) {
        this.status = status;
    }

}