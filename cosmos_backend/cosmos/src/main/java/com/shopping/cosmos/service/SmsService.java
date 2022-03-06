package com.shopping.cosmos.service;

import java.util.List;

import com.shopping.cosmos.dto.SmsMessagesDto;
import com.shopping.cosmos.dto.SmsResponseDto;

public interface SmsService {
//	SmsResponseDto sendSms(List<SmsMessagesDto> messages, String content) throws Exception;
	SmsResponseDto sendSms(String recipientPhoneNumber, String content) throws Exception;
}
