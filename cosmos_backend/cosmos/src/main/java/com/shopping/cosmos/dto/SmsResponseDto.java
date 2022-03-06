package com.shopping.cosmos.dto;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class SmsResponseDto {
	private String statusCode;
	private String statusName;
	private String requestId;
	private Timestamp requestTime;
}
