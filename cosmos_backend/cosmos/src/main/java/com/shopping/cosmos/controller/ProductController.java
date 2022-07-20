package com.shopping.cosmos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

//	상품 리스트
	@GetMapping("getProductList/{gender}/{category}")
	public ResponseEntity<?> productList(@PathVariable("gender") String gender,
			@PathVariable("category") String category) {
		List<ProductVO> productList = service.getProductList(gender, category);
		
		//색상추가
		for (ProductVO vo : productList) {
			vo.setProDetails(service.getProductColors(vo.getProduct_id()));
		}
		return ResponseEntity.ok(productList);
	}

//	상품 상세
	@GetMapping("/product/{id}")
	public ResponseEntity<?> productDetail(@PathVariable("id") String product_id) {
		ProductVO vo = service.getProduct(product_id);
//		vo.setProDetails(service.getProductDetails(product_id));
		return ResponseEntity.ok(vo);
	}

//	카테고리 디테일 리스트 (String 배열)
	@GetMapping("getDetails/{gender}/{category}/detail")
	public ResponseEntity<?> categoryDetail(@PathVariable("gender") String gender,
			@PathVariable("category") String category) {
		System.out.println(gender + category);
		return ResponseEntity.ok(service.readCategoryDetails(gender, category));
	}

//	카트 리스트
	@GetMapping("/cart/{userID}")
	public ResponseEntity<?> cartPage() {
		return null;
	}

}
