import "./App.css";
import MantraScheduleGrid from "./MantraScheduleGrid";
import { useState, useEffect } from "react";

function App() {
  const [main, setMain] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:5000/mandalart/board/65e8280387049e50c45a0756"
      );
      const jsonData = await response.json();
      setMain(jsonData.main);
      setChildren(jsonData.children);
      console.log(jsonData.children);
    };

    fetchData();
  }, []);

  return (
    <div className="main-container">
      <h1 className="main-title">만트라트 계획표</h1>
      <div className="grid-container">
        {children.forEach((element) => {
          console.log(element);
        })}
      </div>
    </div>
  );
}

export default App;
