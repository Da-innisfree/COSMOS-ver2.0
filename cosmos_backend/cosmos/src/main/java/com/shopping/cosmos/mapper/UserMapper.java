package com.shopping.cosmos.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.shopping.cosmos.vo.UserVO;

@Mapper
public interface UserMapper {
	void insertUser(UserVO user);
}
