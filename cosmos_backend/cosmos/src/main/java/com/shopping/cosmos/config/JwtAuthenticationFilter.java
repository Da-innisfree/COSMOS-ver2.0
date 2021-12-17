package com.shopping.cosmos.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		//헤더에서 토큰 
		String requestTokenHeader = request.getHeader("Authorization");
		
		if(requestTokenHeader != null) {
			System.out.println();
			System.out.println("jwt필터 : " + requestTokenHeader);
			String userId = JwtTokenProvider.getUserIdFromJWT(requestTokenHeader);
			System.out.println("jwt필터 : " + userId);
		}else {
			//토큰 없을경우
		}
		
		filterChain.doFilter(request, response);
	}
	
}
