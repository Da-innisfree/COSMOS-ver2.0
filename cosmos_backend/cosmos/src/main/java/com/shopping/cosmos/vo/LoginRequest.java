package com.shopping.cosmos.vo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
	private String email;
	private String password;
}
