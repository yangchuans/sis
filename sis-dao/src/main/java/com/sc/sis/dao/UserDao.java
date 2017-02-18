package com.sc.sis.dao;

public interface UserDao {
	
	boolean checkUserAuth(String username,String passwd);
}
