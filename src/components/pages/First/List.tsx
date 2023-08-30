import React from "react";
import { IDataItem } from "./data";
import "./firstPage.css";

interface BoxComponentProps {
  data: IDataItem;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ data }) => {
  function truncateString(str: string) {
    if (str.length <= 100) {
      return str;
    }
    return str.slice(0, 100) + "...";
  }

  return (
    <div className="box">
      <div className="relative">
        <img src={data.image[0]} alt="Left" className="left-image" />
        <div className="overlay">+{data.image.length}</div>
      </div>
      <div className="record">{truncateString(data.record)}</div>
    </div>
  );
};

export default BoxComponent;
