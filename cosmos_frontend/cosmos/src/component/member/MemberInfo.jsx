import React from 'react'; 

import '../../style/component/member/memberinfo.scss'
import '../../style/comm.scss'

function MemeberInfo() {
    
    return (
      <div className='member_info'>
        <div className='user_info'>
            <h3>회원정보변경</h3>
            <div className="text_box">
                <label>아이디</label>
                <span>test@test.com</span>
            </div>
            <div className="text_box">
                <label>이름</label>
                <span>test</span>
            </div>
            <div className="text_box">
                <label>이메일</label>
                <span>test@test.com</span>
            </div>
            <div className="text_box">
                <label>휴대폰번호</label>
                <span>010-1234-1234</span>
            </div>
            <div className="input_box">
                <label>비밀번호</label>
                <input type="password" />
            </div>
            <div>
                고객님의 소중한 회원정보를 확인/변경 하기 위해 비밀번호 재확인이 필요합니다.
            </div>
            <div>
                카카오 로그인 등으로 가입하신 고객님은, 로그아웃 후 '비밀번호 찾기'를 통해 비밀번호 재설정이 필요합니다.
            </div>
            <div className="btn full">확인</div>
        </div>
      </div>
    );
}
  
export default MemeberInfo;