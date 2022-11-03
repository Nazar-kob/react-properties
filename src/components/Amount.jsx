import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/reducers";

const Amount = () => {
  //   const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount);
  console.log(amount);

  const addAmount = (value) => {
    dispatch(actions.addAmount(value));
  };

  const deleteAmount = (value) => {
    dispatch(actions.deleteAmount(value));
  };

  const clearAmount = () => dispatch(actions.clearAmount());

  return (
    <div>
      <span>Amount: {amount}</span>
      <button onClick={() => addAmount(10)}>+10</button>
      <button onClick={() => deleteAmount(10)}>-10</button>
      <button onClick={clearAmount}>claer</button>
      <button onClick={() => addAmount(50)}>+50</button>
      <button onClick={() => deleteAmount(50)}>-50</button>
    </div>
  );
};

export default Amount;
