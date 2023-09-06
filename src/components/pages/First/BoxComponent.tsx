import React from "react";
import { DataItem } from "../data/data";
import "./MainPage.css";

interface BoxComponentProps {
  data: DataItem;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ data }) => {
  const s3_url = process.env.REACT_APP_S3_URL;
  console.log(s3_url)

  function truncateString(str: string) {
    if (str.length <= 100) {
      return str;
    }
    return str.slice(0, 100) + "...";
  }

  return (
    <div className="box">
      <div className="relative">
      </div>
      {data.images.map((image, index) => (
        <div key={index}>
          <img src={`${s3_url}/${image.imageName}`} />
          <div className="image">{"lat"}{(image.GPSLatitude)}</div>
          <div className="image">{"long"}{(image.GPSLongitude)}</div>
          <div className="image">{"date"}{(image.CreateDate)}</div>
        </div>
      ))}
      <div className="record">{"record "}{truncateString(data.record.recordValue)}</div>
    </div>
  );
};

export default BoxComponent;
