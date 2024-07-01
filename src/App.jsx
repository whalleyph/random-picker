import React from "react";
import "./App.css";

function App() {
  const [pickedWord, setPickedWord] = React.useState("Random Word")

  return (
    <>
      <h1>Random Picker</h1>
      <div className="text--area">
        <textarea></textarea>
      </div>
      <div className="button">
        <button>Random</button>
      </div>
      <div className="picked--word">
        <p>{pickedWord}</p>
      </div>
    </>
  );
}

export default App;
