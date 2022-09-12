import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const root = ReactDOM.createRoot(document.getElementById("app"));

const QUIZ = [
    {
        question: "The country of Pizza",
        alt1: "Norway",
        alt2: "Italy",
        alt3: "Spain",
        alt4: "Germany",
        rightAnswer: 1
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
                <li><Link to={"/quiz/new"}> Make your own Quiz</Link></li>
            </ul>
        </>
    );
}

//This function returns one quiz.
function QuizCard({quiz}) {
    const {question, alt1, alt2, alt3, alt4, rightAnswer} = quiz

    //Check if answer is right.
    function handleClick(event) {
        event.preventDefault();

        //HUR KOLLA OM CLICK ÄR RÄTT?
        console.log(quiz.rightAnswer);

        //if button value == quiz.rightanswer -> rätt. hur göra?!

        if (quiz.rightAnswer) {
            console.log("did not reach")
        }

    }

    return (
        <div>
            <h2>{question}</h2>
            <button value="1" onClick={handleClick}>{alt1}</button>
            <button>{alt2}</button>
            <button>{alt3}</button>
            <button>{alt4}</button>
            <hr></hr>
        </div>
    );
}

//This function calls the QuizCard function to list all the quiz.
function ListQuiz() {
    return (
        <div>
            <h1> The Quiz </h1>
            {QUIZ.map(q => <QuizCard key={q.question} quiz={q}/>)}
        </div>
    );
}


//----CREATE NEW QUIZ----------------------
function CreateQuiz() {
    const [question, setQuestion] = useState("");
    const [alt1, setAlt1] = useState("");
    const [alt2, setAlt2] = useState("");
    const [alt3, setAlt3] = useState("");
    const [alt4, setAlt4] = useState("");
    const [rightAnswer, setRightAnswer] = useState("");
    const [newQuiz, setNewQuiz] = useState({});     //default value of useState here is {}, since it should be a new object.

    const navigate = useNavigate();

    //Connects the input
    useEffect(() => {
            setNewQuiz({question, alt1, alt2, alt3, alt4, rightAnswer});
        }, [question, alt1, alt2, alt3, alt4, rightAnswer]
    );

    //Inner function
    function handleSubmit(event) {
        event.preventDefault();
        QUIZ.push(newQuiz);
        navigate("../");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1> Create new Quiz </h1>
            <div>
                Question: <input value={question} onChange={event => setQuestion(event.target.value)}/>
            </div>
            <div>
                Alternative 1: <input value={alt1} onChange={event => setAlt1(event.target.value)}/>
            </div>
            <div>
                Alternative 2: <input value={alt2} onChange={event => setAlt2(event.target.value)}/>
            </div>
            <div>
                Alternative 3: <input value={alt3} onChange={event => setAlt3(event.target.value)}/>
            </div>
            <div>
                Alternative 4: <input value={alt4} onChange={event => setAlt4(event.target.value)}/>
            </div>
            <div>
                Right Answer: <input value={rightAnswer} onChange={event => setRightAnswer(event.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    );
}

//<pre> - pre-format text.
//{JSON.stringify()} - shows the input in this case.


function QuizApplication() {
    return (
        <Routes>
            <Route path={"/"} element={<ListQuiz/>}></Route>
            <Route path={"/new"} element={<CreateQuiz/>}></Route>
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

