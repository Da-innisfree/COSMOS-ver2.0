package com.shopping.cosmos.vo;


import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class ProductVO {

	private int product_id;
	private String product_title;
	private int product_price;
	private CategoryVO category;
	private List<ProductDetailVO> proDetails;
	private String description;
	private String details;
	private List<String> images;
	private Date regDate;
	
}
