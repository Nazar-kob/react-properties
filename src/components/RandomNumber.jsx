import React, { useState } from "react";
import { randomNumber } from "../utils/utils";

const RandomNumber = ({ maxNumber }) => {
  const [randomNum, setRandomNum] = useState(randomNumber(maxNumber));

  const generateRandomNum = () => setRandomNum(randomNumber(maxNumber));

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={generateRandomNum}>Generate new random number</button>
    </div>
  );
};

export default RandomNumber;
