package com.shopping.cosmos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cosmos.service.ProductService;
import com.shopping.cosmos.vo.CategoryVO;
import com.shopping.cosmos.vo.ProductDetailVO;
import com.shopping.cosmos.vo.ProductVO;


@RestController
public class ProductController {
	
	@Autowired
	ProductService service; 
			
	//상품리스트 보내면서 컬러는 중복제거해서 List로 전송
	@GetMapping("/{gender}/{category}")
	public List<ProductVO> productList(@PathVariable("gender") String gender, @PathVariable("category") String category) {
		service.getProductList(gender,category);		
		return null;
	}
	
	@GetMapping("/product/{id}")
	public List<ProductVO> productDetail() {
		return null;
	}
	@GetMapping("/{gender}/{category}/detail")
	public List<String> categoryDetail(){
		return null;
	}
	
	@GetMapping("/cart/{userID}")
	public String cartPage() {
		return null;
	}
	
	
	
	
	
	
	
	
	
}
