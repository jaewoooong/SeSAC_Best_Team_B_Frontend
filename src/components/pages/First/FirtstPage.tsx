import React, { useEffect, useState } from "react";
import BoxComponent from "./List";
import axios from "axios";
import { Record,data } from "./data";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null as any);
  console.log('data 9', data)
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/main');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData()
  }, [])

  
  return (
    <div>
      {data.map((item :Record, index : number) => (
        <div className="FirstPage">
           <BoxComponent key={item.kakaoId} data={item} />
        </div>
      ))}
     
    </div>
  );
};

export default App;
