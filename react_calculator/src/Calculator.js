import React from "react";
import axiosClient from "./utils/axios";

export default function Calculator() {
    let calculatorModel = {
        inputOne: 0,
        inputTwo: 0,
        operator: '+',
    }

    return (
        <div className="calculator card">
            <input type="text" id="result_input" className="calculator-screen z-depth-1" value="0" disabled/>
            <div className="calculator-row">
                <input type="number" name="input_one" className="input_one calc_input" onKeyUp={firstInput}/>
                <select name="operator" className="operator calc_input" onChange={changeOperator}>
                    <option value="+"> &#x1F47D; </option>
                    <option value="-"> &#x1F480; </option>
                    <option value="*"> &#x1F47B; </option>
                    <option value="/"> &#x1F631; </option>
                </select>
                <input type="number" name="input_two" className="input_two calc_input" onKeyUp={secondInput}/>
            </div>
        </div>
    )

    function changeOperator(e) {
         calculatorModel.operator = e.target.value;
         calculate();
    }

    function firstInput(e) {
         calculatorModel.inputOne = e.target.value;
         calculate();
    }

    function secondInput(e) {
         calculatorModel.inputTwo = e.target.value;
         calculate();
    }

    function calculate() {
         if (calculatorModel.inputOne && calculatorModel.inputTwo && calculatorModel.operator) {
            axiosClient.post("/calculator", calculatorModel)
            .then((resp) => {
                if (resp.data.status) {
                    document.querySelector(".calculator-screen").value = resp.data.result
                }
                else {
                    console.log(resp.data.message)
                }
            })
            .catch(err => {
                console.log(err);
             });
         }
    }
}