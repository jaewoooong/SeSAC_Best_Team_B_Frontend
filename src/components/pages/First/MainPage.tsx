import React, { useEffect, useState } from "react";
import BoxComponent from "./BoxComponent";
import { DataItem } from "../data/data";
import axios from "axios";

const MainPage: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/main")
        console.log(res.data)
        setData(res.data)
        setLoading(false); // 데이터를 성공적으로 받아왔으므로 로딩 상태 변경
      } catch (error) {
        console.log("데이터 가져오기 오류", error)
        setLoading(false); // 데이터를 받아오는 중 오류가 발생하더라도 로딩 상태 변경
      }
    };

    fetchData();
  }, [])

  // 로딩 중일 때 로딩 표시
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <BoxComponent key={index} data={item} />
      ))}
    </div>
  );
};

export default MainPage;
