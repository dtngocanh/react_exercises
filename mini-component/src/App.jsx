import "./App.css";
import CheckBoxList from "./components/CheckBoxList/CheckBoxList";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import HoverBox from "./components/HoverBox/HoverBox";
import InputDisplay from "./components/InputDisplay/InputDisplay";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {
  return (
    <div>
      <ToggleButton />

      <Counter />

      <InputDisplay />

      <ColorPicker />

      <Form />

      <CheckBoxList />

      <HoverBox />

      <SearchFilter />
    </div>
  );
}

export default App;
