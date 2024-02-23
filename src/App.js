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
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Unauthorized from './pages/Unauthorized/Unauthorized'

import PastRecords from "./pages/PastRecords";
import DoModal from "./components/category/categoryModal/DoModal";

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
          {/* <Route path='/tempcategory' element={<TempCategory />} /> */}
          <Route path='/dragNdrop' element={<DragNDrop />} />
          <Route path='/pds' element={<Pds />} />
          <Route path='/pastrecords' element={<PastRecords />} />
          <Route path='/domodal' element={<DoModal />} />
          <Route path='/notFound' element={<NotFound />} />
          <Route path='/unauthorized' element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
