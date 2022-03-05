package com.shopping.cosmos;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.shopping.cosmos.config.JwtTokenProvider;
import com.shopping.cosmos.service.impl.UserServiceImpl;
import com.shopping.cosmos.vo.UserVO;

@SpringBootTest
public class JwtTokenProviderTest {
	
	@Autowired
	JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	UserServiceImpl userService;
	
	static String token = null;
	
	@Test
    public void 토큰_생성() {
		
		Optional<UserVO> user = userService.login("test@test.com", "test");
		if(user.isPresent()) {
			token = jwtTokenProvider.generateToken(user.get().getUsername(), user.get().getAuthorities());
		}
	}
	
	@Test
    public void 토큰_검증() {
		String username = null;
		
		System.out.println(token);
		
		username = jwtTokenProvider.getUserIdFromJWT(token);
		
		System.out.println(username);
	}

}
