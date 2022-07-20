package com.shopping.cosmos.vo;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class ProductDetailVO {
	private int product_detail_id;
	private String product_size;
	private String product_color;
	private int product_stock;
	
}
