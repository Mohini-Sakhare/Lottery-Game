import "./App.css";
import Lottery from "./Lottery.jsx";
import {Sum} from "./helper.js";

function App() {
  //ticket num start from 0
  // let winCondition = (ticket) => {
  //   return ticket[0] === 0;
  // };

 //sum of ticket no=18
  let winCondition=(ticket)=>{
  return Sum(ticket)===18;
  }
  return (
    <div>
      <Lottery n={3} winCondition={winCondition} />
    </div>
  );
}
export default App;
