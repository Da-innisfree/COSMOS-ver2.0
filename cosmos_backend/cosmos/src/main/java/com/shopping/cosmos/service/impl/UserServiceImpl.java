package com.shopping.cosmos.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.cosmos.mapper.UserMapper;
import com.shopping.cosmos.service.UserService;
import com.shopping.cosmos.vo.UserVO;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserMapper usermapper;

	@Override
	public void insertUset(UserVO user) {
		usermapper.insertUser(user);		
	}
}
