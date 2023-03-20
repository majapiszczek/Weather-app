import "./App.css";
import WeatherApp from "./WeatherApp.js";

function App() {
  return (
    <div className="App">
      <WeatherApp defaultCity={"London"} />
    </div>
  );
}

export default App;
