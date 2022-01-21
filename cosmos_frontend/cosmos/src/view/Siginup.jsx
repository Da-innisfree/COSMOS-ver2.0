import React from "react";
import { Component } from "react";
import Authapi from '../apis/Auth.js';

import '../style/comm.scss';
import '../style/view/signup.scss';

function WarningBanner(props) {
    if (props.warn || props.warn === null) {
      return null;
    }
  
    return (
      <div className="warning">
        비밀번호가 일치 하지 않습니다.
      </div>
    );
}


class signup extends Component  {
    constructor() {
        super()
        this.state = {
            email:'',
            password: '',
            name:'',
            phone:'',
            emailCheck: null,
            passwordCheck: null
        };

        this.hadndleId = this.hadndleId.bind(this);
        this.hadndlePassword = this.hadndlePassword.bind(this);
        this.hadndlePasswordCheck = this.hadndlePasswordCheck.bind(this);
        this.hadndlename = this.hadndlename.bind(this);
        this.hadndlePhone = this.hadndlePhone.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hadndleId(event) {
        if((/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))){
            this.setState(
                {
                    email: event.target.value,
                    emailCheck: true
                }
            );
        }
        else {
            this.setState(
                {
                    emailCheck: false
                }
            );
        }
    }

    hadndlePassword(event) {
        this.setState(
            {
                password: event.target.value,
            }
        );
    }

    hadndlePasswordCheck(event){
        if(this.state.password === event.target.value)
        this.setState(
            {
                passwordCheck: true,
            }
        );
        else {
            this.setState({
                passwordCheck: false,
            })
        }
    }

    hadndlename(event) {
        this.setState(
            {
                name: event.target.value,
            }
        );

    }

    hadndlePhone(event) {
        this.setState(
            {
                phone: event.target.value,
            }
        );
    }
    
    handleSubmit(event) {
        console.log(this.state)
        // console.log(this.state.idCheck)
        delete this.state.emailCheck
        delete this.state.passwordCheck

        event.preventDefault();

        Authapi.signUp(this.state).then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    render() {
        return (
            <div>
                <div className="signup_warp">
                    <div className="input_box">
                        <label>아이디</label>
                        <input type="text" defaultValue={this.state.email} onChange={this.hadndleId}/>
                    </div>
                    <div className="btn reversal">중복확인</div>
                    <WarningBanner warn={this.state.emailCheck} />
                    <div className="input_box">
                        <label>비밀번호</label>
                        <input type="text" defaultValue={this.state.password} onChange={this.hadndlePassword}/>
                    </div>
                    <div className="input_box">
                        <label>비밀번호 확인</label>
                        <input type="text" defaultValue={this.state.passwordCheck} onChange={this.hadndlePasswordCheck}/>
                    </div>
                    <WarningBanner warn={this.state.passwordCheck} />
                    <div className="input_box">
                        <label>이름</label>
                        <input type="text" defaultValue={this.state.name} onChange={this.hadndlename}/>
                    </div>
                    <div className="input_box">
                        <label>핸드폰</label>
                        <input type="text" defaultValue={this.state.phone} onChange={this.hadndlePhone}/>
                    </div>
                    <div className="input_box">
                        <label></label>
                        <input type="text" placeholder="인증 번호 입력"/>
                    </div>
                </div>
                <div className="btn_area">
                   <div className="btn reversal" onClick={this.handleSubmit}>
                       회원가입
                   </div>
                </div>

                
            </div>
        );
    }

}

export default signup;