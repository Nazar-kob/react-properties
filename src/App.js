import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Note from "./components/Note";
import RandomNumber from "./components/RandomNumber";
import Counter from "./components/Counter";
// import Button from "./components/Button";

// const textBtns = ["Hi click me", "Press me", "why not press me", "Hit me or I hit you", "Please change count!"]
import Persons from "./components/Persons";
import Login from "./components/Login";
// import Wrapper from "./components/Wrapper";
import Todo from "./components/Todo";
import Posts from "./components/Posts";
import MainLayout from "./components/MainLayout";


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
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<h1>Home page</h1>} />
            <Route path="posts" element={<Posts />} />
            <Route path="persons" element={<Persons />} />
            <Route path="login" element={<Login />} />
            <Route path="note" element={<Note petName='dog' age={15} havePet />} />
            <Route path="todo" element={<Todo />} />
            <Route path="random-number" element={<RandomNumber maxNumber={100} />} />
            <Route path="counter" element={<Counter count={10} />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Route>
        </Routes >
      </div>
    </BrowserRouter>
  );
}




export default App;
