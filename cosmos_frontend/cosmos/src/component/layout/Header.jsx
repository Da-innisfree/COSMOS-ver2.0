import React from 'react'; 

import '../../style/component/layout/Header.scss'

function Header() { 
    
    return ( 
        <header className='header'> 
            <div className="header_left">
                <a href="/">
                    <div className="cosmos_icon" ></div>
                </a>
                <ul className="nav">
                    <li className="nav_item">
                        <div className="nav_item_name">New Arrivals</div>
                        <div className="nav_item_contents"></div>
                    </li>
                    <li className="nav_item">
                        <div className="nav_item_name">Women</div>
                        <div className="nav_item_contents"></div>
                    </li>
                    <li className="nav_item">
                        <div className="nav_item_name">Men</div>
                        <div className="nav_item_contents"></div>
                    </li>
                    <li className="nav_item">
                        <div className="nav_item_name">Magazine</div>
                        <div className="nav_item_contents"></div>
                    </li>
                    <li className="nav_item">
                        <div className="nav_item_name">Sustainability</div>
                        <div className="nav_item_contents"></div>
                    </li>
                </ul>
            </div>
            <div className="header_right">
                <div>검색</div>
                <div>배송국가</div>
                <a href="/signin">로그인</a>
            </div>
        </header> 
    ); 
} 
    
export default Header;
