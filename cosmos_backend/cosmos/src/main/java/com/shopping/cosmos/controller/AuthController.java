package com.shopping.cosmos.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cosmos.config.JwtTokenProvider;
import com.shopping.cosmos.service.impl.UserServiceImpl;
import com.shopping.cosmos.vo.LoginRequest;
import com.shopping.cosmos.vo.LoginRespones;
import com.shopping.cosmos.vo.UserVO;


@RestController
public class AuthController {

	private final JwtTokenProvider jwtUtile = new JwtTokenProvider();
	
	@Autowired
	UserServiceImpl userService;

	//로그인
	@PostMapping("/signin")
	public String signin(@RequestBody LoginRequest user) {
		String id1 = "test";
		String id2 = "testtest";
		String pass = "test";
		
		
		LoginRespones token = new LoginRespones();
		
		if(( id1.equals(user.getId()) || id2.equals(user.getId()) ) && pass.equals(user.getPassword())) {
			token.setToken("token");
			
			String tk = jwtUtile.generateToken(user.getId());
			
			System.out.println("로그인 jwt 토큰 발행 : " + tk);
			
			return tk;
		}
		else {
			System.out.println("아니라고???");
			token.setToken("토근 아니야");
			return "tets";			
		}
	}
	
	//회원가입
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody UserVO user) {
		System.out.println("USER : " + user.getId());
		System.out.println("USER : " + user.getName());
		System.out.println("USER : " + user.getPassword());
		System.out.println("USER : " + user.getPhone());
		
		try {
			userService.insertUset(user);			
		} catch (Exception e) {
			return ResponseEntity.ok(e);
		}
		
		return ResponseEntity.ok(true);
	}
	
	@GetMapping("/test")
	public String test() {
		return "gettest";
	}
}
