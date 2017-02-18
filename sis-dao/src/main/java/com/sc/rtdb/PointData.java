package com.sc.rtdb;

public class PointData {
	/* 此次调用的返回值，如果是批量的，返回值都是同一个值，
     * 先判断是否等于0， 如果不等于0， 则说明调用不成功，其它field的数据就不对 */
    private int retValue;
    
    /* 传入的点名 */
    String point;
    
    /* 点名对应的值 */
    double value;
    
    /* 服务器返回的时间  */
    long time;
    
    /* 服务器返回的毫秒时间  */
    short msec;
    
    /* 服务返回的状态  */
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