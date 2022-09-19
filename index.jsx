import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {QuizApplication} from "./QuizApplication";

const root = ReactDOM.createRoot(document.getElementById("app"));



function FrontPage() {
    return (
        <>
            <h1> Super hard Quiz </h1>
            <ul>
                <li><Link to={"/quiz"}> Go to Quiz </Link></li>
                <li><Link to={"/quiz/new"}> Make your own Quiz</Link></li>
            </ul>
        </>
    );
}



function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage/>}></Route>
                <Route path={"/quiz/*"} element={<QuizApplication/>}></Route>
                <Route path={"*"} element={<h2> huh? </h2>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

root.render(<Application/>);

