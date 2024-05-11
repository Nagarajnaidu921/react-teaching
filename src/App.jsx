import "./App.css";
import { ConditionalRenderingExample } from "./components/consditional-statement";
import { ListAndLoopExample } from "./components/list-and-loops";
import { ListView } from "./components/list-view";
import UseStateAndUseReducer from "./components/use-stateand-user-reduce";

/**
 * 
 * @param {*} state 
 * @param {*} action.type 'SELL | BUY' 
 * @param {*} action.item 'book | pen' 
 */



function App() {
  return <div >
    {/* <UseStateAndUseReducer></UseStateAndUseReducer> */}
    {/* <ListView></ListView> */}
    {/* <ConditionalRenderingExample></ConditionalRenderingExample> */}
    <ListAndLoopExample></ListAndLoopExample>
  </div>
}

export default App;
