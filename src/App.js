import "./App.css";
//import MyHello from "./components/MyHello";
//import EventBasic from "./components/EventBasic";
//import StateBasic from "./components/StateBasic";
//import ForList from "./components/ForList";
//import ForFilter from "./components/ForFilter";
//import books from "./data/books";
//import ForItem from "./components/ForItem";
//import SelectStyle from "./components/SelectStyle";
//import TitlePanel from "./components/TitledPanel";
//import EventMouse from "./components/EventMouse";
//import EventObj from "./components/EventObj";
//import EventPoint from "./components/EventPoint";
//import StateForm from "./components/form/StateForm";
//import StateNest from "./components/form/StateNest";
//import StateTodo from "./components/todo/StateTodo";
//import FormBasic from "./components/form/FormBasic";
//import SuspenseResult from "./components/suspense/SuspenseResult";
import {
  MyButton,
  MyStyledButton,
} from "./components/styledComponent/StyledComp";

function App() {
  return (
    <div className="App">
      {/*
      <MyHello myName="monda" />
      <EventBasic type="time" />
      <StateBasic init={0} />
      <ForList src={books} />
      <ForFilter src={books} />
      <ForItem books={books[0]} />
      <SelectStyle mode="dark" />
      <TitlePanel>
        <p key="title">This is title</p>
        <p key="body">This is body</p>
      </TitlePanel>
      <EventMouse
        alt="mouse event"
        beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
        afterSrc="https://www.web-deli.com/image/home_chara.gif"
      />
      <EventObj />
      <EventPoint />
      <StateForm />
      <StateNest />
      <StateTodo />
      <FormBasic />
      <SuspenseResult />
      */}
      <MyButton>MyButton</MyButton>
      <MyStyledButton>MyStyledButton</MyStyledButton>
    </div>
  );
}

export default App;
