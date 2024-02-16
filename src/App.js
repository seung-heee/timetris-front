import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login/Login"
import MyPage from "./pages/MyPage/MyPage"
import './css/styles.css';
import Navbar from "./components/Navbar";
import NavbarNotLogin from "./components/NavbarNotLogin";
import GlobalStyle from './styles/GlobalStyle'
import { useState } from 'react'
import TempCategory from "./pages/TempCategory";

function App() {
  let [login, setLogin] = useState(true)

  return (
    <div className="App">
      <GlobalStyle />
      {
        login ? <Navbar /> : <NavbarNotLogin />
      }
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/tempcategory' element={<TempCategory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
