import React, { useEffect, useState } from "react";
import BoxComponent from "./List";
import { dummyData } from "./data";
import axios from "axios";

const App: React.FC = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null as any);
  console.log(data)
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/main');
        
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData()
  }, [])

  return (
    <div>
      {dummyData.map((item, index) => (
        <BoxComponent key={index} data={item} />
      ))}
    </div>
  );
};

export default App;
