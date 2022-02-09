package com.shopping.cosmos.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.shopping.cosmos.vo.UserVO;

@Mapper
public interface UserMapper {
	int insertUser(UserVO user);
	Optional<UserVO> findByEmail(String email);
//	UserVO findByEmail(String email);
}
