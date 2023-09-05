import React, { useEffect, useState } from "react";
import BoxComponent from "./BoxComponent";
import { DataItem } from "../data/data";
import axios from "axios";

const MainPage: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/main")
        console.log(res.data)
        setData(res.data)
      } catch (error) {
        console.log("데이터 가져오기 오류", error)
      }
    };

    fetchData();
  }, [])

  return (
    <div>
      {data.map((item, index) => (
        <BoxComponent key={index} data={item} />
      ))}
    </div>
  );
};

export default MainPage;
