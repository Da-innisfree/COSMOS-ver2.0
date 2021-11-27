import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../view/Main.jsx';
import List from '../view/ProductList.jsx';
import Product from '../view/Product.jsx'
import SignIn from '../view/SignIn.jsx';
import SignUp from '../view/Siginup.jsx'

const AppRouter = () => {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/list" element={<List/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;