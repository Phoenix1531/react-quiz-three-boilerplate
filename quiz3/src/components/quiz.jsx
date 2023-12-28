import React, { useState } from "react";
import quizQuestion from "../resources/quizQuestion.json";
import { Link, useNavigate } from 'react-router-dom'

export default function Quiz({ correctAns, setCorrect, wrongAns, setWrong }) {
  const [currIndex, setState] = useState(0)
  const Navigate=useNavigate()
  const increaseCount = () => {
    if (currIndex == quizQuestion.length - 1) {
      Navigate('/Result')
    } else {
      setState(currIndex + 1);
    }
  };
  const decreaseCount = () => {
    if (currIndex == 0) {
      alert("Previous question doesn't exist")
    } else {
      setState(currIndex - 1);
    }
  };
  function optionClick(option) {
    let selectedOption;
    switch (option) {
      case 'A':
        selectedOption = quizQuestion[currIndex].optionA;
        break;
      case 'B':
        selectedOption = quizQuestion[currIndex].optionB;
        break;
      case 'C':
        selectedOption = quizQuestion[currIndex].optionC;
        break;
      case 'D':
        selectedOption = quizQuestion[currIndex].optionD;
        break;

    }

    if (selectedOption === quizQuestion[currIndex].answer) {
      alert("Correct Answer");
      increaseCount();
      setCorrect(correctAns + 1)
    } else {
      alert("Wrong Answer");
      increaseCount();
      setWrong(wrongAns + 1)
    }
  }
  return (
    <div className="container two">
      <div className="big-box">
        <h1>Question</h1>
        <p className="two-two">{currIndex + 1} of 15</p>
        <h4 className="two-three">
          {quizQuestion[currIndex].question}
        </h4>
        <div className="options">
          <button className="opt" onClick={() => optionClick("A")}>
            {quizQuestion[currIndex].optionA}
          </button>
          <button className="opt" onClick={() => optionClick("B")}>
            {quizQuestion[currIndex].optionB}
          </button>
        </div>
        <div className="options">
          <button className="opt" onClick={() => optionClick("C")}>
            {quizQuestion[currIndex].optionC}
          </button>
          <button className="opt" onClick={() => optionClick("D")}>
            {quizQuestion[currIndex].optionD}
          </button>
        </div>
        <div className="btns">
          <button className="blue" onClick={decreaseCount}>Previous</button>
          <button className="green" onClick={increaseCount}>Next</button>
          <Link to={"/"} style={{
            textDecoration: "none",
            color: "white"
          }}>
            <button className="red" onClick={() => { alert("Are you sure you want to quit?"), setCorrect(0), setWrong(0)}}>Quit</button>
          </Link>
          <Link to={"/Result"} style={{
            textDecoration: "none",
            color: "white"
          }}>
            <button>Finish</button>
          </Link>
        </div>
      </div>
    </div>
  );
}