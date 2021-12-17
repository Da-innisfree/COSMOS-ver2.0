package com.shopping.cosmos.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cosmos.config.JwtTokenProvider;
import com.shopping.cosmos.domain.LoginRequest;
import com.shopping.cosmos.domain.LoginRespones;
import com.shopping.cosmos.domain.UserVO;


@RestController
public class AuthController {

	private final JwtTokenProvider jwtUtile = new JwtTokenProvider();

	@PostMapping("/signin")
	public String signin(@RequestBody LoginRequest user) {
		String id1 = "test";
		String id2 = "testtest";
		String pass = "test";
		
		
		LoginRespones token = new LoginRespones();
		
//		System.out.println(user.getId() + "     " + user.getPassword());
//		System.out.println(id1 + "     " + pass);
		
		if(( id1.equals(user.getId()) || id2.equals(user.getId()) ) && pass.equals(user.getPassword())) {
			token.setToken("token");
			
			String tk = jwtUtile.generateToken(user.getId());
			
			System.out.println(tk);
			
			return tk;
		}
		else {
			System.out.println("아니라고???");
			token.setToken("토근 아니야");
			return "tets";			
		}
	}
	
	@GetMapping("/test")
	public String test() {
		return "gettest";
	}
}
