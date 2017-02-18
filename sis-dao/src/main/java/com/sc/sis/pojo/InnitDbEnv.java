package com.sc.sis.pojo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sc.rtdb.RealTimeDBDao;

public class InnitDbEnv {
	
	private String serverIp;
	
	private short serverPort;
	
	private String username;
	
	private String password;
	
	private final static Logger LOGGER = LoggerFactory.getLogger(InnitDbEnv.class);

	public String getServerIp() {
		return serverIp;
	}

	public void setServerIp(String serverIp) {
		this.serverIp = serverIp;
	}

	public short getServerPort() {
		return serverPort;
	}

	public void setServerPort(short serverPort) {
		this.serverPort = serverPort;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public int init(){
		
		RealTimeDBDao dao = new RealTimeDBDao();
		int ret = dao.SC_InitialEnv(serverIp, serverPort, username, password);
		if (ret != 0) {
			LOGGER.error("PI数据库连接初始化 错误！！！！！！！");
        }else{
        	LOGGER.info("PI数据库连接初始化 成功！！！！！！！");
        }
		return ret;
	}
	 
}
