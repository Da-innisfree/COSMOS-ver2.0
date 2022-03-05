package com.shopping.cosmos.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	protected static final List<String> ALLOWED_METHODS = Arrays.asList(new String[] { "HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS" });
	protected static final List<String> ALLOWED_HEADERS = Arrays.asList(new String[] { "Authorization", "x-auth-token","X-Requested-With", "Content-Type", "Content-Length", "Cache-Control", "Accept", "Origin" });
	
	@Autowired
	private JwtAuthenticationFilter jwtAuthenticationFilter;
	
	@Autowired
	private UserDetailsService userDetailService;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println("userDetailService.............");
		auth.userDetailsService(this.userDetailService).passwordEncoder(passwordEncoder());	
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.cors().configurationSource(corsConfigurationSource())
		.and()
		.csrf().disable()
		.authorizeRequests()
//		.antMatchers("/**").permitAll()
		.antMatchers("/admin/**").hasRole("ADMIN") //.hasAuthority("ROLE_ADMIN") //유저 권한별 차단
		.anyRequest().permitAll()    //.authenticated() 
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) //토큰활용 세션 비활성
		.and()
		.formLogin().disable() //form기반 로그인 비활성
		.addFilterBefore(this.jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); //로그인시 
	}
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		
		configuration.setAllowedOrigins(Arrays.asList(new String[] {"*"})); //* addAllowedOrigin() : 허용할 URL
        configuration.setAllowedHeaders(ALLOWED_HEADERS); //* addAllowedHeader() : 허용할 Header
        configuration.setAllowedMethods(ALLOWED_METHODS); // * addAllowedMethod() : 허용할 Http Method
        configuration.setAllowCredentials(false);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
	}
	
	public void configure(WebSecurity web) throws Exception {
//		web.ignoring().requestMatchers(new RequestMatcher[] { PathRequest.toStaticResources().atCommonLocations() });
		//위 설정을 통해 Spring Security에서 해당 요청은 인증 대상에서 제외시킵니다.
		web.ignoring().antMatchers("/css/**", "/js/**", "/img/**", "/lib/**");
	}
	
}
