import React,{useState} from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Quiz from './components/quiz'
import Home from './components/home'
import Result from './components/result'

const App = () => {
  const [correctAns, setCorrect] = useState(0);
  const [wrongAns, setWrong] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Quiz" element={<Quiz 
          correctAns={correctAns}
          setCorrect={setCorrect}
          wrongAns={wrongAns}
          setWrong={setWrong}
          />}></Route>
        <Route path="/Result" element={<Result correctAns={correctAns} wrongAns={wrongAns} setCorrect={setCorrect} setWrong={setWrong}/>}></Route>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App