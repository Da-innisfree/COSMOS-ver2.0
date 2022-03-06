import React, { useEffect, useState } from 'react'; 

import useraApi from '../../apis/User.js';

import '../../style/comm.scss'
import '../../style/component/member/shoppingaddress.scss'

function ShoppingAddress() {

    let userId = localStorage.getItem("userId");

    const [user, setUset] = useState({
      email : '',
    });

    const [password, setPassword] = useState('');

    useEffect(() => {
        useraApi.getUserInfo(userId).then(res => {
            setUset({
                ...user,
                email : res.data.email,
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
                console.log(res.data)
                // props.PasswardCheck(!test)
            }
        })
    }

    
    return (
      <div className='address_info'>
        <div className='user_address_info'>
            <h3>회원정보확인</h3>
            <div>
              고객님의 소중한 개인정보를 보호하기 위해 비밀번호를 다시 확인합니다.
            </div>
            <div>
              비밀번호가 타인에게 노출되지 않도록 항상 주의해 주세요.
            </div>
            <div className="text_box">
                <label>아이디</label>
                <span>{user.email}</span>
            </div>
            <div className="input_box">
                <label>비밀번호</label>
                <input type="password" value={password} onChange={onChangePassword} />
            </div>
            <div className="btn full" onClick={passwordCheck}>확인</div>
        </div>
      </div>
    );
}
  
export default ShoppingAddress;