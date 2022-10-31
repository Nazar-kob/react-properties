import React, { useState } from "react";
import './App.css';
// import Note from "./components/Note";
// import RandomNumber from "./components/RandomNumber";
import Counter from "./components/Counter";
import Button from "./components/Button";

const textBtns = ["Hi click me", "Press me", "why not press me", "Hit me or I hit you", "Please change count!"]
// import Persons from "./components/Persons";


function App() {

  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1)
  }

  const countBtns = textBtns.map((text, index) => {
    return <Button key={index} onClick={incrementCount} text={text} />
  })
  const styleResetBtn = { backgroundColor: 'green' }


  return (
    <div className="App">
      <Counter count={counter} />
      {countBtns}
      {counter > 0 && <div style={styleResetBtn}> <button onClick={() => setCounter(0)}>Reset sount</button> </div>}
    </div>
  );
}




export default App;
