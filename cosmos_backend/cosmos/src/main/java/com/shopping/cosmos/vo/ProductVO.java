package com.shopping.cosmos.vo;

import java.util.List;

import lombok.Data;

@Data
public class ProductVO {

	private String product_id;
	private String product_title;
	private String product_price;
	private CategoryVO category;
	private List<ProductDetailVO> proDetails;
	private String description;
	private String details;
	private List<String> images;
	private String reg_date;
}
