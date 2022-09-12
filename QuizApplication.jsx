import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {Link, Route, Routes} from "react-router-dom";

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