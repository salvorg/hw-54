import React, {useState} from 'react';
import './App.css';
import CellArea from "../../components/CellArea/CellArea";
import Counter from "../../components/Counter/Counter";
import ResetButton from "../../components/ResetButton/ResetButton";

let theCounter = 0;
function App() {
  const createState = () => {
    const arr = [];

    for (let i = 0; i < 36; i++) {
      const obj = {hasItem: false, clicked: false, id: i, onBodyClick: () => openCell(i)};

      arr.push(obj);
    }

    const random = Math.floor(Math.random() * (arr.length - 1));

    arr[random].hasItem = true;

    return arr;
  };
  const [items, setItems] = useState(createState());
  const [counter, setCounter] = useState(0);

  const openCell = (id: number) => {
    const index = items.findIndex(i => i.id === id);
    const itemsCopy = [...items];

    if (!itemsCopy[index].clicked) {
      itemsCopy[index].clicked = true;
      theCounter++;
    }

    setCounter(theCounter);
    setItems(itemsCopy);
  };

  const resetItems = () => {
    theCounter = 0;
    setCounter(theCounter);
    const newArr = createState();
    const itemsCopy = [...items];
    for (let i = 0; i < itemsCopy.length; i++) {
      itemsCopy[i].hasItem = newArr[i].hasItem;
      itemsCopy[i].clicked = newArr[i].clicked;
    }
    setItems(itemsCopy);
  }

  return (
    <div className="App">
      <CellArea board={items}/>
      <Counter cellCount={counter}/>
      <ResetButton onButtonClick={resetItems}/>
    </div>
  );
}

export default App;
