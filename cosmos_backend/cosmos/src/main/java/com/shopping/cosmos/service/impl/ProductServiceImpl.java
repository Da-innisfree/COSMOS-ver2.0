package com.shopping.cosmos.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.cosmos.mapper.ProductMapper;
import com.shopping.cosmos.service.ProductService;
import com.shopping.cosmos.vo.ProductVO;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	ProductMapper mapper;

	@Override
	public ProductVO getProduct(int id) {
		return mapper.readProduct(id);
	}

	@Override
	public List<ProductVO> getProductList(ProductVO vo) {
		return mapper.readProductList(vo);
	}

}
