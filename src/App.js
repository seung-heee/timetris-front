import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import './css/styles.css';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
