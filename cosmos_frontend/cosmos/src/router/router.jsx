import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../view/Main.jsx';
import { PeoducctList , Test} from '../view/ProductList.jsx';
import Product from '../view/Product.jsx'
import SignIn from '../view/SignIn.jsx';
import SignUp from '../view/Siginup.jsx';
import MyPage from '../view/MyPage.jsx';

import FireBaseTest from '../view/FireaBaseTest.jsx';


const AppRouter = () => {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/list" element={<PeoducctList/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/mypage" element={<MyPage/>} />
                    <Route path="/test" element={<Test/>} />

                    <Route path="/firebasetest" element={<FireBaseTest/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;