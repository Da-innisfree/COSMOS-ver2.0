import React from 'react'; 
//import MenuIcon from "@material-ui/icons/Menu";

import '../../style/component/layout/Header.scss'

function Header() { 
    
    return ( 
        <header className='header'> 
            <div className="cosmos_icon"></div>
            <ul className="nav">
                <li>New Arrivals</li>
                <li>Women</li>
                <li>Men</li>
                <li>Magazine</li>
                <li>Sustainability</li>
            </ul>
            <div>SIGNIN</div>
            <div>cart</div>
        </header> 
    ); 
} 
    
export default Header;
