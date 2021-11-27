import React from "react";

import '../style/comm.scss';
import '../style/view/signup.scss';

function signup() {
    return (
        <div>
            <div className="signup_warp">
                <div className="input_box">
                    <label>아이디</label>
                    <input type="text" />
                </div>
                <div className="input_box">
                    <label>비밀번호</label>
                    <input type="text" />
                </div>
                <div className="input_box">
                    <label>비밀번호 확인</label>
                    <input type="text" />
                </div>
                <div className="input_box">
                    <label>이름</label>
                    <input type="text" />
                </div>
                <div className="input_box">
                    <label>핸드폰</label>
                    <input type="text" />
                </div>
                <div className="input_box">
                    <label></label>
                    <input type="text" placeholder="인증 번호 입력"/>
                </div>
            </div>
            <div className="btn_area">
               <div className="btn reversal">
                   회원가입
               </div>
            </div>
        </div>
    );
}

export default signup;