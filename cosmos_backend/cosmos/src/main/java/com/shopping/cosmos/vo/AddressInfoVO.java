package com.shopping.cosmos.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressInfoVO {
	private String userId;
	private String userName;
	private String phone;
	private String zonecode;
	private String fullAddress;
	private String addressDetail;
}
