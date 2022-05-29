import React from 'react'; 
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/account/Account.js'

import '../style/comm.scss'
import '../style/view/main.scss'

function Main() { 

    const count = useSelector((state) => state.counter.value)
    const token = useSelector((state) => state.counter.token)
    const dispatch = useDispatch()
    
    return ( 
        <div className="main">
            <div className='tmpredux_test'>
                <div>
                    <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    >
                    Increment
                    </button>
                    <span>{count}</span>
                    <span>{token}</span>
                    <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    >
                    Decrement
                    </button>
                </div>
            </div>
            <div className="area_top">
                <div className="content">
                    <h1 className="main_title">Winter arrivals</h1>
                    <span className="sub_title">모던하게 재해석한 최신 겨울 컬렉션</span>
                    <div className="btn_area">
                        <Link to="/productlist/W/니트웨어">
                            <div className="btn">여성 신상품</div>
                        </Link>
                        <div className="btn">남성 신상품</div>
                    </div>
                </div>
            </div>
            <div className="area_middle">
                <div className="content">
                    <h1 className="main_title">THERE’S MORE TO EXPLORE</h1>
                    <div className="btn_area">
                        <div className="btn reversal">Women's Collection</div>
                        <div className="btn reversal">Men's Collection</div>
                        <div className="btn reversal">Women's Most Popular</div>
                        <div className="btn reversal">Men's Most Popular</div>
                    </div>
                </div>
            </div>
            <div className="area_bottom">
                <div className="content">
                    <h1 className="main_title">The forever coat</h1>
                    <span className="sub_title">새로운 시즌에 필요한 클래식 아이템</span>
                    <div className="btn_area">
                        <div className="btn">여성 아우터웨어</div>
                        <div className="btn">남성 아우터웨어</div>
                    </div>
                </div>
            </div>
        </div>
    ); 
} 
    
export default Main;