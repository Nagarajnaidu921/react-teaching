import { useReducer } from "react";

const reducer = (store, action) => {
  switch (action.type) {
    case "buy": {
      const tempStore = { ...store };
      tempStore[action.item] = tempStore[action.item] + 1;
      return tempStore;
    }
    case "sell": {
      const tempStore = { ...store };
      tempStore[action.item] = tempStore[action.item] - 1;
      return tempStore;
    }
  }
};

export const StoreTwo = () => {
  const [store, dispatch] = useReducer(reducer, {
    books: 10,
    pens: 20,
  });

  return (
    <section>
      <h1>Use Reducer</h1>
      <div>
        <p>Books: {store.books}</p>
        <p>Pens: {store.pens}</p>
      </div>
      <h2>Actions:</h2>
      <div>
        <div>
          <h3>Buy</h3>
          <div>
            <span>
              <button
                onClick={() =>
                  dispatch({
                    type: "buy",
                    item: "books",
                  })
                }
              >
                Book
              </button>
            </span>
            <span>
              <button
                onClick={() =>
                  dispatch({
                    type: "buy",
                    item: "pens",
                  })
                }
              >
                Pen
              </button>
            </span>
          </div>
        </div>
        <div>
          <h3>Sell</h3>
          <div>
            <span>
              <button
                onClick={() =>
                  dispatch({
                    type: "sell",
                    item: "books",
                  })
                }
              >
                Book
              </button>
            </span>
            <span>
              <button
                onClick={() =>
                  dispatch({
                    type: "sell",
                    item: "pens",
                  })
                }
              >
                Pen
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
