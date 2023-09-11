import Timeline from './Timeline';
import { DataItem } from "../data/data"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function TimelinePage() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { roomId } = useParams(); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/main")
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
    <div className='background1' style={{display:"flex", height:"100vh"}}>
      <aside style={{background : "#000"}}>
          <div>
            <Link to="/">
              <img src="/Home.png" alt="" />
            </Link>
            <Link to={`/map/${roomId}`}>
              <div className="menu">
                <img src="/earth.png" alt="" />
                <span>Map</span>
              </div>
            </Link>
            <Link to={`/timeline/${roomId}`}>
              <div className="menu">
                <img src="/Image.png" alt="" />
                <span>timeline</span>
              </div>
            </Link>
            <Link to="/login">
              <div className="menu">
                <img src="/Settings.png" alt="" />
                <span>login</span>
              </div>
            </Link>
            <div style={{width:"80%" , textAlign:"center", color:"#fff", marginTop:"100px",margin:"20px 10%",  background: "rgb(255 255 255 / 15%)", padding:"7px 0", borderRadius:"15px 25px 15px 25px"}}> 
              <img style={{marginRight:"5px"}} className='/uploadImg.png' src="/upload.png" alt="" width={40} height={40}/>
              <div>upload</div>
            </div>
            <div className="close-button"></div>
          </div>
        </aside>
      <Timeline data={data} />
    </div>
  );
}

export default TimelinePage;
