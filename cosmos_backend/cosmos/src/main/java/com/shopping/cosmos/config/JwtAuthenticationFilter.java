package com.shopping.cosmos.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		//헤더에서 토큰 
		String requestTokenHeader = request.getHeader("Authorization");
		
		if(requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
			System.out.println();
			System.out.println("jwt필터 : " + requestTokenHeader);
			try {
				String userId = JwtTokenProvider.getUserIdFromJWT(requestTokenHeader.substring("Bearer ".length()));
				System.out.println("jwt필터 user id: " + userId);
			}catch(IllegalAccessError e) {
				System.out.println("Unable to get JWT Token");
			}catch(ExpiredJwtException e) {
				System.out.println("JWT Token has expired");
			}
		}else {
			//토큰 없을경
			System.out.println("JWT Token does not begin with Bearer String");
			request.setAttribute("unauthorization", "401 인증키 없음");
		}
		
		filterChain.doFilter(request, response);
	}
	
}
