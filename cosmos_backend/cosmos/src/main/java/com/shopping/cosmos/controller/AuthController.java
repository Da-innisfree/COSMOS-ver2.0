package com.shopping.cosmos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
