import React from "react";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container one">
      <h1 className="quiz">Quiz App</h1>
      <br />
      <Link to={"/Quiz"} style={{
        textDecoration: "none",
        color: "white"
      }}>
        <button className="play">Play</button>
      </Link>
    </div>
  );
}
