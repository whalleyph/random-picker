import React from "react";
import "./App.css";

function App() {
  const [pickedWord, setPickedWord] = React.useState("Random Word");
  const [textArray, setTextArray] = React.useState([
    "player1",
    "player2",
    "player3",
    "player4",
  ]);
  const textValue = textArray.join(" ");

  function handleChange(event) {
    const textToArray = event.target.value.split(" ");
    setTextArray(textToArray);
  }

  function randomPick() {
    const randomNumber = Math.floor(Math.random() * textArray.length);
    setPickedWord(textArray[randomNumber]);
  }

  return (
    <>
      <h1>Random Picker</h1>
      <div className="text--area">
        <textarea value={textValue} onChange={handleChange} />
      </div>
      <div className="button">
        <button onClick={randomPick}>Random</button>
      </div>
      <div className="picked--word">
        <p>{pickedWord}</p>
      </div>
    </>
  );
}

export default App;
