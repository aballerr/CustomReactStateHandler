import React, { createContext } from "react";
import MyComponent from "./Components/MyComponent";
import ThirdLevelComponent from './Components/ThirdLevelComponent/ThirdLevelComponent'
import { MyProvider } from "./MyState";

const initialState = { count: 1 };

function handleIncrease() {
  initialState.count = initialState.count + 1;
}

function App() {
  return (
    <div className="App">
      <MyProvider>
        <button onClick={handleIncrease}>Increase Count</button>
        <MyComponent name="Alex" age={100} />
        <ThirdLevelComponent />
      </MyProvider>
    </div>
  );
}

export default App;
