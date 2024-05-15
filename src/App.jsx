import "./App.css";
import { ConditionalRenderingExample } from "./components/consditional-statement";
import { ListAndLoopExample } from "./components/list-and-loops";
import { ListView } from "./components/list-view";
import UseStateAndUseReducer from "./components/use-stateand-user-reduce";
import { UseCallbackExample } from "./components/useCallBack";
import { UseEffectExample } from "./components/useEffect";
import UseMemoExample from './components/useMemo'

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
    {/* <ListAndLoopExample></ListAndLoopExample> */}
    {/* <UseEffectExample></UseEffectExample> */}
    {/* <UseMemoExample></UseMemoExample> */}
    <UseCallbackExample></UseCallbackExample>
  </div>
}

export default App;
