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
    it("lets user add a new quiz", () => {
        const theAnswer = quizArray.find(q => q.id === 3).rightAnswer;
        expect(theAnswer).toEqual(4);
    });

});