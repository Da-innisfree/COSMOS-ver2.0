package com.shopping.cosmos.vo;


import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
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
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getProduct_title() {
		return product_title;
	}
	public void setProduct_title(String product_title) {
		this.product_title = product_title;
	}
	public int getProduct_price() {
		return product_price;
	}
	public void setProduct_price(int product_price) {
		this.product_price = product_price;
	}
	public CategoryVO getCategory() {
		return category;
	}
	public void setCategory(CategoryVO category) {
		this.category = category;
	}
	public List<ProductDetailVO> getProDetails() {
		return proDetails;
	}
	public void setProDetails(List<ProductDetailVO> proDetails) {
		this.proDetails = proDetails;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public List<String> getImages() {
		return images;
	}
	public void setImages(List<String> images) {
		this.images = images;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	
	
}
