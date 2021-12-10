package com.shopping.cosmos.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.shopping.cosmos.domain.ProductVO;

@Mapper
public interface ProductMapper {
	
	ProductVO readProduct(int id);
	List<ProductVO> readProductList(ProductVO vo);
	
	
}
