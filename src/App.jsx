import {  useReducer } from "react";
import "./App.css";
import { storeReducer } from "./reducers/stock";

/**
 * 
 * @param {*} state 
 * @param {*} action.type 'SELL | BUY' 
 * @param {*} action.item 'book | pen' 
 */



function App() {
  const [stock, dispatchStock] = useReducer(storeReducer, {
    book: 10,
    pen: 10,
  })

  return (
    <div>
      <div>
        <span>Book:</span>
        <span>{stock.book}</span>
      </div>
      <div>
        <span>Pen:</span>
        <span>{stock.pen}</span>
      </div>
      <div>
        <span>
          <button
            onClick={() => {
              dispatchStock({
                type: 'SELL',
                item: 'book'
              })
            }}
          >
            Sell Book(1)
          </button>
        </span>
        <span>
          <button
            className="pen-btn"
            onClick={() => {
              dispatchStock({
                type: 'SELL',
                item: 'pen'
              })
            }}
          >
            Sell Pen(1)
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            onClick={() => {
              dispatchStock({
                type: 'BUY',
                item: 'book'
              })
            }}
          >
            Buy Book(1)
          </button>
        </span>
        <span>
          <button
            className="pen-btn"
            onClick={() => {
              dispatchStock({
                type: 'BUY',
                item: 'pen'
              })
            }}
          >
            BUY Pen(1)
          </button>
        </span>
      </div>
    </div>
  );
}

export default App;
