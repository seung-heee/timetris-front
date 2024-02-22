import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/Login/Login"
import MyPage from "./pages/MyPage/MyPage"
import Pds from "./pages/Pds/Pds"
import './css/styles.css';
import Navbar from "./components/Navbar";
import NavbarNotLogin from "./components/NavbarNotLogin";
import GlobalStyle from './styles/GlobalStyle'
import { useEffect, useState } from 'react'
import TempCategory from "./pages/TempCategory";
import AddCategory from "./components/category/AddCategory";
import DragNDrop from "./pages/DragNDrop";

import PastRecords from "./pages/PastRecords";

function App() {
  let [login, setLogin] = useState(false)

  const isLogin = () => {
    if (sessionStorage.getItem('Authorization')) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }

  useEffect(() => {
    isLogin();
  }, [])


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
          <Route path='/dragNdrop' element={<DragNDrop />} />
          <Route path='/pds' element={<Pds />} />
          <Route path='/pastrecords' element={<PastRecords />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
