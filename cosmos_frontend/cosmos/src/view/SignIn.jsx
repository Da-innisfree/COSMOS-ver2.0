import React, { useState } from 'react'; 
// import { Link } from "react-router-dom";

import Authapi from '../apis/Auth.js';

import '../style/view/signin.scss'
import '../style/comm.scss';

function Signin() { 

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        e.persist();
        const { name , value } = e.target;
        setUser({...user,
            [name]: value
        });
    }

    const onCheckEnter = (e) =>{
        if(e.key === 'Enter'){
            login();
        }
    }

    const login = () => {
        if(user.email && user.password){
            console.log('login', user);
            Authapi.signIn(user).then(res => {
                console.log(res);
                localStorage.setItem('token', res.data);
            }).catch(err => {
                console.log(err);
            })
        } 
        else {
            console.log('아니야')
        }
    }
    
    return (
        <div>
            <div className="top_content">
                <h1>로그인</h1>
                {/* <Link to="/signup">회원가입</Link> */}
                <a href="/signup">회원가입</a>
            </div>
            <div className="middle_content" onChange={onCheckEnter}>
                <div className="input_box">
                    <label>아이디 또는 이메일</label>
                    <input type="text" name='email' value={user.email} onChange={handleInput}/>
                </div>
                <div className="input_box">
                    <label>비밀번호</label>
                    <input type="password" name='password' value={user.password} onChange={handleInput}  />
                </div>  
                <div className="btn_area">
                    <div className='btn full' onClick={login}>로그인</div>
                </div>
                <div className='find_id_pw'>
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
            </div>
            <div className='bottom_content'>
                <div className='bottom_title'>SNS 계정을 연동해 간편하게 로그인해보세요</div>
                <div className="btn_area">
                    <div className='btn reversal'>카카오톡</div>
                    <div className='btn reversal'>네이버</div>
                    <div className='btn reversal'>구글</div>
                    <div className='btn reversal'>페이스북</div>
                </div>
                <div className='bottom_info'>
                    COS 온라인 스토어는 더현대닷컴이 운영·제공하는 사이트로 기존 회원은 더현대닷컴 아이디와 비밀번호로 바로 이용 가능합니다.
                </div>
            </div>
        </div>   
    );
} 

export default Signin;
