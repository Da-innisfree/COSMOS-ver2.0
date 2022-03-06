import React, { useEffect, useState } from 'react'; 

import useraApi from '../../apis/User.js';

import '../../style/component/member/memberinfo.scss'
import '../../style/comm.scss'
import { Component } from 'react/cjs/react.development';


function MemberPasswordCheck(props) {
    let test = false

    let userId = localStorage.getItem("userId");

    const [user, setUset] = useState({
        email : '',
        name: '',
        phone: '',
    });

    const [password, setPassword] = useState('');

    useEffect(() => {
        useraApi.getUserInfo(userId).then(res => {
            setUset({
                ...user,
                email : res.data.email,
                name: res.data.name,
                phone: res.data.phone,
            })
        })
        // 여기에 코드를 적자
    }, [userId]);

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const passwordCheck = () => {
        console.log(password);
        useraApi.confirmPassword(password).then(res => {
            console.log(res.data);
            if(res && res.data){
                props.PasswardCheck(!test)
            }
        })
    }

    return (
        <div className='member_info'>
            <div className='user_info'>
                <h3>회원정보변경</h3>
                <div className="text_box">
                    <label>아이디</label>
                    <span>{user.email}</span>
                </div>
                <div className="text_box">
                    <label>이름</label>
                    <span>{user.name}</span>
                </div>
                <div className="text_box">
                    <label>이메일</label>
                    <span>{user.email}</span>
                </div>
                <div className="text_box">
                    <label>휴대폰번호</label>
                    <span>{user.phone}</span>
                </div>
                <div className="input_box">
                    <label>비밀번호</label>
                    <input type="password" value={password} onChange={onChangePassword} />
                </div>
                <div>
                    고객님의 소중한 회원정보를 확인/변경 하기 위해 비밀번호 재확인이 필요합니다.
                </div>
                <div>
                    카카오 로그인 등으로 가입하신 고객님은, 로그아웃 후 '비밀번호 찾기'를 통해 비밀번호 재설정이 필요합니다.
                </div>
                <div className="btn full" onClick={passwordCheck}>확인</div>
            </div>
        </div>
    );
}



class MemeberInfo extends Component {

    constructor(props) {
        super(props);
        this.state = { passwordCheck: false }
        this.handlePasswardCheck = this.handlePasswardCheck.bind(this);
    }

    handlePasswardCheck(passCheck){
        this.setState({ passwordCheck: passCheck })
    }
    
    render() {
        const passCheck = this.state.passwordCheck;

        if(passCheck){
            return (
                <div>
                    비밀번호 확인 완료
                </div>
            );
        }else {
            return (
              <div>
                  <MemberPasswordCheck PasswardCheck={this.handlePasswardCheck}/>
              </div>
            );
        }

    }
}
  
export default MemeberInfo;