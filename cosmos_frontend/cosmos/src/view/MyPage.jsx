import React, { useState } from 'react'; 

import '../style/comm.scss';
import '../style/view/mypage.scss'

import MemberInfo from '../component/member/MemberInfo.jsx';
import OrderInfo from '../component/member/OrderInfo.jsx';
import ShoppingAddress from '../component/member/ShoppingAddress.jsx';

// function SelectPage(props) {


//     // if(props.select === 1){
//     //     return <MemberInfo/>
            
//     // }
//     // else if(props.select === 2){
//     //     return <OrderInfo/>
//     // }
//     // else if(props.select === 3){
//     //     return <ShoppingAddress/>
//     // }
//     // else if(props.select === 4){
//     //     return <div>배송지 관리</div>
//     // }
//     // else if(props.select === 5){
//     //     return <div>예치금</div>
//     // }

//     return (
//         <>
//             {props.select === 1 && <MemberInfo/>}
//             {props.select === 2 && <OrderInfo/>}
//             {props.select === 3 && <ShoppingAddress/>}
//             {props.select === 4 && <div>배송지 관리</div>}
//             {props.select === 5 && <div>예치금</div>}
//         </>
//     )

// }

function MyPage() { 

    const [selected, select] = useState(1);
    
    return (
        <div className='mypage_main'>
            <div className='mypage_nav'>
                <h1>My COSMOS</h1>
                <div className='nav_warp'>
                    <label onClick={ () => {select(1)} }>회원정보</label>
                    <label onClick={ () => {select(2)} }>주문/배송</label>
                    <label onClick={ () => {select(3)} }>배송지관리</label>
                    <label onClick={ () => {select(4)} }>예치금</label>
                    <label onClick={ () => {select(5)} }>영수증/세금계산서</label>
                </div>
            </div>
            <div className='mypage_content'>
                <div className="member_info">
                    {/* <SelectPage select={selected}/> */}
                    {selected === 1 && <MemberInfo/>}
                    {selected === 2 && <OrderInfo/>}
                    {selected === 3 && <ShoppingAddress/>}
                    {selected === 4 && <div>배송지 관리</div>}
                    {selected === 5 && <div>예치금</div>}
                </div>
            </div>
        </div>      
    );
} 

export default MyPage;
