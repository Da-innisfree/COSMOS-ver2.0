package com.shopping.cosmos.domain;


import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class ProductVO {

	private int id;
	private String title;
	private int price;
	private CategoryVO category;
	private List<ProductDetailVO> proDetails;
	private String description;
	private String details;
	private List<String> images;
	private Date regDate;
	
}
