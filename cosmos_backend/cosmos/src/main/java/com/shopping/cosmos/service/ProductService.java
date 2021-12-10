package com.shopping.cosmos.service;

import java.util.List;

import com.shopping.cosmos.domain.ProductVO;

public interface ProductService {
	ProductVO getProduct(int id);
	List<ProductVO> getProductList(ProductVO vo);
	
}
