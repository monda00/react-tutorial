import "./App.css";
import MyHello from "./components/MyHello";
import EventBasic from "./components/EventBasic";
import StateBasic from "./components/StateBasic";
import ForList from "./components/ForList";
import ForFilter from "./components/ForFilter";
import books from "./data/books";
import ForItem from "./components/ForItem";
import SelectStyle from "./components/SelectStyle";

function App() {
  return (
    <div className="App">
      <MyHello myName="monda" />
      <EventBasic type="time" />
      <StateBasic init={0} />
      <ForList src={books} />
      <ForFilter src={books} />
      <ForItem books={books[0]} />
      <SelectStyle mode="dark" />
    </div>
  );
}

export default App;
