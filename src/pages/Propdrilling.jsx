/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CountContext } from "../context/countContext";

const Propdrilling = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
};

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);

  return <div>{count}</div>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Propdrilling;
