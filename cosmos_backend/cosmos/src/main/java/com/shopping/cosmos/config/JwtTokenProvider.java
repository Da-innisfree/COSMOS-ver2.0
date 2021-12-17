package com.shopping.cosmos.config;

import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class JwtTokenProvider {
	//토큰 생성 유틸
	
//	private static final String JWT_SECRET = "secretKey";
	private static final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
	private static final String base64Key = Encoders.BASE64.encode(key.getEncoded());
	
	
	//토큰 유효시간
	private static final int JWT_EXPIRATION_MS = 60480000;
	
	//토큰 생성
	public static String generateToken(String id) {
		
		return Jwts.builder()
				.setSubject(id)
				.setIssuedAt(new Date(System.currentTimeMillis()))  //토큰 시작시간
				.setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION_MS))  //만료시간
				.signWith(key)  //서명 키
				.compact();
				
	}
	
	//토근 아이디 추출
	public static String getUserIdFromJWT(String token) {
		Jws<Claims> claims;
		
		try {
			claims = Jwts.parserBuilder()
					.setSigningKey(key)
					.build()
					.parseClaimsJws(token);
			
			System.out.println();
			System.out.println("jwtparser : " + claims.getBody().getSubject());
			System.out.println();
			
			return claims.getBody().getSubject();
		}catch (JwtException ex) {
			
		}
		
		return "";
	}
	
	//토큰 유효성 검사
	public static boolean validateToken(String token) {
//		try {
//			Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token);
//			return true;
//		}catch() {
//			
//		}catch() {
//			
//		}catch() {
//			
//		}catch() {
//			
//		}catch() {
//			
//		}catch() {
//			
//		}
		return false;
	}
}
