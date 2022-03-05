package com.shopping.cosmos.config;

import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtTokenProvider {
	
	private static final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
	private static final String base64Key = Encoders.BASE64.encode(key.getEncoded());
	
	//토큰 유효시간
	private static final int JWT_EXPIRATION_MS = 60480000;
	
	//토큰 생성
	public static String generateToken(String username, Collection<? extends GrantedAuthority> roles) {

		Claims claims = Jwts.claims().setSubject(username);
		claims.put("roles", roles); // 정보는 key / value 쌍으로 저장된다.
		
		return Jwts.builder()
				.setClaims(claims)//정보 저장
				.setIssuedAt(new Date(System.currentTimeMillis()))  //토큰 시작시간
				.setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION_MS))  //만료시간
				.signWith(key)  //서명 키 알고리즘
				.compact();
	}
	
	//토근 아이디 추출
	public static String getUserIdFromJWT(String token) {
//		Jws<Claims> claims;
//		System.out.println("유저 아이디: " + token);
//		try {
//			claims = Jwts.parserBuilder()
//					.setSigningKey(key)
//					.build()
//					.parseClaimsJws(token);a
//			
//			System.out.println();
//			System.out.println("jwtparser : " + claims.getBody().getSubject());
//			System.out.println("jwtparser : " + claims.getBody().get("roles"));
//			System.out.println();
//			
//			return claims.getBody().getSubject();
//		}catch (JwtException ex) {
//			System.out.println("토큰이 이상한데....");
//		}
//		return null;
		System.out.println("key?..........." + key);
		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
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
