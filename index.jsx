import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {useState} from "react";

const root = ReactDOM.createRoot(document.getElementById("app"));

const QUIZ = [
    {
        question: "The country of Pizza",
        alt1: "Norway",
        alt2: "Italy",
        alt3: "Spain",
        alt4: "Germany",
        rightAnswer: 2
    },
    {
        question: "The country of Sushi",
        alt1: "Finland",
        alt2: "New Zealand",
        alt3: "Japan",
        alt4: "China",
        rightAnswer: 3
    },
    {
        question: "The country of Taco",
        alt1: "Spain",
        alt2: "Portugal",
        alt3: "Chile",
        alt4: "Mexico",
        rightAnswer: 4
    },
    {
        question: "The country of Smalahove",
        alt1: "Norway",
        alt2: "Sweden",
        alt3: "Denmark",
        alt4: "Finland",
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

function QuizCard({quiz}) {
    // const [question, setQuestion] = useState("");
    // const [alt1, setAlt1] = useState("");
    // const [alt2, setAlt2] = useState("");
    // const [alt3, setAlt3] = useState("");
    // const [alt4, setAlt4] = useState("");
    // const [rightAnswer, setRightAnswer] = useState("");

    const {question, alt1, alt2, alt3, alt4, rightAnswer} = quiz

    return (
        <div>
            <h2>{question}</h2>
            <h3>{alt1} *** {alt2}</h3>
            <h3>{alt3} *** {alt4}</h3>
            <h3>{rightAnswer}</h3>
        </div>
    );
}

//For each quiz in QUIZ collection - maps
function ListQuiz() {
    return (
        <div>
            <h1> The Quiz </h1>
            {QUIZ.map(q => <QuizCard key={q.question} quiz={q}/>)}
        </div>
    );
}


function QuizApplication() {
    return (
            <Routes>
                <Route path={"/"} element={<ListQuiz/>}></Route>
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



