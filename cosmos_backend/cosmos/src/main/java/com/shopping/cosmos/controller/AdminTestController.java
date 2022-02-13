package com.shopping.cosmos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminTestController {
	
	@GetMapping("/test")
	public String adminGetTest() {
		return "admin권한 유저만 사용가능";
	}
	
	
}
