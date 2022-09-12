import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));

const QUIZ = [
    {
        question: "The country of Pizza",
        alternative1: "Norway",
        alternative2: "Italy",
        alternative3: "Spain",
        alternative4: "Germany",
        rightAnswer: 2
    },
    {
        question: "The country of Sushi",
        alternative1: "Finland",
        alternative2: "New Zealand",
        alternative3: "Japan",
        alternative4: "China",
        rightAnswer: 3
    },
    {
        question: "The country of Taco",
        alternative1: "Spain",
        alternative2: "Portugal",
        alternative3: "Chile",
        alternative4: "Mexico",
        rightAnswer: 4
    },
    {
        question: "The country of Smalahove",
        alternative1: "Norway",
        alternative2: "Sweden",
        alternative3: "Denmark",
        alternative4: "Finland",
        rightAnswer: 1,
    }
];

function FrontPage() {
    return (
        <>
            <h1> Super hard Quiz </h1>
            <ul>
                <li><Link to={"/quiz"}> Go to Quiz </Link></li>
                <li><Link to={"/quiz/new"}> Write your own Quiz</Link></li>
            </ul>
        </>
    );
}


function QuizApplication() {
    return (
            <Routes>
                <Route path={"/"} element={<div> Quiz is here </div>}></Route>
                <Route path={"/new"} element={<div> Add quiz here </div>}></Route>
            </Routes>
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



