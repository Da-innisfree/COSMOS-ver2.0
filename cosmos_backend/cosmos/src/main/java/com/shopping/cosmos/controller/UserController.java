package com.shopping.cosmos.controller;


import java.util.ArrayList;
import java.util.List;

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
	
	@PostMapping("/address")
	public List<String> getAddress(@RequestBody String id) {
		System.out.println("주소를 받아 봅시다");
		
		List<String> test = new ArrayList<String>();
		
		test.add("주소1");
		test.add("주소2");
		test.add("주소3");
		test.add("주소4");
		test.add("주소5");
		
		return test;
	}
	
}
