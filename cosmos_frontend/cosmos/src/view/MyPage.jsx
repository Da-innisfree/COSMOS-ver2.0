import React, { useState } from 'react'; 

import '../style/comm.scss';
import '../style/view/mypage.scss'

import MemberInfo from '../component/member/MemberInfo.jsx';
import ShoppingAddress from '../component/member/ShoppingAddress.jsx';

function SelectPage(props) {

    if(props.select === 1){
        return <MemberInfo/>
    }
    else if(props.select === 3){
        return <ShoppingAddress/>
    }

}

function MyPage() { 
    
    return (
        <div className='mypage_main'>
            <div className='mypage_nav'>
                <h1>My COSMOS</h1>
                <div className='nav_warp'>
                    <label>회원정보</label>
                    <label>주문/배송</label>
                    <label>배송지관리</label>
                    <label>예치금</label>
                    <label>영수증/세금계산서</label>
                </div>
            </div>
            <div className='mypage_content'>
                <div className="member_info">
                    <SelectPage select={1}/>
                </div>
            </div>
        </div>   
    );
} 

export default MyPage;
