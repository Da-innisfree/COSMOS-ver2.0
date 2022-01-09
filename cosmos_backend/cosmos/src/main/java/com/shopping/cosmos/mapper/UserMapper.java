package com.shopping.cosmos.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.shopping.cosmos.vo.UserVO;

@Mapper
public interface UserMapper {
	int insertUser(UserVO user);
	UserVO findByEmail(String email);
}
