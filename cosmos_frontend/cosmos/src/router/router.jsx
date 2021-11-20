import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "../view/SingnPage.jsx"

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="login" element={<Login />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);