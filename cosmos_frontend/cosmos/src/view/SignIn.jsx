import React from 'react'; 

import '../style/view/signin.scss'

function signin() { 
    
    return (
        <div>
            <div className="top_content">
                <h1>로그인</h1>
                <span>회원가입</span>
            </div>
            <div className="middle_content">
                <div className="input_box">
                    <label>아이디 또는 이메일</label>
                    <input type="text" />
                </div>
                <div className="input_box">
                    <label>비밀번호</label>
                    <input type="text" />
                </div>  
                <div className="btn_area">
                    <button>로그인</button>
                </div>
                <div>
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
            </div>
            <div className="bottom_content">

            </div>
        </div>   
    );
} 

export default signin;
