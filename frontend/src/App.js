import "./App.css";
import MantraScheduleGrid from "./MantraScheduleGrid";

const COUNT_TABLE = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <div className="main-container">
      <h1 className="main-title">만트라트 계획표</h1>
      <div className="grid-container">
        {COUNT_TABLE.map((table) => {
          return <MantraScheduleGrid key={table}></MantraScheduleGrid>;
        })}
      </div>
    </div>
  );
}

export default App;
