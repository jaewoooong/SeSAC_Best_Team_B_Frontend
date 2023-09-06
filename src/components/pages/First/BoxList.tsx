import React, { useState, useEffect } from "react";
import { Record, data } from "./data";
import "./firstPage.css";

interface imgName {
  imageName: string;
}

const BoxList: React.FC<data> = ({ data }) => {
  const [dataImages, setDataImages] = useState<imgName[]>(data.images);

  useEffect(() => {
    if (dataImages.length > 4) {
      setDataImages(dataImages.slice(0, 4));
    }
  }, [dataImages]);

  function renderComponent(imgSrc: string) {
    let width = "100%";
    let height = "100%";
  
    if (data.images.length >= 4) {
      width = "50%";
      height = "50%";
    } else if (data.images.length === 3) {
      width = "100%";
      height = "33.3%";
    } else if (data.images.length === 2) {
      width = "100%";
      height = "50%";
    }
  
    return <img src={imgSrc} style={{ width, height }} key={imgSrc} alt="" />;
  }

  console.log(dataImages)

  return (
    <div className="box">
      {dataImages.map((img: imgName) => (
        renderComponent(img.imageName)
      ))}
    </div>
  );
};

export default BoxList;
