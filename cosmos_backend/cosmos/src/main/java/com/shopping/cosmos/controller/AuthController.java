package com.shopping.cosmos.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cosmos.domain.UserVO;

@CrossOrigin(origins = "http://localhost:3000/signup")
@RestController
public class AuthController {

	@PostMapping("/signup")
	void signup(@RequestBody UserVO user) {
		System.out.println(user.getId());
	}
}
