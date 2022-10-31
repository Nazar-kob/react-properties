import React, { useState } from "react";
import './App.css';
// import Note from "./components/Note";
// import RandomNumber from "./components/RandomNumber";
import Counter from "./components/Counter";
import Button from "./components/Button";

const textBtns = ["Hi click me", "Press me", "why not press me", "Hit me or I hit you", "Please change count!"]


function App() {

  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1)
  }



  return (
    <div className="App">
      <Counter count={counter} />
      {textBtns.map((text, index) => {
        return <Button key={index} onClick={incrementCount} text={text} />
      })}
    </div>
  );
}

export default App;
