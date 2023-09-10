import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
interface Props {
  message: string;
}

const Main: React.FC = () => {
  return (
    <div className="background">
      <div className="Pagelayout">
        <aside>
          <Link to="/">
            <img src="./Home.png" alt="" />
          </Link>
          <Link to="/map">
            <div className="menu">
              <img src="./earth.png" alt="" />
              <span>settings</span>
            </div>
          </Link>
          <Link to="/timeline">
            <div className="menu">
              <img src="./Image.png" alt="" />
              <span>asd</span>
            </div>
          </Link>
          <Link to="/login">
            <div className="menu">
              <img src="./Settings.png" alt="" />
              <span>settings</span>
            </div>
          </Link>
        </aside>

        <main className="mainPage">
          <div className="middle">
            <header>
              <h2>BigBang</h2>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="search"
                />
                <img src="./Earth.png" alt="Search" className="search-icon" />
              </div>
            </header>
            <button>룸만들기</button>
            <ul className="roomList">
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="./girl1-removebg-preview.png" alt="" />
                  <span>1</span>
                </div>
                {/* <h3>추억이 함께</h3> */}
                <div>
                  <h2>Micle</h2>
                  <h3>family</h3>
                  <h4>zhugek asokjdoa</h4>
                </div>
                <div>
                  <span>슬로건</span>
                </div>
              </li>
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
                      font-size="8"
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
                    <h3>namesdsdssd</h3>
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
                      font-size="8"
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
                    <h3>namesdsdssd</h3>
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
                      font-size="8"
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
              <div className="rank4_10">
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
    </div>
  );
};

export default Main;
