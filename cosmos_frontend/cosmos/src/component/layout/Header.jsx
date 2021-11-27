import React from 'react'; 

import '../../style/component/layout/Header.scss'

function Header() { 
    
    return ( 
        <header className='header'> 
            <div className="header_left">
                <div className="cosmos_icon"></div>
                <ul className="nav">
                    <li>New Arrivals</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Magazine</li>
                    <li>Sustainability</li>
                </ul>
            </div>
            <div className="header_right">
                <div>검색</div>
                <div>배송국가</div>
                <a href="/signIn">로그인</a>
            </div>
        </header> 
    ); 
} 
    
export default Header;
