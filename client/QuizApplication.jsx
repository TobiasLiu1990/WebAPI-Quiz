import * as React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const QUIZ = [
    {
        question: "The country of Pizzas",
        alt1: "Norwayy",
        alt2: "Italy",
        alt3: "Spain",
        alt4: "Germany",
        rightAnswer: 2
    },
    {
        question: "The country of Sushis",
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


//This function returns one quiz.
function QuizCard({quiz}) {
    const {question, alt1, alt2, alt3, alt4, rightAnswer} = quiz

    console.log(quiz)

    //Check if answer is right.x
    function handleClick(event) {
        const answer = document.getElementById("print-answer");

        if (parseInt(event.target.value) === rightAnswer) {
            answer.innerText = quiz["alt" + event.target.value] + " is correct!"
        } else {
            answer.innerText = quiz["alt" + event.target.value] + " is wrong!"
        }
    }

    return (
        <div>
            <h2>{question}</h2>
            <button value="1" onClick={handleClick}>{alt1}</button>
            <button value="2" onClick={handleClick}>{alt2}</button>
            <button value="3" onClick={handleClick}>{alt3}</button>
            <button value="4" onClick={handleClick}>{alt4}</button>
            <hr></hr>
        </div>
    );
}

//This function calls the QuizCard function to list all the quiz.
export function ListQuiz() {
    return (
        <div>
            <h1> The Quiz </h1>
            {QUIZ.map(q => <QuizCard key={q.question} quiz={q}/>)}
            <br></br>
            <h2 id="print-answer"></h2>
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
    const [newQuiz, setNewQuiz] = useState({});             //default value of useState here is {}, since it should be a new object.

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


export function QuizApplication() {
    return (
        <Routes>
            <Route path={"/"} element={<ListQuiz/>}></Route>
            <Route path={"/new"} element={<CreateQuiz/>}></Route>
        </Routes>
    );
}