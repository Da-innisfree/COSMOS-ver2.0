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
		.antMatchers("/user/**").hasRole("USER")  //?????? ????????? ??????
		.antMatchers("/admin/**").hasRole("ADMIN") //.hasAuthority("ROLE_ADMIN") //?????? ????????? ??????
		.anyRequest().permitAll()    //.authenticated() 
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) //???????????? ?????? ?????????
		.and()
		.formLogin().disable() //form?????? ????????? ?????????
		.addFilterBefore(this.jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); //???????????? 
	}
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		
		configuration.setAllowedOrigins(Arrays.asList(new String[] {"*"})); //* addAllowedOrigin() : ????????? URL
        configuration.setAllowedHeaders(ALLOWED_HEADERS); //* addAllowedHeader() : ????????? Header
        configuration.setAllowedMethods(ALLOWED_METHODS); // * addAllowedMethod() : ????????? Http Method
        configuration.setAllowCredentials(false);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
	}
	
	public void configure(WebSecurity web) throws Exception {
//		web.ignoring().requestMatchers(new RequestMatcher[] { PathRequest.toStaticResources().atCommonLocations() });
		//??? ????????? ?????? Spring Security?????? ?????? ????????? ?????? ???????????? ??????????????????.
		web.ignoring().antMatchers("/css/**", "/js/**", "/img/**", "/lib/**");
	}
	
}
