import MainPage from "./components/pages/First/MainPage";
import LoginPage from "./components/pages/Login/LoginPage";
import MapPage from './components/pages/Map/MapPage'
import TimelinePage from './components/pages/Timeline/TimelinePage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UploadComponent from "./components/pages/upload/UploadComponent";
import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 페이지 */}
        <Route path="/main" element={<MainPage />} />
        {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginPage />} />
        {/* 업로드 페이지 */}
        <Route path="/upload" element={<UploadComponent />} />
        {/* 지도 페이지 */}
        <Route path='/map' element={<MapPage />} />
        {/* 타임라인 페이지 */}
        <Route path='/timeline' element={<TimelinePage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
