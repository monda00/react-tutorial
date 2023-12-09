import "./App.css";
import MyHello from "./components/MyHello";
import EventBasic from "./components/EventBasic";
import StateBasic from "./components/StateBasic";

function App() {
  return (
    <div className="App">
      <MyHello myName="monda" />
      <EventBasic type="time" />
      <StateBasic init={0} />
    </div>
  );
}

export default App;
