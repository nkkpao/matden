import "./App.css";
import { AxaxaComponent } from "./components/AxaxaComponent";
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
      <AxaxaComponent />
    </div>
  );
}

export default App;
