import React from 'react'; 

import '../style/comm.scss'
import '../style/view/main.scss'

function main() { 
    
    return ( 
        <div className="main">
            <div className="area_top">
                <div className="content">
                    <h1 className="main_title">Winter arrivals</h1>
                    <span className="sub_title">모던하게 재해석한 최신 겨울 컬렉션</span>
                    <div className="btn_area">
                        <div className="btn">여성 신상품</div>
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
    
export default main;