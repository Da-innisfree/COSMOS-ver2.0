package com.shopping.cosmos.service;

import java.util.List;
import java.util.Optional;

import com.shopping.cosmos.vo.AddressInfoVO;
import com.shopping.cosmos.vo.UserVO;

public interface UserService {
	void insertUset(UserVO user);
	Optional<UserVO> login(String email, String password);
	Optional<UserVO> checkEmail(String email);
	UserVO getUserInfo(String id);
	boolean confirmPassword(String password);
	List<AddressInfoVO> getAddressByUserId(String id);
	int saveAddress(AddressInfoVO addressInfo);
	void phoneAuthNum(String phone);
}
