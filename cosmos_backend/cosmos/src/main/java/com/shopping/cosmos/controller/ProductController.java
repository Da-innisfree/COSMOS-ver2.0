package com.shopping.cosmos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
	
	//상품리스트 보내면서 컬러는 중복제거해서 List로 전송
	@GetMapping("/{gender}/{category}")
	String productList() {
		return null;
	}
	
	@GetMapping("/product/{id}")
	String productDetail() {
		return null;
	}
	
	@GetMapping("/cart/{userID}")
	String cartPage() {
		return null;
	}
	
	
	
}
