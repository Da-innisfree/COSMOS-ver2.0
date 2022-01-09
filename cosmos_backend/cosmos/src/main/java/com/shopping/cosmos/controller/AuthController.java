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
	public String signin(@RequestBody LoginRequest auth) {
		
		UserVO user = userService.login(auth.getEmail(), auth.getPassword());
		
		String token = jwtUtile.generateToken(user.getEmail());
		
		return token;
		
	}
	
	//회원가입
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody UserVO user) {
		System.out.println("USER : " + user.getEmail());
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
