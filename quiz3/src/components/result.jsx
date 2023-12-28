import React,{useState} from "react";
import { Link } from 'react-router-dom'

export default function Result({ correctAns, setCorrect, wrongAns, setWrong }) {

  return (
    <div className="container three">
      <h1 className="result m">Result</h1>
      <div className="small-box m">
          <h1 className="score">Your score is {Math.floor(correctAns/15*100)}%</h1>
        <div className="ana">
          <div className="point">
            <h4>Total number of questions</h4>
            <h4>15</h4>
          </div>
          <div className="point">
            <h4>Number of attempted questions</h4>
            <h4>{correctAns+wrongAns}</h4>
          </div>
          <div className="point">
            <h4>Number of correct answers</h4>
            <h4>{correctAns}</h4>
          </div>
          <div className="point">
            <h4>Number of wrong answers</h4>
            <h4>{wrongAns}</h4>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to={"/Quiz"} style={{
          textDecoration: "none",
          color: "white"
        }}>
          <button id="btn-1" onClick={() => { setCorrect(0), setWrong(0)}}>Play again</button>
        </Link>
        <Link to={"/"} style={{
          textDecoration: "none",
          color: "white"
        }}>
          <button id="btn-2">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}