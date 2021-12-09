package com.shopping.cosmos.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cosmos.domain.LoginRequest;
import com.shopping.cosmos.domain.LoginRespones;
import com.shopping.cosmos.domain.UserVO;


@RestController
public class AuthController {

//	@PostMapping("/signup")
//	void signup(@RequestBody UserVO user) {
	@GetMapping("/signup")
	String signup() {
		System.out.println("????");
		return "나와라";
	}
	
	@PostMapping("/signin")
	public LoginRespones signin(@RequestBody LoginRequest user) {
		String id = "test";
		String pass = "test";
		
		
		LoginRespones token = new LoginRespones();
		
		System.out.println(user.getId() + "     " + user.getPassword());
		System.out.println(id + "     " + pass);
		
		if(id == user.getId() && pass == user.getPassword()) {
			System.out.println("??????");
			token.setToken("token");
			return token;
		}
		else {
			System.out.println("아니라고???");
			token.setToken("토근 아니야");
			return token;			
		}
	}
}
