import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mounted==============>");
  }, []);

  useEffect(() => {
    console.log(`=========>count: ${count}`);
    return () => {
        console.log('====>Component destroyed')
    }
  }, [count]);

  const inc = () => {
    setCount((prevCount) => prevCount +1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={inc}>+1 count</button>
    </div>
  );
};

export const UseEffectExample = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <Counter></Counter>}
    </>
  );
};
