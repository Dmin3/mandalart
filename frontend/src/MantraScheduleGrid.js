import React from "react";
import "./App.css"; // TailwindCSS를 CSS 파일에 임포트해야 합니다

const MantraScheduleGrid = () => {
  const cells = [
    { id: 1, title: "목표 1" },
    { id: 2, title: "목표 2" },
    { id: 3, title: "목표 3" },
    { id: 4, title: "목표 4" },
    { id: 5, title: "중요 목표" },
    { id: 6, title: "목표 6" },
    { id: 7, title: "목표 7" },
    { id: 8, title: "목표 8" },
    { id: 9, title: "목표 9" },
  ];

  return (
    <div className="grid-wrapper">
      {cells.map((cell) => (
        <input key={cell.id} className="grid-item" placeholder={cell.title} />
      ))}
    </div>
  );
};

export default MantraScheduleGrid;
