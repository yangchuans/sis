package com.sc.sis.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sc.sis.dao.UserDao;
import com.sc.sis.service.UserService;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;
	
	@Override
	public boolean checkUserAuth(String username, String passwd) {
		return userDao.checkUserAuth(username, passwd);
	}
	
}
