
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';
import { Routes, Route } from "react-router-dom";
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';

function App() {
  return (
    <>
    <>
    <Navbaar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/view/:id" element={<Details />} />
        
      
      </Routes>
    </>
    <>
      <Routes>
      <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
    </>
  
    
  );
}

export default App;
