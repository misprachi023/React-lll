import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
