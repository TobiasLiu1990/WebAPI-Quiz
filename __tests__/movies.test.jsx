import {render} from "react-dom";
import {ListQuiz} from "../index";
import expect from "expect";



//describe är ett set/suite med tester
describe("quiz pages", () => {

    //it - ett test för settet.
    it("quiz list", () => {
        const element = document.createElement("div")

        render(<ListQuiz/>, element);


        expect(element.innerHTML).toMatchSnapshot();           //expect == assert i java.
    });


    it("lets user add a new quiz", () => {

    });

});