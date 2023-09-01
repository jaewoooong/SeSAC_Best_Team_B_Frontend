import React from "react";
import BoxComponent from "./List";
import { dummyData } from "./data";

const App: React.FC = () => {
  return (
    <div>
      {dummyData.map((item, index) => (
        <BoxComponent key={index} data={item} />
      ))}
    </div>
  );
};

export default App;
