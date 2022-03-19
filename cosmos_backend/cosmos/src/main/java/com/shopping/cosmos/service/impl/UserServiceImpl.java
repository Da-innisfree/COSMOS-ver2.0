package com.shopping.cosmos.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.shopping.cosmos.mapper.UserMapper;
import com.shopping.cosmos.service.UserService;
import com.shopping.cosmos.vo.AddressInfoVO;
import com.shopping.cosmos.vo.UserVO;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private final PasswordEncoder passwordEncoder = null;
	
	@Autowired
	UserMapper usermapper;
	
	@Autowired
	SmsServiceImpl smsServiceImpl;

	//로그인
	@Override
	public Optional<UserVO> login(String email, String password) {
		System.out.println("servicelogin: " + email +" " +  password);
		
		Optional<UserVO> user = usermapper.findByEmail(email);  //err 처리
		//유저 객체 널 체크 여기서
		if(!passwordEncoder.matches(password, user.get().getPassword())) {
			System.out.println("비밀번호가 다르다"); //err 처리
		}
		
		return user;
	}

	
	//회원가입
	@Override
	public void insertUset(UserVO user) {
		
		String userPasswdEncode = passwordEncoder.encode(user.getPassword());
		
		System.out.println("service test password Encoder" + userPasswdEncode);
		
		user.setPassword(userPasswdEncode);
		
		int a = usermapper.insertUser(user);
		
		System.out.println("?????.........." + a);
	}
	
	@Override
	public Optional<UserVO> checkEmail(String email) {
		return usermapper.findByEmail(email);
	}


	@Override
	public UserVO getUserInfo(String id) {
		Optional<UserVO> user = usermapper.findById(id);
		
		if(user.isPresent()) {
			return user.get();
		}
		
		return null;
	}

	//user비밀번호 확인
	@Override
	public boolean confirmPassword(String password) {
		UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		System.out.println(userDetails.getPassword());
		
		if(!passwordEncoder.matches(password, userDetails.getPassword())) {
			//System.out.println("비밀번호가 다르다"); //err 처리
			return false;
		}
		
		return true;
		
	}
	
	@Override
	public int saveAddress(AddressInfoVO addressInfo) {
		return usermapper.insertAddress(addressInfo);
	}
	
	@Override
	public List<AddressInfoVO> getAddressByUserId(String id) {
		return usermapper.getAddressByUserId(id);
	}

	//문자 인증
	@Override
	public void phoneAuthNum(String phone) {
		int randomNumber = (int)((Math.random()* (9999 - 1000 + 1)) + 1000);//난수 생성

		String authNumberMassage = "[COSMOS] 인증번호 " + randomNumber + " 를 입력하세요.";
		
		try {
			smsServiceImpl.sendSms("01093481890", authNumberMassage);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}


	


}
