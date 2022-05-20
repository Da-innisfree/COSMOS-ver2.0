package com.shopping.cosmos.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.shopping.cosmos.vo.CategoryVO;
import com.shopping.cosmos.vo.ProductDetailVO;
import com.shopping.cosmos.vo.ProductVO;

@Mapper
public interface ProductMapper {
	
	ProductVO readProduct(String product_id);
	List<ProductDetailVO> readProductDetails(String product_id);
	List<ProductVO> readProductList(String gender, String category);
	List<CategoryVO> readCategoryDetails(String gender, String category);
	
	
}
