import { useState, memo } from "react";

const UseCallBackWithoutHook = memo((props) => {
    return (
      <div>
        <button onClick={props.handleUpdate}>
          Update totale
        </button>
      </div>
    );
  });

export default () => {
  const [total, setToatl] = useState(0);
  const [random, setRandom] = useState(0)
  const [items, seItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 10]);

  const updateTotal = () => {
    setToatl(items.reduce((acc, curr) => acc + curr, 0))
  }

  return (
    <div>
    <h3>Without useCallback</h3>
      <div> Random: {random}</div>
      <button onClick={() => setRandom(Math.random())}>
        Random state generator
      </button>
      <div>Total: {total}</div>
      <hr />
      <UseCallBackWithoutHook handleUpdate={updateTotal}></UseCallBackWithoutHook>
    </div>
  );
};
