import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../view/Main.jsx';
import List from '../view/ProductList.jsx';
import SignIn from '../view/SignIn.jsx';

const AppRouter = () => {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/list" element={<List/>} />
                    <Route path="/signIn" element={<SignIn/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;