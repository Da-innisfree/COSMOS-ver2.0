package com.shopping.cosmos.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.shopping.cosmos.vo.CategoryVO;
import com.shopping.cosmos.vo.ProductDetailVO;
import com.shopping.cosmos.vo.ProductVO;


@RestController
public class ProductController {
	
	//상품리스트 보내면서 컬러는 중복제거해서 List로 전송
	@GetMapping("/{gender}/{category}")
	public List<ProductVO> productList() {
		return null;
	}
	
	@GetMapping("/product/{id}")
	public List<ProductVO> productDetail() {
		return null;
	}
	
	@GetMapping("/cart/{userID}")
	public String cartPage() {
		return null;
	}
	
	@GetMapping("/{gender}/{category}/detail")
	public List<String> categoryDetail(){
		return null;
	}
	
	
	
	
	
	
	
}
