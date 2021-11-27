import React from 'react'; 

import '../style/comm.scss';
import '../style/view/product.scss'

function product() { 
    
    return (
        <div className="product_warp">
            <div className="porduct_left">
                <div className="sub_image_area">
                    <div className="sub_img">서브사진</div>
                    <div className="sub_img">서브사진</div>
                    <div className="sub_img">서브사진</div>
                </div>
                <div className="main_image_area">
                    <div className="main_img">메인사진</div>
                    <div className="main_img">메인사진</div>
                    <div className="main_img">메인사진</div>
                </div>
            </div>
            <div className="product_right">
                <div className="product_info_arae">
                    <div className="porduct_info_title">
                        <span>new</span>
                        <h1>상품명</h1>
                        <span>10000000원</span>
                    </div>
                    <div className="product_input_area">
                        <div className="input_box">
                            <label>COLOUR</label>
                            <select>
                                <option value="">색상</option>
                                <option value="">색상</option>
                                <option value="">색상</option>
                            </select>
                        </div>
                        <div className="input_box">
                            <label>SIZE</label>
                            <div className="btn_area">
                                <input type="radio" /><label>s</label>
                                <input type="radio" /><label>m</label>
                                <input type="radio" /><label>l</label>
                                <input type="radio" /><label>xl</label>
                            </div>
                        </div>
                        
                        <div className="btn">
                            장바구니
                        </div>
                    </div>
                    <div className="product_info_sub">
                        <div className="btn_area">
                            <input type="radio" /><label>상품 설명</label>
                            <input type="radio" /><label>배송 반품</label>
                            <input type="radio" /><label>상세 정보</label>
                        </div>
                        <div className="text">

                        </div>

                    </div>
                </div>

            </div>
        </div>   
    );
} 

export default product;
