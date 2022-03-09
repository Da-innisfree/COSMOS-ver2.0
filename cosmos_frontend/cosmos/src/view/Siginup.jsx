import React, { useState, useEffect } from "react";
import Authapi from '../apis/Auth.js';

import '../style/comm.scss';
import '../style/view/signup.scss';

function WarningBanner(props) {
    if (props.warn || props.warn === null) {
      return null;
    }
  
    if(props.target === 'email'){
        return (
          <div className="warning">
            이메일 형식이 잘못되었습니다.
          </div>
        );
    }
    else if(props.target === 'password') {
        return (
            <div className="warning">
              비밀번호가 일치 하지 않습니다.
            </div>
          );
    }
}

function Timer(props) {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    
    const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
                clearInterval(countdown);
            } else {
                setMinutes(parseInt(minutes) - 1);
                setSeconds(59);
            }
        }
    }, 1000);

    // useEffect(() => {
    //     return () => clearInterval(countdown);
    // }, [minutes, seconds]);

    if (props.warn || props.warn === null) {
        return null;
    }

    else if(props.target === 'authphone'){
        return (
            <div className="auth_timer">
                남은시간 : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}  
            </div>
        )
    }
}


function SignUp() {

    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        name: '',
        phone: '',
    });

    const [validation, setValidation] = useState({
        emailRegExpCheck: null,
        emailCheck: false,
        passwordCheck: null,
    });

    const [authTime, setAuthTime] = useState(null)

    //newUser정보 저장
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        
        if(name === 'email'){
            if((/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
                setValidation({
                    ...validation,
                    emailRegExpCheck: true,
                });
            }else {
                setValidation({
                    ...validation,
                    emailRegExpCheck: false,
                });
            }
        }

        if(name === 'passwordCheck') {
            if(newUser.password === value){
                setValidation({
                    ...validation,
                    passwordCheck: true,
                });
                return
            }
            else {
                setValidation({
                    ...validation,
                    passwordCheck: false,
                });
                return
            }
        }
        
        setNewUser({
          ...newUser, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    //이메일 중복 확인
    const checkEmail = () => {
        if(newUser.email === ''){
            console.log('이메일을 입력 하세요');
        }else {
            Authapi.checkId(newUser.email).then(res => {
                if(res && res.data){
                    console.log(res.data)
                    setValidation({
                        ...validation,
                        emailCheck: res.data,
                    });
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const phoneAuth = () => {
        if(!newUser.phone){
            console.log('핸드폰 번호 입력해라')
        }else {
            console.log('문자 전송')
            setAuthTime(false);
            Authapi.authPhone(newUser.phone).then();
        }

    }

    //회원가입
    const saveUser = () => {
        if(!validation.emailRegExpCheck){
            console.log('이메일 형식이 아니다');
            return;
        }
        if(!(validation.emailCheck && validation.emailRegExpCheck)){
            console.log('이메일 중복 체크');
            return;
        }
        if(!validation.passwordCheck){
            console.log('비밀번호 체크');
            return;
        }

        if(!newUser.name){
            console.log('이름 입력해라');
            return;
        }

        if(!newUser.phone){
            console.log('핸드폰 번호 입력해라');
            return;
        }
        Authapi.signUp(newUser).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="signup_warp">
                <div className="input_box">
                    <label>아이디</label>
                    <input name="email" type="text" onChange={onChange}/>
                    <div className="input_sub_btn" onClick={checkEmail}>중복확인</div>
                </div>
                <WarningBanner warn={validation.emailRegExpCheck} target="email"/>
                <div className="input_box">
                    <label>비밀번호</label>
                    <input name="password" type="password" onChange={onChange}/>
                </div>
                <div className="input_box">
                    <label>비밀번호 확인</label>
                    <input name="passwordCheck" type="password" onChange={onChange}/>
                </div>
                <WarningBanner warn={validation.passwordCheck} target="password"/>
                <div className="input_box">
                    <label>이름</label>
                    <input name="name" type="text" onChange={onChange}/>
                </div>
                <div className="input_box">
                    <label>핸드폰</label>
                    <input name="phone" type="text" onChange={onChange}/>
                    <div className="input_sub_btn" onClick={phoneAuth}>인증번호 전송</div>
                </div>
                <div className="input_box">
                    <label></label>
                    <input type="text" placeholder="인증 번호 입력"/>
                </div>
                {/* <Timer warn={authTime} target="authphone"/> */}
            </div>
            <div className="btn_area">
                <div className="btn reversal" onClick={saveUser}>
                    회원가입
                </div>
                {/* <div className="btn reversal" onClick={this.adminGetTest}>
                    admin get test
                </div>
                <div className="btn reversal" onClick={this.getTest}>
                    get test
                </div> */}
            </div>
        </div>
    )
}

export default SignUp;