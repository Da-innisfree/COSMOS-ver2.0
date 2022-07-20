package com.shopping.cosmos.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.shopping.cosmos.vo.CategoryVO;
import com.shopping.cosmos.vo.ProductDetailVO;
import com.shopping.cosmos.vo.ProductVO;

@Mapper
public interface ProductMapper {
	
	List<ProductVO> readProductList(String gender, String category);
	List<ProductDetailVO> readProductDetails(String product_id);
	ProductVO readProduct(String product_id);
	List<String> readCategoryDetails(String gender, String category);
	List<ProductDetailVO> readColors(String product_id);
	
}
