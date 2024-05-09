import { useState } from "react";

export const StoreOne = () => {
  const [store, setStore] = useState({
    books: 10,
    pens: 20,
  });

  /**
   * 
   * @param {String} item book or pen
   */
  const buy = (item) => {
    const tempStore = {...store}
    tempStore[item] = tempStore[item]+1
    setStore(tempStore)
  }

  const  sell = (item) => {
    const tempStore = {...store};
    tempStore[item] = tempStore[item] - 1;;
    setStore(tempStore);
  }

  return (
    <section>
        <h1>Use State</h1>
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
              <button onClick={() => buy('books')}>Book</button>
            </span>
            <span>
              <button onClick={() => buy('pens')}>Pen</button>
            </span>
          </div>
        </div>
        <div>
          <h3>Sell</h3>
          <div>
            <span>
              <button onClick={() => sell('books')}>Book</button>
            </span>
            <span>
              <button onClick={() => sell('pens')}>Pen</button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
