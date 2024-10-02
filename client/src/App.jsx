import "./App.css";
import Data from "./components/Data";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/data" element={<Data />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
