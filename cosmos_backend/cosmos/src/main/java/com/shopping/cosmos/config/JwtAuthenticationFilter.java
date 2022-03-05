package com.shopping.cosmos.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	
	@Autowired
	JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	UserDetailsService userDetailsService;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String jwt = null;
		String username = null;
		//헤더에서 토큰 
		String requestTokenHeader = request.getHeader("Authorization");
		
		if(requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
			jwt = requestTokenHeader.substring("Bearer ".length());
			System.out.println("jwt");
			try {
				username = jwtTokenProvider.getUserIdFromJWT(jwt);
				if(username != null) {
					System.out.println("jwt필터 user id: " + username);
					
				}
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
		
		String ip = request.getHeader("X-FORWARDED-FOR");
		if(ip == null) {
			ip = request.getRemoteAddr();
		}
		if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {			
			UserDetails userDetails = userDetailsService.loadUserByUsername(username);
			
			//userDetails 없는경우 체크
			Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		
		filterChain.doFilter(request, response);
	}
	
}
