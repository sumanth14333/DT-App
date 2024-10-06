import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import DashBoard from './Components/DashBoard';
import LoginPage from './Components/LoginPage';
import Adddefect from './Components/Adddefect'
import View from './Components/View'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/DashBoard' element={<DashBoard />}>
      <Route path='Adddefect' element={<Adddefect/>}/>
      <Route path='View' element={<View/>} />
      </Route>
      <Route path='/LoginPage' element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
