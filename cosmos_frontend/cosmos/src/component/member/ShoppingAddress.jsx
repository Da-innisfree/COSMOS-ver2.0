import React, { useEffect, useState } from 'react'; 

import useraApi from '../../apis/User.js';

import Modal from "../common/Modal.jsx";

import '../../style/comm.scss'
import '../../style/component/member/shoppingaddress.scss'

//비밀번호 체크
function ShoppingAddressAuth(props) {

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
                props.PasswardCheck(res.data);
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
                <div>비밀번호</div>
                <div className='input_area'>
                    <input type="password" value={password} onChange={onChangePassword} onKeyUp={e => { if(e.key === 'Enter') { passwordCheck() } }}/>
                </div>
            </div>
            <div className="btn full" onClick={passwordCheck}>확인</div>
        </div>
      </div>
    );
}

//새로 입력
//sql INSERT INTO tb_user_address(user_id, address, address_detail, address_postcode, address_name, address_phone) VALUE(22, '경기 성남시 분당구 판교역로 235', '601호', '신사동', '유저', '01012341234')
function NewInputAddress(porps) {
    const setToggle = porps.setToggle

    const [modalOpen, setModalOpen] = useState(false);

    const [addressInfo, setAddressInfo] = useState({
        userId: localStorage.getItem('userId'),
        userName: '',
        phone: '',
    });
    const [address, setAddress] = useState({
        fullAddress : '',
        zonecode: '',
        addressDetail : '',
    });

    const openModal= () =>{
        setModalOpen(true);
    }

    const closeModal= ()=>{
        setModalOpen(false);
    }

    const saveAddress = () => {
        const fullAddressInfo = Object.assign(addressInfo, address);

        useraApi.saveAddress(fullAddressInfo).then(res => {
            if(res && res.data) {
                console.log(res.data);
                setToggle(false)
            }
        })
    }


    return (
        <div>
            <div className='address_input_area'>
                <div className="input_box">
                    <div>이름</div>
                    <div className='input_area'>
                        <input type="text" name='text' value={addressInfo.userName} onChange={e => setAddressInfo({...addressInfo, userName: e.target.value})}/>
                    </div>
                </div>
                <div className="input_box">
                    <div>휴대폰번호</div>
                    <div className='input_area'>
                        <input type="text" name='text' value={addressInfo.phone} onChange={e => setAddressInfo({...addressInfo, phone: e.target.value})}/>
                    </div>
                </div>
                <div>"-" 없이 숫자만 입력해 주세요</div>
                <div className="input_box">
                    <div>배송지주소</div>
                    <div className='input_area'>
                        <input type="text" name='text' value={address.zonecode} disabled/>
                        <div className='input_sub_btn' onClick={openModal}>찾기</div>
                    </div>
                </div>
                {/* 이부분 css 수정*/}
                <div className="input_box">
                    <div className='input_area'>
                        <input type="text" name='text' value={address.fullAddress} disabled/>
                    </div>
                </div>
                <div className="input_box">
                    <div className='input_area'>
                        <input type="text" name='text' value={address.addressDetail} onChange={ e => setAddress({...address, addressDetail: e.target.value})}/>
                    </div>
                </div>
                {/* 이부분 css 수정*/}
            </div>
            <div className='btn_area'>
                <div className="btn line" onClick={() => setToggle(false)}>취소</div>    
                <div className="btn line" onClick={saveAddress}>확인</div>    
            </div>
            <Modal open={modalOpen} close={closeModal} target={'address'} address={address} setAddress={setAddress}/>
        </div>
    )
}

//주소 입력 수정
function ShoppingAddress() {
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [correction, setCorrection] = useState(null);
    const [addressInfo, setAddressInfo] = useState([]);
  
    const [toggle , setToggle] = useState(false);

    const passwordAuth = (passCheck) => {
        console.log('adls',passCheck);
        setPasswordCheck(passCheck);
    }

    let userId = localStorage.getItem("userId");

    useEffect(() => {
        if(passwordCheck){
            useraApi.getAddress(userId).then(res => {
                // setAddressInfo(res.data);
                if(res && res.data){
                    console.log(res.data);
                    setAddressInfo(res.data);
                }
            });
            console.log(addressInfo);
        }
        // 여기에 코드를 적자
    }, [passwordCheck, toggle]);
    
    return (
        <div>
            {!passwordCheck && <ShoppingAddressAuth PasswardCheck={passwordAuth}/>}
            {passwordCheck && <div>
                <h3>배송지 정보</h3>
                <div className='input_info_cho'>
                    {/* <input id='info' type="radio"/><label htmlFor='info'>배송지 목록</label>
                    <input id='input' type="radio"/><label htmlFor='input'>새로 입력</label> */}
                    <span onClick={() => setToggle(false)}>배송지 목록</span>
                    <span onClick={() => setToggle(true)}>새로 입력</span>
                </div>
                {/* 배송목록 컴포넌트화 할ㄲㅏ? */}
                {!toggle && addressInfo.length > 0 && <div>
                    <div className='address_input_area'>
                        { addressInfo.map((address, key) => {
                                return <div key={key}>
                                    {correction === null && <>
                                        <span>{address.userName}</span>
                                        <span onClick={() => setCorrection(key)}>수정</span>    
                                        <span>삭제</span>
                                        <div>{address.phone}</div>    
                                        <div>{address.fullAddress} {address.addressDetail}</div>
                                    </>}
                                    {correction === key && <NewInputAddress/>}    
                                </div>
                            })
                        }
                    </div>
                </div>}
                {/* 새로 입력 */}
                {toggle && <NewInputAddress setToggle={setToggle}/>}
            </div>}
        </div>
    )
}

export default ShoppingAddress;