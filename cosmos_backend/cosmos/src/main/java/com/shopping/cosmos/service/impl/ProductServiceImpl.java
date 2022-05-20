package com.shopping.cosmos.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.cosmos.mapper.ProductMapper;
import com.shopping.cosmos.service.ProductService;
import com.shopping.cosmos.vo.CategoryVO;
import com.shopping.cosmos.vo.ProductDetailVO;
import com.shopping.cosmos.vo.ProductVO;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	ProductMapper mapper;

	@Override
	public ProductVO getProduct(String product_id) {
		return mapper.readProduct(product_id);
	}
	
	@Override
	public List<ProductDetailVO> getProductDetails(String product_id) {
		return mapper.readProductDetails(product_id);
	}


	@Override

	public List<ProductVO> getProductList(String gender, String category) {
		return mapper.readProductList(gender, category);
	}

	@Override
	public List<CategoryVO> readCategoryDetails(String gender, String category) {
		System.out.println(gender + category );
		return mapper.readCategoryDetails(gender, category);
	}

}
