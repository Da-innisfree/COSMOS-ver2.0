package com.shopping.cosmos.config;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shopping.cosmos.mapper.UserMapper;
import com.shopping.cosmos.vo.UserVO;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

	UserMapper usermapper;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		System.out.println("흠......" + username);
		
		Optional<UserVO> user = usermapper.findByEmail(username);		
		
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
		
		if(user.get().getRole() != null) {
			grantedAuthorities.add(new SimpleGrantedAuthority(user.get().getRole()));
		}
//		return (UserDetails) new org.springframework.security.core.userdetails.User(user.get().getEmail(),
//				user.get().getPassword(), grantedAuthorities);
		return (UserDetails) user.get();
	}

}
