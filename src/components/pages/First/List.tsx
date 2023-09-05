import React from "react";
import { Record, data } from "./data";
// import "./firstPage.css";


const BoxComponent: React.FC<data> = ( {data} ) => {
  // function truncateString(str: string) {
  //   if (str.length <= 100) {
  //     return str;
  //   }
  //   return str.slice(0, 100) + "...";
  // }
  function renderComponent() {
    if(data.images.length > 4){

    }
  }
  return (
    <div className="box">
      <div className="imagebox">
       
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default BoxComponent;
