import "./App.css";
import Lottery from "./Lottery.jsx";

function App() {
  //ticket num start from 0
  let winCondition = (ticket) => {
    return ticket[0] === 0;
  };

  return (
    <div>
      <Lottery n={3} winCondition={winCondition} />
    </div>
  );
}
export default App;
