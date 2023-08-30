import FirstPage from './components/pages/First/FirtstPage'
import LoginPage from './components/pages/Login/LoginPage'
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 페이지 */}
        <Route path='/' element={<FirstPage />} />
        {/* 로그인 페이지 */}
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
