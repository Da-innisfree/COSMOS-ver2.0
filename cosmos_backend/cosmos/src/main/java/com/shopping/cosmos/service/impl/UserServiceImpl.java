package com.shopping.cosmos.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.shopping.cosmos.mapper.UserMapper;
import com.shopping.cosmos.service.UserService;
import com.shopping.cosmos.vo.UserVO;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private final PasswordEncoder passwordEncoder = null;
	
	@Autowired
	UserMapper usermapper;

	//로그인
	@Override
	public Optional<UserVO> login(String email, String password) {
		System.out.println("servicelogin: " + email +" " +  password);
		
		Optional<UserVO> user = usermapper.findByEmail(email);  //err 처리
		//유저 객체 널 체크 여기서
		if(!passwordEncoder.matches(password, user.get().getPassword())) {
			System.out.println("비밀번호가 다르다"); //err 처리
		}
		
		return user;
	}

	
	//회원가입
	@Override
	public void insertUset(UserVO user) {
		
		String userPasswdEncode = passwordEncoder.encode(user.getPassword());
		
		System.out.println("service test password Encoder" + userPasswdEncode);
		
		user.setPassword(userPasswdEncode);
		
		int a = usermapper.insertUser(user);
		
		System.out.println("?????.........." + a);
	}
	
	@Override
	public Optional<UserVO> checkEmail(String email) {
		return usermapper.findByEmail(email);
	}

}
