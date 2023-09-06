import React, { useEffect, useState } from "react";
import BoxList from "./BoxList";
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

  function recordV(recordValue : string){
    if(recordValue.length > 50 ){
      return recordValue.slice(0,50) + '...'
    } 
    return recordValue
  }
  
  return (
    <div className="FirstPage">
      {data.map((item :Record, index : number) => (
        <div>
          <div className="boxBG">
            <h3>{recordV(item.recordValue)}</h3>
            <span>{new Date(item.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>

          </div>
          <BoxList key={item.kakaoId} data={item} />
        </div>
      ))}
     
    </div>
  );
};

export default App;
