package com.shopping.cosmos.config;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shopping.cosmos.mapper.UserMapper;
import com.shopping.cosmos.vo.UserVO;

import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Service
@RequiredArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {

//	@Setter(onMethod_= {@Autowired})
//	@Autowired
	private final UserMapper usermapper;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Optional<UserVO> user = usermapper.findById(username);		
		
		System.out.println("UserDetailServeiceImple : " + user.get().getAuthorities());

		return (UserDetails)user.get();
	}

}
