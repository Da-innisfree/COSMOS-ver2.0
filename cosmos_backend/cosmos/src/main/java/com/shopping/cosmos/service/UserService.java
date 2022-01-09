package com.shopping.cosmos.service;

import com.shopping.cosmos.vo.UserVO;

public interface UserService {
	void insertUset(UserVO user);
	UserVO login(String email, String password);
}
