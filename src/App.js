import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login/Login"
import MyPage from "./pages/MyPage/MyPage"
import './css/styles.css';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
