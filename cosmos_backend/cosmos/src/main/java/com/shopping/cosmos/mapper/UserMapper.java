package com.shopping.cosmos.mapper;

import java.util.List;
import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.shopping.cosmos.vo.AddressInfoVO;
import com.shopping.cosmos.vo.UserVO;

@Mapper
public interface UserMapper {
	int insertUser(UserVO user);
	Optional<UserVO> findById(String username);
	Optional<UserVO> findByEmail(String email);
//	UserVO findByEmail(String email);
	int insertAddress(AddressInfoVO addressInfo);
	List<AddressInfoVO> getAddressByUserId(String id);
}
