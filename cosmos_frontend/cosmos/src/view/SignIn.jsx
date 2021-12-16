import React, { useState } from 'react'; 
// import { Link } from "react-router-dom";

import Authapi from '../apis/Auth.js';

import '../style/view/signin.scss'
import '../style/comm.scss';

function Signin() { 

    const [user, setUser] = useState({
        id: '',
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
        if(user.id && user.password){
            console.log('login', user);
            Authapi.signIn(user).then(res => {
                console.log(res.data);
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
                    <input type="text" name='id' value={user.id} onChange={handleInput}/>
                </div>
                <div className="input_box">
                    <label>비밀번호</label>
                    <input type="password" name='password' value={user.password} onChange={handleInput}  />
                </div>  
                <div className="btn_area">
                    <div className='btn full' onClick={login}>로그인</div>
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

export default Signin;
