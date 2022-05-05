package com.shopping.cosmos.service.impl;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shopping.cosmos.dto.SmsMessagesDto;
import com.shopping.cosmos.dto.SmsRequestDto;
import com.shopping.cosmos.dto.SmsResponseDto;
import com.shopping.cosmos.service.SmsService;

@Service
public class SmsServiceImpl implements SmsService{



	
	@Autowired
	private ObjectMapper objectMapper; //????뭔지 확인
	
	private final String SENS_API_URL = "https://sens.apigw.ntruss.com"; // 호스트 URL
	private final String SENS_REQ_URL = "/sms/v2/services/%s/messages"; // 요청 URL
	private final String SENS_METHOD = "POST"; // 요청 Method
	private String accessKey ="";
	private String secretKey="";
	private String serviceId="";
	private String fromPhone="";
	
	
	@Override
	public SmsResponseDto sendSms(String recipientPhoneNumber, String content) throws Exception {
		String currentTs = Long.toString(System.currentTimeMillis());
		List<SmsMessagesDto> messages = new ArrayList<>();
		messages.add(new SmsMessagesDto(recipientPhoneNumber, content));
		
		String requestUrl = String.format(SENS_REQ_URL, URLEncoder.encode(serviceId, StandardCharsets.UTF_8.toString()));
		String apiUrl = SENS_API_URL + requestUrl;
		String signatureV2 = makeSignature(requestUrl, currentTs, SENS_METHOD, accessKey, secretKey);
		
		// 전체 json에 대해 메시지를 만든다. 
		SmsRequestDto smsRequestDto = new SmsRequestDto("SMS", "COMM", "82", fromPhone, content, messages);

		//바디를 json형태로 변환
		String jsonBody = objectMapper.writeValueAsString(smsRequestDto);
		
		//http 헤더 설정
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("x-ncp-apigw-timestamp", currentTs);

		// 제일 중요한 signature 서명하기.
		headers.set("x-ncp-iam-access-key", accessKey); 
		
		// 위에서 조립한 jsonBody와 헤더를 조립한다.
		headers.set("x-ncp-apigw-signature-v2", signatureV2);
		HttpEntity<String> body = new HttpEntity<>(jsonBody, headers);
		
		RestTemplate restTemplate = new RestTemplate();
		SmsResponseDto responseDto = restTemplate.postForObject(new URI(apiUrl), body, SmsResponseDto.class);
		
		return responseDto;
	}
	
	private String makeSignature(String url, String timestamp, String method, String accessKey, String secretKey)
			throws Exception {
		String message = new StringBuilder()
				.append(method)
				.append(" ")
				.append(url)
				.append("\n")
				.append(timestamp)
				.append("\n")
				.append(accessKey)
				.toString();
		// @formatter:on
		SecretKeySpec signingKey = new SecretKeySpec(secretKey.getBytes("UTF-8"), "HmacSHA256");
		Mac mac = Mac.getInstance("HmacSHA256");
		mac.init(signingKey);
		byte[] rawHmac = mac.doFinal(message.getBytes("UTF-8"));
		return Base64.getEncoder().encodeToString(rawHmac);
	}

}
