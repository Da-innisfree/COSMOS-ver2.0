import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom';

import Modal from "../common/Modal.jsx";

import '../../style/component/layout/Header.scss'

function Header() { 

    const [modalOpen, setModalOpen] = useState(false);

    let [login, setLogin] = useState(false);
    
    const openModal= () =>{
        setModalOpen(true);
    }

    const closeModal= ()=>{
        setModalOpen(false);
        loginCheck();
    }

    //수정해라
    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setLogin(false);
        console.log('새로고침 합니다')
    }
    
    //수정해라
    const loginCheck = () => {
        if(localStorage.getItem('token') && localStorage.getItem('userId')){
            setLogin(true);
            console.log('로그인', login)
        }
    }
    
    
    return ( 
        <header className='header'> 
            <div className="header_left">
                <a href="/">
                    <div className="cosmos_icon" ></div>
                </a>
                <ul className="main_menu">
                    <li className="item">
                        <div className="item_name">New Arrivals</div>
                        <div className="item_contents">
                            <div className="content_menu">
                                <ul>
                                    <li>Women: New Arrivals</li>
                                    <li>Women: New</li>
                                    <li>Accessories</li>
                                    <li>Men: New Arrivals</li>
                                    <li>Men: New</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_text">

                        </div>
                    </li>
                    <li className="item">
                        <div className="item_name">Women</div>
                        <div className="item_contents">
                            <div className="content_menu">
                                <ul>
                                    <li>New Arrivals</li>
                                    <li>니트웨어</li>
                                    <li>가디건</li>
                                    <li>캐시미어</li>
                                    <li>아우터웨어</li>
                                    <li>드레스</li>
                                    <li>트라우저</li>
                                    <li>진</li>
                                    <li>셔츠</li>
                                    <li>탑</li>
                                    <li>티셔츠</li>
                                    <li>스커트</li>
                                    <li>라운지웨어</li>
                                    <li>기프트 컬렉션</li>
                                </ul>
                                <ul>
                                    <li>New Accessories</li>
                                    <li>슈즈</li>
                                    <li>가방  지갑</li>
                                    <li>모자, 스카프 장갑</li>
                                    <li>주얼리</li>
                                    <li>언더웨어</li>
                                    <li>양말</li>
                                    <li>스임웨어</li>
                                </ul>
                                <ul>
                                    <li>Teddy Collection</li>
                                    <li>Online Exclusive</li>
                                    <li>Most Popular</li>
                                    <li>COSMOS by you</li>
                                    <li>View All</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="item_name">Men</div>
                        <div className="item_contents">
                            <div className="content_menu">
                                <ul>
                                    <li>New Arrivals</li>
                                    <li>니트웨어</li>
                                    <li>가디건</li>
                                    <li>캐시미어</li>
                                    <li>아우터웨어</li>
                                    <li>트라우저</li>
                                    <li>진</li>
                                    <li>셔츠</li>
                                    <li>스웻셔츠 후디</li>
                                    <li>티셔츠</li>
                                    <li>라운지웨어</li>
                                    <li>기프트 컬렉션</li>
                                </ul>
                                <ul>
                                    <li>New Accessories</li>
                                    <li>슈즈</li>
                                    <li>가방  지갑</li>
                                    <li>모자, 스카프</li>
                                    <li>언더웨어</li>
                                    <li>벨트</li>
                                    <li>양말</li>
                                    <li>스임웨어</li>
                                </ul>
                                <ul>
                                    <li>Online Exclusive</li>
                                    <li>Most Popular</li>
                                    <li>COSMOS by you</li>
                                    <li>View All</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="item_name">Magazine</div>
                        <div className="item_contents">
                            <div className="content_menu">
                                <ul>
                                    <li>Latest</li>
                                    <li>Stories</li>
                                    <li>People</li>
                                    <li>Places</li>
                                    <li>Things</li>
                                    <li>Autunn Winter 2021</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="item_name">Sustainability</div>
                        <div className="item_contents">
                            <div className="content_menu">
                                <ul>
                                    <li>Our Mission</li>
                                    <li>Product Care</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="header_right">
                <div>검색</div>
                <div>배송국가</div>
                {/* <a href="/signin">로그인</a> */}
                {login && <a href='/mypage'>마이 페이지</a>}
                {!login && <button onClick={openModal}>로그인</button>}
                {login && <button onClick={logOut}>로그아웃</button>}
                <Modal open={modalOpen} close={closeModal} target={'login'}/>
            </div>
        </header> 
    ); 
} 
    
export default Header;
