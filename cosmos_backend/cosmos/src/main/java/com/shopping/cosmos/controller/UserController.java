package com.shopping.cosmos.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cosmos.service.impl.UserServiceImpl;
import com.shopping.cosmos.vo.LoginRequest;
import com.shopping.cosmos.vo.UserVO;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@GetMapping("/{id}")
	public UserVO getUserInfo(@PathVariable("id") String id) {
		return userServiceImpl.getUserInfo(id);
	}
	
	@PostMapping("/confirmPassword")
	public boolean confirmPassword(@RequestBody String password) {
		
		return userServiceImpl.confirmPassword(password);
	}
	
	
}
