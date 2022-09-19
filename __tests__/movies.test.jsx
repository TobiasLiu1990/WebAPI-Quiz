import * as React from 'react';
import {render} from "react-dom";
import {ListQuiz} from "../QuizApplication";
import {quizArray} from '../QuizQuestions'

//describe - används som en suite/set för tester.
describe("quiz pages", () => {

    it("quiz list", () => {
        const element = document.createElement("div")
        render(<ListQuiz/>, element);
        expect(element.innerHTML).toMatchSnapshot();           //expect == assert i java.
    });

    //Bara för att testa från quizArray från original .js quizet.
    //Ex. 1 från Johannes föreläsning 2 API
    it("lets user add a new quiz", () => {
        const theAnswer = quizArray.find(q => q.id === 3).rightAnswer;

        expect(theAnswer).toEqual(4);
    });

    //Ex. 2 från Johannes föreläsning 2 API
    //Om t ex man ville printa ut flera properties i ett object så kan detta sättet användas.
    /*
    it("lets user add a new quiz 2", () => {
        const theAnswer = quizArray.find(q => q.id === 3).rightAnswer;
        const answerNames = Object
            .keys(quizArray.rightAnswer)
            .filter(a => quizArray.rightAnswer[a]);

        expect(theAnswer).toEqual([
            "ex1", "ex2", "ex3", "ex4"
        ]);
    });
     */

});