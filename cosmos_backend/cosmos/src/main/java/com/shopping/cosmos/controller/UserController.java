package com.shopping.cosmos.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cosmos.service.impl.UserServiceImpl;
import com.shopping.cosmos.vo.AddressInfoVO;
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
	
	@GetMapping("/address/{id}")
	public ResponseEntity<?> getAddress(@PathVariable("id") String id) {
		List<AddressInfoVO> addressinfo = userServiceImpl.getAddressByUserId(id);
		
		return ResponseEntity.ok(addressinfo);
	}
	
	@PostMapping("/address")
	public ResponseEntity<?> saveAddress(@RequestBody AddressInfoVO addressInfo) {
		int result = userServiceImpl.saveAddress(addressInfo);

		if(result == 1) {
			return ResponseEntity.ok(true);			
		}
		else {
			return ResponseEntity.ok(false);
		}
	}
	
}
