import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from "../component/layout/Header.jsx"
import Footer from "../component/layout/Footer.jsx"

import Main from '../view/Main.jsx';
import { PeoducctList , Test} from '../view/ProductList.jsx';
import Product from '../view/Product.jsx'
import SignIn from '../view/SignIn.jsx';
import SignUp from '../view/Siginup.jsx';
import MyPage from '../view/MyPage.jsx';
import NotFound from '../view/NotFound.jsx';

import FireBaseTest from '../view/FireaBaseTest.jsx';


const AppRouter = () => {
    return(
        <BrowserRouter>
                <Header/>
                {/* <div className = "main_warp" style={{padding: '150px 8vw'}}> */}
                <div className = "main_warp">
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/productlist/:gender/:category" element={<PeoducctList/>} />
                        <Route path="/product" element={<Product/>} />
                        <Route path="/signin" element={<SignIn/>} />
                        <Route path="/signup" element={<SignUp/>} />
                        <Route path="/mypage" element={<MyPage/>} />
                        <Route path="/test" element={<Test/>} />

                        <Route path="*" element={<NotFound/>} />

                        <Route path="/firebasetest" element={<FireBaseTest/>} />
                    </Routes>
                </div>
                <Footer/>
        </BrowserRouter>
    );
}

export default AppRouter;