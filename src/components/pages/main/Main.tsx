import React, { useEffect, useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import RoomForm from "./RoomForm";
import axios from "axios";

export interface RoomData {
  roomId: number;
  name: string;
  relationship: string;
  genderOrGroup: string;
  slogan: string;
}
const Main: React.FC = () => {
  const [room, setRoom] = useState<RoomData[]>([])
  const [formDisplay, setFormDisplay] = useState<boolean>(false)
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 3) + 1)
  console.log(room)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/main/room');
        console.log(response.data)
        setRoom(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [])

  return (
    
    <div className="background">
      <div className="Pagelayout">
        <aside>
          <div>
            <Link to="/">
              <img src="./Home.png" alt="" />
            </Link>
            <Link to="/map/1">
              <div className="menu">
                <img src="./earth.png" alt="" />
                <span>Map</span>
              </div>
            </Link>
            <Link to="/timeline/1">
              <div className="menu">
                <img src="./Image.png" alt="" />
                <span>timeline</span>
              </div>
            </Link>
            <Link to="/login">
              <div className="menu">
                <img src="./Settings.png" alt="" />
                <span>login</span>
              </div>
            </Link>
            <div className="close-button"></div>
          </div>
        </aside>


        <main className="mainPage">
          <div className="middle">
            <header>
              <div className="hamburger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <h2 className="logland">Logland</h2>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="search"
                />
                <img src="./Earth.png" alt="Search" className="search-icon" />
              </div>
              <div className="header_btn_box">
                <button onClick={() => setFormDisplay(prevState => !prevState)}>룸만들기</button>
              </div>
            </header>
            <ul className="roomList">
            {room.map((item , index) => (
               <Link to={`/timeline/${item.roomId}`} key={item.roomId}>
             <div>
               <img className={`img`+(index%3 + 1)} src={`./${item.genderOrGroup}.png`} alt="" />
               <span>No.{index + 1}</span>
               <div className="list_user_info">
                  <p className="name">Alias: {item.name}</p>
                  <p className="relationship">{item.relationship}</p>
                </div>
              </div>
              {/* <h3>추억이 함께</h3> */}
              <div>
                <h4>#{item.slogan?.split(' ').join('#')}</h4>
                <span>Num. {index + 1}</span>
              </div>
              <div>
                <span>{item.slogan}</span>
              </div>
         
               
             </Link>
             
           ))}
          
            </ul>
          </div>
          
          <div className="rightside">
            <div>
              <div>
                <h3>Memory Canvases</h3>
              </div>
              <div className="graph_Rank">
                <div className="rank2">
                  <svg
                    className="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="star-path"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                    <text
                      x="11.5"
                      y="14"
                      alignment-baseline="middle"
                      text-anchor="middle"
                      fill="#fff"
                      fontSize="8"
                    >
                      2
                    </text>
                  </svg>
                  <div>
                    <img
                      width={40}
                      height={40}
                      src="././girl1-removebg-preview.png"
                      alt=""
                    />
                    <h3>임재이</h3>
                  </div>
                </div>
                <div className="rank1">
                  <svg
                    className="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="star-path"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                    <text
                      x="11.5"
                      y="14"
                      alignment-baseline="middle"
                      text-anchor="middle"
                      fill="#fff"
                      fontSize="8"
                    >
                      1
                    </text>
                  </svg>
                  <div>
                    <img
                      width={40}
                      height={40}
                      src="././girl1-removebg-preview.png"
                      alt=""
                    />
                    <h3>임재이</h3>
                  </div>
                </div>
                <div className="rank3">
                  <svg
                    className="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="star-path"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                    <text
                      x="11.5"
                      y="14"
                      alignment-baseline="middle"
                      text-anchor="middle"
                      fill="#fff"
                      fontSize="8"
                    >
                      3
                    </text>
                  </svg>
                  <div>
                    <img
                      width={40}
                      height={40}
                      src="././girl1-removebg-preview.png"
                      alt=""
                    />
                    <h3>assd</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="under_1200px rightside_title">rank</h3>
              <div className="rank4_10">
                <div className="under_1200px">
                  <svg
                    className="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="star-path"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                  </svg>
                  <div>한승</div>
                  <div>100%</div>
                </div>
                <div className="under_1200px">
                  <svg
                    className="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="star-path"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                  </svg>
                  <div>승보</div>
                  <div>95%</div>
                </div>
                <div className="under_1200px">
                  <svg
                    className="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="star-path"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                  </svg>
                  <div>한보</div>
                  <div>85%</div>
                </div>
                <div>
                  <svg
                    className="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="star-path"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                  </svg>
                  <div>micle</div>
                  <div>75%</div>
                </div>
                <div>
                  <svg
                    className="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="star-path"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                  </svg>
                  <div>micle</div>
                  <div>75%</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    {formDisplay && <RoomForm setRoom={setRoom}  room={room} setFormDisplay={setFormDisplay}/>}  
    </div>
  );
};

export default Main;
