import FirstPage from './components/pages/First/FirtstPage'
import MapPage from './components/pages/Map/MapPage'
import TimelinePage from './components/pages/Timeline/TimelinePage'
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 페이지 */}
        <Route path='/' element={<FirstPage />} />
        {/* 지도 페이지 */}
        <Route path='/map' element={<MapPage />} />
        {/* 타임라인 페이지 */}
        <Route path='/timeline' element={<TimelinePage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
