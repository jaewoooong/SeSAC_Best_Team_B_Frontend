import React from "react";
import "./footer.css"
function Footer() {
  return <div className="footer">
      <a href="http://localhost:3000/upload"><img className="menu" src="./Vector2.png" alt="" /></a>
      {/* 모달로바꾸기 */}
      <a href="http://localhost:3000/"><img className="menu" src="./Home.png" alt="" /></a>
      <a href="http://localhost:3000/map"><img className="menu" src="./earth.png" alt="" /></a>
      <a href="http://localhost:3000/timeline"> <img className="menu" src="./Image.png" alt="" /></a>
      <a href="http://localhost:3000/map"><img className="menu" src="./Settings.png" alt="" /></a>
    </div>

}

export default Footer;
