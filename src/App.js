import React, { useState } from "react";
import './App.css';
// import Note from "./components/Note";
// import RandomNumber from "./components/RandomNumber";
// import Counter from "./components/Counter";
// import Button from "./components/Button";

// const textBtns = ["Hi click me", "Press me", "why not press me", "Hit me or I hit you", "Please change count!"]
// import Persons from "./components/Persons";
// import Login from "./components/Login";
import Wrapper from "./components/Wrapper";


function App() {

  // const [counter, setCounter] = useState(0);

  // const incrementCount = () => {
  //   setCounter(counter + 1)
  // }

  // const countBtns = textBtns.map((text, index) => {
  //   return <Button key={index} onClick={incrementCount} text={text} />
  // })
  // const styleResetBtn = { backgroundColor: 'green' }


  return (
    <div className="App">
      <Wrapper someProps="someProps">
        <h1 text="text from props children">Hello inside </h1>
        <button>Click me!</button>
      </Wrapper>
    </div>
  );
}




export default App;
