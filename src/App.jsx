import "./App.css";
import { BoardComponent } from "./components/BoardComponent";
import { TimerComponent } from "./components/TimerComponent";

function App() {
  function restart() {
    console.log("Game restarted");
  }

  const player = {
    color: "black",
  };

  return (
    <div className="App">
      <TimerComponent currentPlayer={player} restart={restart} />
      <BoardComponent />
    </div>
  );
}

export default App;
