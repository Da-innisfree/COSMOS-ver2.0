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
			
	//상품리스트 보내면서 컬러는 중복제거해서 List로 전송
	@GetMapping("/{gender}/{category}")
	public List<ProductVO> productList(@PathVariable("gender") String gender, @PathVariable("category") String category) {
		return service.getProductList(gender,category);		
	}
	
	@GetMapping("/product/{id}")
	public ProductVO productDetail(@PathVariable("id") String product_id) {
		ProductVO vo = service.getProduct(product_id);
		vo.setProDetails(service.getProductDetails(product_id));
		return vo;
	}
	@GetMapping("/{gender}/{category}/detail")
	public ResponseEntity<?> categoryDetail(@PathVariable("gender") String gender, @PathVariable("category") String category){
		System.out.println(gender + category );
		return ResponseEntity.ok(service.readCategoryDetails(gender, category));
	}
	
	@GetMapping("/cart/{userID}")
	public String cartPage() {
		return null;
	}
	
	
	
	
	
	
	
	
	
}
