import React, { useEffect, useState } from "react";
import "./App.css"; // TailwindCSS를 CSS 파일에 임포트해야 합니다

function MantraScheduleGrid({ key, data }) {
  return (
    <div className="grid-wrapper">
      {data.map((element, index) => (
        <input
          key={key}
          className="grid-item"
          placeholder={data.statements[0]}
          value={element}
        />
      ))}
    </div>
  );
}

export default MantraScheduleGrid;
