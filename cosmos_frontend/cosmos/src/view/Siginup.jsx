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
        Warning!
      </div>
    );
}


class signup extends Component  {
    constructor() {
        super()
        this.state = {
            id:'',
            password: '',
            name:'',
            phone:'',
            idCheck: null,
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
                    id: event.target.value,
                    idCheck: true
                }
            );
        }
        else {
            this.setState(
                {
                    idCheck: false
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

        event.preventDefault();

        Authapi.signUp(this.state).then(res => {
            console.log('????')
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
                        <input type="text" defaultValue={this.state.id} onChange={this.hadndleId}/>
                    </div>
                    <div>{this.state.idCheck}</div>
                    <WarningBanner warn={this.state.idCheck} />
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