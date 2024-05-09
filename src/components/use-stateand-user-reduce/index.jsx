import { StoreOne } from "./store-with-use-state";
import { StoreTwo } from "./store-with-reducer";


function UseStateAndUseReducer() {
  return <div className="store-container">
    <StoreOne></StoreOne>
    <StoreTwo></StoreTwo>
  </div>
}

export default UseStateAndUseReducer;
