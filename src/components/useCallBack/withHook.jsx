import { useState, memo, useCallback } from "react";

const UseCallBackWithHook = memo((props) => {
  return (
    <div>
      <button onClick={props.handleUpdate}>Update totale</button>
    </div>
  );
});

export default () => {
  const [total, setToatl] = useState(0);
  const [random, setRandom] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 10]);

  const updateTotal = useCallback(() => {
    setToatl(items.reduce((acc, curr) => acc + curr, 0));
  }, [items]);

  return (
    <div>
      <h3>With useCallback</h3>
      <div> Random: {random}</div>
      <button onClick={() => setRandom(Math.random())}>
        Random state generator
      </button>
      <div>Total: {total}</div>
      <hr />
      <UseCallBackWithHook handleUpdate={updateTotal}></UseCallBackWithHook>
    </div>
  );
};
