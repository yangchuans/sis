package com.sc.rtdb;

public class PointData {
    private int retValue;
    String point;
    double value;
    long time;
    short msec;
    short status;
    
    public PointData(int retValue, String point, long time, double value, short msec, short status) {
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

	@Override
	public String toString() {
		return "PointData [retValue=" + retValue + ", point=" + point + ", value=" + value + ", time=" + time
				+ ", msec=" + msec + ", status=" + status + "]";
	}
    
}