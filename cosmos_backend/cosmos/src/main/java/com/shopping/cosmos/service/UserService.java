package com.shopping.cosmos.service;

import java.util.Optional;

import com.shopping.cosmos.vo.UserVO;

public interface UserService {
	void insertUset(UserVO user);
	Optional<UserVO> login(String email, String password);
	Optional<UserVO> checkEmail(String email);
	UserVO getUserInfo(String id);
	boolean confirmPassword(String password);
	void phoneAuthNum(String phone);
}
