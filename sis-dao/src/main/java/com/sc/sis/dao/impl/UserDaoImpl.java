package com.sc.sis.dao.impl;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sc.sis.dao.UserDao;
import com.sc.sis.mapper.AuthUserMapper;
import com.sc.sis.model.AuthUserExample;
@Component
public class UserDaoImpl implements UserDao {
	
	@Autowired
	AuthUserMapper userMapper;
	
	@Override
	public boolean checkUserAuth(String username, String passwd) {
		if(StringUtils.isBlank(username) || StringUtils.isBlank(passwd)){
			return false;
		}
		AuthUserExample exm = new AuthUserExample();
		exm.createCriteria().andUserNameEqualTo(username).andPasswdEqualTo(passwd);
		return userMapper.countByExample(exm)>0;
	}

}
