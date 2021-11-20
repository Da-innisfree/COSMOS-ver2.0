import React from 'react'; 

import '../style/view/productlist.scss'
import '../style/comm.scss'

function PeoducctList() { 
    
    return ( 
        <div> 
            <div className="product_list_top">
                <div className="choice_content">
                    <h1 className="product_title">상풍 품목</h1>
                    <div className="btn_area">
                        <div className="btn reversal"></div>
                        <div className="btn reversal"></div>
                        <div className="btn reversal"></div>
                        <div className="btn reversal"></div>
                    </div>
                </div>
            </div>
            <div className="product_list_middle">
                <div className="product_search_area">
                    
                </div>
                <div className="product_list_wrap">
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            <label className="product_title">상품명 test</label>
                            <label className="product_price">가격 3자리 , </label>
                            <ul>
                                <li>색상</li>
                            </ul>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_list_bottom">

            </div>
        </div> 
    ); 
} 
    
export default PeoducctList;
